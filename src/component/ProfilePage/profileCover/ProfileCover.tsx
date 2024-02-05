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
  } = useProfileCover(props.callData);
  const { userObj } = useUser();

  const { currentPageProfile, changePageProfile } = usePageProfile();

  return (
    <div className="bg-white shadow-md">
      <CoverBg
        isEdit={isEdit}
        cb={(str: string) => setCover(str)}
        cover={cover}
      />
      <div className="flex justify-between items-center px-8 translate-y-[-50%] z-[1]">
        <div className="flex items-center gap-3">
          <AlterProfilePicture
            isEdit={isEdit}
            cb={(str: string) => setPicture(str)}
            picture={picture}
          />
          <div className="flex flex-col">
            <span className="text-[20px] font-bold text-textOne">
              {userObj.firstname + " " + userObj.lastname}
            </span>
            <small className="text-[16px] text-textTwo">{`Friend ${
              userObj.countfriend || 0
            }`}</small>
          </div>
        </div>
        {!props.isOther && (
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
      <div className="px-[15px] mb-[10px]">
        {isEdit ? (
          <BioWriter des={des} cb={(str: string) => setDes(str)} />
        ) : (
          <PostBoard />
        )}
      </div>
      <FilterProfile
        selected={currentPageProfile}
        setFilterPage={changePageProfile}
      />
    </div>
  );
};

export default ProfileCover;
