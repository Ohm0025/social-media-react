import { useState } from "react";
import ProfileIcon from "../etc/ProfileIcon";
import ModalUpdatePicture from "./ModalUpdatePicture";
import { useUser } from "../../store/user";
import { formatPicName } from "../../utils/formatPicName";
import { API_URL } from "../../utils/constant";

let defaultBg =
  "https://img.freepik.com/free-vector/yellow-hexagonal-honeycomb-mesh-pattern-with-text-space_1017-26292.jpg";

const ProfileCover = (props: any) => {
  const [isOpen, setIsOpen] = useState(false);
  const {
    userObj: { firstname, lastname, profile_cover, profile_picture },
  } = useUser();

  const picUrl = `${
    profile_cover
      ? API_URL + "/images" + formatPicName(profile_cover)
      : defaultBg
  }`;

  const otherUrl = `${
    props.otherObj?.profile_cover
      ? API_URL + "/images" + formatPicName(props.otherObj?.profile_cover)
      : defaultBg
  }`;
  console.log(props.otherObj);
  return (
    <div className="min-h-[60vh] bg-white min-w-[300px] shadow-md">
      <div
        className="w-full h-[50vh] mx-auto my-[-25px]"
        style={{
          backgroundImage: `linear-gradient(to top, rgba(255,255,255,0) ,rgba(0,0,0,0.8)),url(${
            props.isOther ? otherUrl : picUrl
          })`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
      <div className="flex justify-between items-center px-8 pb-2">
        <div className="flex items-center gap-3">
          <div className="flex flex-col justify-center items-center max-w-[70px] max-h-[70px] rounded-full overflow-hidden sm:max-h-none sm:max-w-none">
            <ProfileIcon
              radius="10rem"
              textSize="40px"
              profilePicture={
                props.isOther
                  ? props.otherObj?.profile_picture
                  : profile_picture
              }
            />
          </div>
          <div className="flex flex-col pt-6">
            <b className="text-[15px] sm:text-[30px]">
              {props.isOther
                ? props.otherObj?.firstname + " " + props.otherObj?.lastname
                : firstname + " " + lastname}
            </b>
            <small>Friend 10</small>
          </div>
        </div>
        {!props.isOther && (
          <div className="p-1 sm:px-3 sm:py-2 rounded-md mt-7 bg-[#ffcb08]">
            <button
              onClick={() => setIsOpen(true)}
              className="text-[10px] sm:text-[16px]">
              Edit Profile
            </button>
          </div>
        )}
      </div>
      <ModalUpdatePicture
        isOpen={isOpen}
        handleClose={() => setIsOpen(false)}
        oldPicture={props.profile_picture || null}
        oldCover={props.profile_cover || null}
      />
    </div>
  );
};

export default ProfileCover;
