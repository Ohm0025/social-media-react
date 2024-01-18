const FriendFilter = () => {
  return (
    <div className="bg-white min-w-[300px]">
      <ul className="p-1 pb-0 flex">
        <li className="p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 border-b-4 border-[red]">
          <i className="fa-solid fa-user-check text-[18px]"></i>
          <span>All Friend</span>
        </li>
        <li className="p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 border-b-4">
          <i className="fa-solid fa-user-plus text-[18px]"></i>
          <span>Friend Request</span>
        </li>
        <li className="p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 border-b-4">
          <i className="fa-solid fa-user-gear text-[18px]"></i>
          <span>Pending Accept</span>
        </li>
      </ul>
    </div>
  );
};

export default FriendFilter;
