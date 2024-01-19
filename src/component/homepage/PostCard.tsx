import ProfileIcon from "../etc/ProfileIcon";

const PostCard = ({ postItem }: any) => {
  console.log(postItem.post_date);
  return (
    <div className="bg-white w-full rounded-md shadow-md py-4 mb-5">
      {/* top */}
      <div className="flex justify-between px-4">
        {/* top-start */}
        <div className="flex items-center gap-3">
          <ProfileIcon radius="40px" textSize="20px" bgColor="gray" />
          <div className="flex flex-col">
            <div>
              <b>{`${postItem.firstname + " " + postItem.lastname}`}</b>
            </div>
            <div>
              <span>10 hr </span>
              <i className="fa-solid fa-earth-americas"></i>
            </div>
          </div>
        </div>
        {/* top-end */}
        <div className="flex items-center gap-5">
          <button className="text-[24px]">
            <i className="fa-solid fa-ellipsis"></i>
          </button>
          <button className="text-[24px]">
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
      </div>

      {/* middle - content */}
      <div className="flex flex-col w-full">
        {postItem.post_content && (
          <div className="py-2 px-4">{`${postItem.post_content}`}</div>
        )}
        {postItem.post_picture && (
          <div className="flex justify-center items-center">
            <img
              className="w-full"
              src={`${postItem.post_picture}`}
              alt="sample-picture"
            />
          </div>
        )}
        <div className="px-3">
          <div className="flex justify-between my-2">
            <div className="flex items-center gap-2">
              <div className="bg-[#ffbc12] rounded-full p-[5px] flex justify-center items-center">
                <i className="fa-solid fa-thumbs-up text-[white] text-[18px]"></i>
              </div>
              <small className="text-[gray]">3.3 K</small>
            </div>
            <div className="">
              <small className="text-[gray]">100 comments</small>
            </div>
          </div>
          <hr />
          <div className="mt-3 flex items-center justify-between">
            <button className="flex flex-1 gap-2 items-baseline justify-center hover:bg-[#f7f7f7] hover:outline outline-8 outline-[#f7f7f7] rounded-md px-2 py-1">
              <i className="fa-regular fa-thumbs-up text-[24px]"></i>
              <span>LIKE</span>
            </button>
            <button className="flex flex-1 gap-2 items-baseline justify-center hover:bg-[#f7f7f7] hover:outline outline-8 outline-[#f7f7f7] rounded-md px-2 py-1">
              <i className="fa-regular fa-comment text-[24px]"></i>
              <span>COMMENT</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
