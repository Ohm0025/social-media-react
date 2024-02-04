import { useState } from "react";
import ProfileIcon from "../etc/ProfileIcon";
import ModalUpdatePicture from "./ModalUpdatePicture";
import { useUser } from "../../store/user";
import { formatPicName } from "../../utils/formatPicName";
import { API_URL } from "../../utils/constant";
import PostBoard from "../homepage/PostBoard";
import ReactQuill from "react-quill";
import CoverPicBtn from "../etc/CoverPicBtn";
import BioWriter from "../etc/BioWriter";

const ProfileCover = (props: any) => {
  const [isEdit, setIsEdit] = useState(false);
  const { userObj } = useUser();

  return (
    <div className="bg-white shadow-md">
      <div className="w-full h-[300px] bg-bgCover cover center relative">
        {isEdit && (
          <button className="text-[16px] text-primary absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
            <div>
              <CoverPicBtn />
              {userObj.profile_cover ? "Edit photo cover" : "Add photo cover"}
            </div>
          </button>
        )}
      </div>
      <div className="flex justify-between items-center px-8 translate-y-[-50%]">
        <div className="flex items-center gap-3">
          {isEdit ? (
            <div className="w-[60px] h-[60px] rounded-full border border-strokeTwo overflow-hidden relative bg-fillTwo">
              <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[20%]">
                <CoverPicBtn />
              </div>
            </div>
          ) : (
            <ProfileIcon radius="60px" />
          )}
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
              <button
                onClick={() => setIsEdit(true)}
                className="rounded-[60px] bg-fillOne px-[16px] py-[10px] border border-strokeOne text-[16px] text-textOne flex items-center gap-[15px]">
                <div>
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg">
                    <path
                      d="M15.1875 14.3281H0.8125C0.466797 14.3281 0.1875 14.6074 0.1875 14.9531V15.6562C0.1875 15.7422 0.257812 15.8125 0.34375 15.8125H15.6562C15.7422 15.8125 15.8125 15.7422 15.8125 15.6562V14.9531C15.8125 14.6074 15.5332 14.3281 15.1875 14.3281ZM3.0332 12.6875C3.07227 12.6875 3.11133 12.6836 3.15039 12.6777L6.43555 12.1016C6.47461 12.0938 6.51172 12.0762 6.53906 12.0469L14.8184 3.76758C14.8365 3.74951 14.8508 3.72805 14.8606 3.70442C14.8704 3.68079 14.8755 3.65546 14.8755 3.62988C14.8755 3.6043 14.8704 3.57897 14.8606 3.55535C14.8508 3.53172 14.8365 3.51026 14.8184 3.49219L11.5723 0.244141C11.5352 0.207031 11.4863 0.1875 11.4336 0.1875C11.3809 0.1875 11.332 0.207031 11.2949 0.244141L3.01562 8.52344C2.98633 8.55273 2.96875 8.58789 2.96094 8.62695L2.38477 11.9121C2.36577 12.0167 2.37255 12.1244 2.40454 12.2258C2.43654 12.3273 2.49276 12.4193 2.56836 12.4941C2.69727 12.6191 2.85938 12.6875 3.0332 12.6875Z"
                      fill="#150AA1"
                    />
                  </svg>
                </div>
                <div>Edit Profile</div>
              </button>
            ) : (
              <button
                className="rounded-[60px] bg-fillOne px-[16px] py-[10px] border border-strokeOne text-[16px] text-textOne flex items-center gap-[15px]"
                onClick={() => setIsEdit(false)}>
                Save
              </button>
            )}
          </>
        )}
      </div>
      <div className="px-[15px] mb-[10px]">
        {isEdit ? <BioWriter /> : <PostBoard />}
      </div>
      <div className="grid grid-cols-3 text-[16px]">
        <div className="select-profile py-[20px] text-center hover:font-medium hover:cursor-pointer">
          Post
        </div>
        <div className="select-profile py-[20px] text-center hover:font-medium hover:cursor-pointer">
          Picture
        </div>
        <div className="select-profile py-[20px] text-center hover:font-medium hover:cursor-pointer">
          Bio
        </div>
      </div>
    </div>
  );
};

export default ProfileCover;
