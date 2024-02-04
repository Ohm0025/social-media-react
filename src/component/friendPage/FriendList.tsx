import { useState } from "react";
import FriendCard from "./FriendCard";

const FriendList = ({ friendList }: any) => {
  const [searchName, setSearchName] = useState("");
  const [arrFriend, setArrFriend] = useState<any>([...friendList]);

  return (
    <div className="flex flex-col items-center min-w-[300px] mt-6">
      {["gkpeokgpoe", "epogjpeojg"].length > 0 ? (
        <div className="flex p-5 flex-wrap gap-3 justify-center">
          {["gkpeokgpoe", "epogjpeojg"].map((item: any, index: number) => {
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
