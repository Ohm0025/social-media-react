const FriendCard = () => {
  return (
    <div className="bg-white rounded-md flex flex-col w-[200px] shadow-md">
      <div className="flex h-[200px]">
        <img
          src="https://www.himalmag.com/wp-content/uploads/2019/07/sample-profile-picture.png"
          alt="profile-img"
        />
      </div>
      <div className="flex flex-col items-center my-2 gap-2">
        <button className="p-2 bg-[orange] w-[80%] rounded-md">Chat</button>
        <button className="p-2 bg-[#cacaca] w-[80%] rounded-md">Remove</button>
      </div>
    </div>
  );
};

export default FriendCard;
