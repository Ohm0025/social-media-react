type Item = {
  selected: boolean;
  itemName: string;
  cb: () => void;
};

const FilterProfileItem = ({ selected, itemName, cb }: Item) => {
  return (
    <div
      onClick={cb}
      className={`select-profile py-[20px] text-center hover:font-medium hover:cursor-pointer ${
        selected ? "selected-topic" : ""
      }`}>
      {itemName}
    </div>
  );
};
type Props = {
  selected: string;
  setFilterPage: (str: string) => void;
};

const FilterProfile = ({ selected, setFilterPage }: Props) => {
  return (
    <div className="grid grid-cols-3 text-[16px]">
      <FilterProfileItem
        itemName={"Post"}
        selected={selected === "post"}
        cb={() => setFilterPage("post")}
      />
      <FilterProfileItem
        itemName={"Picture"}
        selected={selected === "picture"}
        cb={() => setFilterPage("picture")}
      />
      <FilterProfileItem
        itemName={"Bio"}
        selected={selected === "bio"}
        cb={() => setFilterPage("bio")}
      />
    </div>
  );
};

export default FilterProfile;
