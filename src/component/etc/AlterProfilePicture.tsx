import { useUser } from "../../store/user";
import CoverPicBtn from "./CoverPicBtn";
import ProfileIcon from "./ProfileIcon";

type Props = {
  isEdit: boolean;
  cb: (str: string) => void;
  picture?: string;
};

const AlterProfilePicture = (props: Props) => {
  const { userObj } = useUser();
  return (
    <>
      {props.isEdit ? (
        <div className="w-[60px] h-[60px] rounded-full border border-strokeTwo overflow-hidden relative bg-fillTwo">
          {(props.picture || userObj.profile_picture) && (
            <div
              dangerouslySetInnerHTML={{
                __html: props.picture || userObj.profile_picture,
              }}></div>
          )}
          <div className="absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[20%]">
            <CoverPicBtn callback={(str: string) => props.cb(str)} />
          </div>
        </div>
      ) : (
        <ProfileIcon radius="60px" />
      )}
    </>
  );
};

export default AlterProfilePicture;
