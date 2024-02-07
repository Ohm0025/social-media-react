type Props = {
  searchName: string;
  setSearchName: (str: string) => void;
};

const TagSearchFriend = ({ searchName, setSearchName }: Props) => {
  return (
    <div className="flex px-[10px] items-center border border-strokeOne shadow rounded-[4px] bg-white">
      <div>
        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
            stroke="#A8A8A8"
            strokeWidth="2"
            strokeLinecap="round"
          />
        </svg>
      </div>
      <input
        className="outline-none text-[14px] px-2 py-[15px]"
        type="text"
        placeholder="Search"
        value={searchName}
        onChange={(e) => setSearchName(e.target.value)}
      />
    </div>
  );
};

export default TagSearchFriend;