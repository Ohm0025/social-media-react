import CoverPicBtn from "./CoverPicBtn";
import { useUser } from "../../store/user";

type Props = {
  isEdit: boolean;
  cb: (str: string) => void;
  cover: string;
  isOther?: boolean;
  otherObj?: any;
};

const CoverBg = (props: Props) => {
  const { userObj } = useUser();
  return (
    <>
      {props.isOther ? (
        <div className="relative">
          <div
            dangerouslySetInnerHTML={{
              __html: props.otherObj?.profile_cover,
            }}
            className="z-[-1] h-[300px] overflow-hidden flex justify-center items-center"></div>
        </div>
      ) : userObj.profile_cover ? (
        <div className="relative">
          <div
            dangerouslySetInnerHTML={{
              __html: props.cover || userObj.profile_cover,
            }}
            className="z-[-1] h-[300px] overflow-hidden flex justify-center items-center"></div>
          {props.isEdit && (
            <button className="text-[16px] text-primary absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div>
                <CoverPicBtn callback={(str: string) => props.cb(str)} />
                {userObj.profile_cover ? "Edit photo cover" : "Add photo cover"}
              </div>
            </button>
          )}
        </div>
      ) : (
        <div className="w-full h-[300px] bg-bgCover cover center relative">
          {props.isEdit && (
            <button className="text-[16px] text-primary absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%]">
              <div>
                <CoverPicBtn callback={(str: string) => props.cb(str)} />
                {userObj.profile_cover ? "Edit photo cover" : "Add photo cover"}
              </div>
            </button>
          )}
        </div>
      )}
    </>
  );
};

export default CoverBg;
