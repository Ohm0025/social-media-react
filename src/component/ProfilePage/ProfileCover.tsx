import ProfileIcon from "../etc/ProfileIcon";

const ProfileCover = () => {
  return (
    <div className="min-h-[60vh] bg-white min-w-[300px] shadow-md">
      <div
        className="w-full h-[50vh] mx-auto my-[-25px]"
        style={{
          backgroundImage:
            'linear-gradient(to top, rgba(255,255,255,0) ,rgba(0,0,0,0.8)),url("public/bg-pic01.jpeg")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}></div>
      <div className="flex justify-between items-center px-8">
        <div className="flex items-center gap-3">
          <ProfileIcon radius="100px" textSize="40px" />
          <div className="flex flex-col pt-4">
            <b>Firstname Lastname</b>
            <small>Friend 10</small>
          </div>
        </div>
        <div className="px-3 py-2 rounded-md mt-7 bg-[#ffcb08]">
          <button>Edit Profile</button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCover;
