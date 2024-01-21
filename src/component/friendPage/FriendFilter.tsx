type Props = {
  changePage: (page: number) => void;
  page: number;
};

const FriendFilter = ({ changePage, page }: Props) => {
  return (
    <div className="bg-white min-w-[300px]">
      <ul className="sm:p-1 sm:py-0 flex justify-between sm:justify-center sm:gap-8">
        <li
          onClick={() => changePage(1)}
          className={`p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 ${
            page === 1 ? "border-b-4 border-[#ffbc12]" : ""
          }`}>
          <span className="hidden sm:inline">
            <i className="fa-solid fa-user-check text-[14px] sm:text-[18px]"></i>
          </span>
          <span className="text-[10px] sm:text-[18px]">All Friend</span>
        </li>
        <li
          onClick={() => changePage(2)}
          className={`p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 ${
            page === 2 ? "border-b-4 border-[#ffbc12]" : ""
          }`}>
          <span className="hidden sm:inline">
            <i className="fa-solid fa-user-plus text-[14px] sm:text-[18px]"></i>
          </span>
          <span className="text-[10px] sm:text-[18px]">Friend Request</span>
        </li>
        <li
          onClick={() => changePage(3)}
          className={`p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 ${
            page === 3 ? "border-b-4 border-[#ffbc12]" : ""
          }`}>
          <span className="hidden sm:inline">
            <i className="fa-solid fa-user-pen text-[14px] sm:text-[18px]"></i>
          </span>
          <span className="text-[10px] sm:text-[18px]">Pending Accept</span>
        </li>
        <li
          onClick={() => changePage(4)}
          className={`p-2 hover:bg-[#f7f7f7] hover:cursor-pointer flex items-center gap-3 ${
            page === 4 ? "border-b-4 border-[#ffbc12]" : ""
          }`}>
          <span className="hidden sm:inline">
            <i className="fa-solid fa-user-gear text-[14px] sm:text-[18px]"></i>
          </span>
          <span className="text-[10px] sm:text-[18px]">Find More Friend</span>
        </li>
      </ul>
    </div>
  );
};

export default FriendFilter;
