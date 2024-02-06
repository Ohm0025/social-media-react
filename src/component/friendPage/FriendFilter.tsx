type Props = {
  changePage: (page: number) => void;
  page: number;
};

type FilterItemType = {
  text: string;
  selected: boolean;
};

const FilterItem = ({ text, selected }: FilterItemType) => {
  return (
    <div
      className={`rounded-[60px] px-4 py-1 ${
        selected ? "bg-fillTwo" : "bg-fillOne"
      } text-textThree`}>
      {text}
    </div>
  );
};

const FriendFilter = (props: Props) => {
  return (
    <div className="bg-white">
      <ul className="sm:p-1 sm:py-0 flex justify-between sm:justify-center sm:gap-8">
        <li
          onClick={() => props.changePage(1)}
          className="hover:cursor-pointer">
          <FilterItem text="All" selected={props.page === 1} />
        </li>
        <li
          onClick={() => props.changePage(2)}
          className="hover:cursor-pointer">
          <FilterItem text="Pending" selected={props.page === 2} />
        </li>
        <li
          onClick={() => props.changePage(3)}
          className="hover:cursor-pointer">
          <FilterItem text="Request" selected={props.page === 3} />
        </li>
        <li
          onClick={() => props.changePage(4)}
          className="hover:cursor-pointer">
          <FilterItem text="Suggest" selected={props.page === 4} />
        </li>
      </ul>
    </div>
  );
};

export default FriendFilter;
