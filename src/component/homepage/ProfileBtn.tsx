const ProfileBtn = () => {
  return (
    <div className="flex gap-1">
      <button className="rounded-full w-[50px] h-[50px] text-[26px] bg-[#f7f7f7] text-center">
        <i className="fa-brands fa-rocketchat"></i>
      </button>
      <button className="rounded-full w-[50px] h-[50px] text-[26px] bg-[#f7f7f7] text-center">
        <i className="fa-solid fa-bell"></i>
      </button>
      <button className="rounded-full w-[50px] h-[50px] overflow-hidden text-[26px] bg-[#f7f7f7] text-center">
        {false ? <img src="" alt="" /> : <i className="fa-solid fa-user"></i>}
      </button>
    </div>
  );
};

export default ProfileBtn;
