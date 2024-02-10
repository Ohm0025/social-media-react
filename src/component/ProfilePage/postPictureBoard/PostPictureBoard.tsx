import usePostPicture from "./PostPictureBoard.hook";

type Props = {
  targetId: number;
};

const PostPictureBoard = (props: Props) => {
  const { pictureArr } = usePostPicture(props.targetId);

  return (
    <div className="flex justify-between p-1 flex-wrap gap-1 min-h-[400px] ">
      {pictureArr.length > 0 ? (
        <>
          {pictureArr.map((item: any, index: number) => {
            return (
              <div
                key={`post-picture-item-${index}`}
                className="w-[210px] h-[210px] rounded-[4px] border border-strokeTwo overflow-hidden flex justify-center items-center">
                <div dangerouslySetInnerHTML={{ __html: item }}></div>
              </div>
            );
          })}
        </>
      ) : (
        <div className="flex justify-center items-center w-full">
          no post picture
        </div>
      )}
    </div>
  );
};

export default PostPictureBoard;
