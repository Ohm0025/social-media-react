import FriendCard from "./FriendCard";

const FriendList = ({ friendList }: any) => {
  return (
    <div className="flex flex-col items-center min-w-[300px] mt-6">
      {friendList.length > 0 ? (
        <div className="flex p-5 flex-wrap gap-3 justify-center">
          {friendList.map((item: any, index: number) => {
            return (
              <FriendCard
                item={item}
                btn1={"Chat"}
                btn2={"Remove"}
                key={`list-friend-${index}`}
              />
            );
          })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[500px]">
          <h1 className="text-[20px] font-semibold text-textTwo">
            you have no friend
          </h1>
        </div>
      )}
    </div>
  );
};

export default FriendList;
