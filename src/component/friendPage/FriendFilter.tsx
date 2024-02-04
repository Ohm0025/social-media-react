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
        <li>
          <FilterItem text="All" selected={false} />
        </li>
        <li>
          <FilterItem text="Pending" selected={true} />
        </li>
        <li>
          <FilterItem text="Request" selected={false} />
        </li>
      </ul>
    </div>
  );
};

export default FriendFilter;
