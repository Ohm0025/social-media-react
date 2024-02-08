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
  isFriend?: boolean;
  isOther: boolean;
};

const FilterProfile = ({
  selected,
  setFilterPage,
  isFriend,
  isOther,
}: Props) => {
  return (
    <div
      className={`grid ${
        isFriend || !isOther ? "grid-cols-3" : "grid-cols-2"
      } text-[16px]`}>
      <FilterProfileItem
        itemName={"Post"}
        selected={selected === "post"}
        cb={() => setFilterPage("post")}
      />
      {(isFriend || !isOther) && (
        <FilterProfileItem
          itemName={"Picture"}
          selected={selected === "picture"}
          cb={() => setFilterPage("picture")}
        />
      )}
      <FilterProfileItem
        itemName={"Bio"}
        selected={selected === "bio"}
        cb={() => setFilterPage("bio")}
      />
    </div>
  );
};

export default FilterProfile;
