type Props = {
  changePage: (page: number) => void;
  page: number;
};

const FriendFilter = ({ changePage, page }: Props) => {
  return (
    <div className="bg-white min-w-[300px]">
      <ul className="p-1 pb-0 flex">
        <li
          onClick={() => changePage(1)}
          className={`p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 ${
            page === 1 ? "border-b-4 border-[red]" : ""
          }`}>
          <i className="fa-solid fa-user-check text-[18px]"></i>
          <span>All Friend</span>
        </li>
        <li
          onClick={() => changePage(2)}
          className={`p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 ${
            page === 2 ? "border-b-4 border-[red]" : ""
          }`}>
          <i className="fa-solid fa-user-plus text-[18px]"></i>
          <span>Friend Request</span>
        </li>
        <li
          onClick={() => changePage(3)}
          className={`p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 ${
            page === 3 ? "border-b-4 border-[red]" : ""
          }`}>
          <i className="fa-solid fa-user-gear text-[18px]"></i>
          <span>Pending Accept</span>
        </li>
        <li
          onClick={() => changePage(4)}
          className={`p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 ${
            page === 4 ? "border-b-4 border-[red]" : ""
          }`}>
          <i className="fa-solid fa-user-gear text-[18px]"></i>
          <span>Find More Friend</span>
        </li>
      </ul>
    </div>
  );
};

export default FriendFilter;
