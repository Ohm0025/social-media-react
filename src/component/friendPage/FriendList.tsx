import { useState } from "react";
import FriendCard from "./FriendCard";

const FriendList = ({ friendList }: any) => {
  const [searchName, setSearchName] = useState("");
  const [arrFriend, setArrFriend] = useState<any>([...friendList]);

  return (
    <div className="flex flex-col items-center min-w-[300px] mt-6">
      <div className="flex min-w-[300px] w-[50%] justify-between items-center border border-[#ffbc12] shadow rounded-md overflow-hidden bg-white">
        <input
          className="outline-none text-[20px] px-2 py-1 flex-1"
          type="text"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
        <button
          className="bg-[#ffcb08] text-[20px] py-2 px-5"
          onClick={() =>
            setArrFriend((prev: any) => {
              return prev.filter(
                (item: any) =>
                  item.firstname.includes(searchName) ||
                  item.lastname.includes(searchName)
              );
            })
          }>
          search
        </button>
      </div>
      {arrFriend.length > 0 ? (
        <div className="flex p-5 flex-wrap gap-3 justify-center">
          {arrFriend.map((item: any, index: number) => {
            console.log(item);
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
          <h1 className="text-[40px]">no result</h1>
        </div>
      )}
    </div>
  );
};

export default FriendList;
