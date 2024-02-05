type Props = {};

const FilterProfile = ({}: Props) => {
  return (
    <div className="grid grid-cols-3 text-[16px]">
      <div className="select-profile py-[20px] text-center hover:font-medium hover:cursor-pointer">
        Post
      </div>
      <div className="select-profile py-[20px] text-center hover:font-medium hover:cursor-pointer">
        Picture
      </div>
      <div className="select-profile py-[20px] text-center hover:font-medium hover:cursor-pointer">
        Bio
      </div>
    </div>
  );
};

export default FilterProfile;
