import { useUser } from "../../../store/user";
import PostBoard from "../../homepage/newUI/postBoard/PostBoard";
import BioWriter from "../../etc/BioWriter";
import EditBtn from "../../etc/EditBtn";
import FilterProfile from "../../etc/FilterProfile";
import SaveOrCancel from "../../etc/SaveOrCancel";
import CoverBg from "../../etc/CoverBg";
import useProfileCover from "./ProfileCover.hook";
import AlterProfilePicture from "../../etc/AlterProfilePicture";
import { usePageProfile } from "../../../store/pageProfile";
import AddFriendBtn from "../../etc/AddFriendBtn";

const ProfileCover = (props: any) => {
  const {
    isEdit,
    setIsEdit,
    cover,
    setCover,
    picture,
    setPicture,
    des,
    setDes,
    handleUpdateUser,
  } = useProfileCover(props.callData, props.isOther, props.otherUserId);
  const { userObj } = useUser();

  const { currentPageProfile, changePageProfile } = usePageProfile();

  return (
    <div className="bg-white shadow-md">
      <CoverBg
        isEdit={isEdit}
        cb={(str: string) => setCover(str)}
        cover={cover}
        isOther={props.isOther}
        otherObj={props.otherObj}
      />
      <div className="flex justify-between items-center px-8 translate-y-[-50%] z-[1]">
        <div className="flex items-center gap-3">
          <AlterProfilePicture
            isEdit={isEdit}
            cb={(str: string) => setPicture(str)}
            picture={picture}
            isOther={props.isOther}
            otherObj={props.otherObj}
          />
          <div className="flex flex-col">
            <span className="text-[20px] font-bold text-textOne">
              {props.isOther
                ? props.otherObj?.firstname + " " + props.otherObj?.lastname
                : userObj.firstname + " " + userObj.lastname}
            </span>
            <small className="text-[16px] text-textTwo">{`Friend ${
              props.isOther
                ? props.otherObj?.countfriend || 0
                : userObj.countfriend || 0
            }`}</small>
          </div>
        </div>
        {props.isOther ? (
          <>
            {props.otherObj?.userStatus ? (
              <></>
            ) : (
              <AddFriendBtn callback={() => console.log("add frienf")} />
            )}
          </>
        ) : (
          <>
            {!isEdit ? (
              <EditBtn callback={() => setIsEdit(true)} />
            ) : (
              <SaveOrCancel
                switch={!(cover || picture || des !== userObj.description)}
                cb1={() => {
                  setCover("");
                  setPicture("");
                  setIsEdit(false);
                }}
                cb2={() => {
                  handleUpdateUser();
                }}
                cb3={() => {
                  setCover("");
                  setPicture("");
                }}
              />
            )}
          </>
        )}
      </div>
      {!props.isOther && (
        <div className="px-[15px] mb-[10px]">
          {isEdit ? (
            <BioWriter des={des} cb={(str: string) => setDes(str)} />
          ) : (
            <PostBoard isProfile={true} />
          )}
        </div>
      )}
      <FilterProfile
        selected={currentPageProfile}
        setFilterPage={changePageProfile}
        isFriend={props.otherObj?.userStatus}
        isOther={props.isOther}
      />
    </div>
  );
};

export default ProfileCover;
