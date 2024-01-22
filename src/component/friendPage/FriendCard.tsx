import { API_URL } from "../../utils/constant";

const FriendCard = ({ item, btn1, btn2, cb }: any) => {
  return (
    <div className="bg-white rounded-md flex flex-col w-[240px] shadow-md">
      <div className="flex h-[200px]">
        <img
          src={`${
            item.profile_picture
              ? API_URL + "/" + item.profile_picture.split("public/")[1]
              : "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Windows_10_Default_Profile_Picture.svg/2048px-Windows_10_Default_Profile_Picture.svg.png"
          }`}
          alt="profile-img"
        />
      </div>
      <div className="p-2 text-center">
        {item.firstname + " " + item.lastname}
      </div>
      <div className="flex flex-col items-center mb-2 gap-2">
        <button className="p-2 bg-[orange] w-[80%] rounded-md" onClick={cb}>
          {btn1}
        </button>
        {btn2 && (
          <button className="p-2 bg-[#cacaca] w-[80%] rounded-md">
            {btn2}
          </button>
        )}
      </div>
    </div>
  );
};

export default FriendCard;
