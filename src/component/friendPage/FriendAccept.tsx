import React, { useEffect, useState } from "react";
import { acceptRequest, fetchFriendAccept } from "../../api/friend";
import FriendCard from "./FriendCard";

type Props = {};

const FriendAccept = (props: Props) => {
  const [arrFriend, setArrFriend] = useState<any>([]);
  const [searchName, setSearchName] = useState("");

  const callData = async () => {
    try {
      const res = await fetchFriendAccept();
      if (res.data?.data.length > 0) {
        setArrFriend([...res.data.data]);
      }
    } catch (err) {
      console.log(err);
      setArrFriend([]);
    }
  };

  const clickAccept = async (friendid: number) => {
    try {
      const res = await acceptRequest(friendid);
      if (res.status === 200) {
        setArrFriend((prev: any) => {
          return [...prev.filter((item: any) => item.friendid !== friendid)];
        });
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    callData();
  }, []);
  return (
    <div className="flex flex-col items-center min-w-[300px] mt-6">
      {arrFriend.length > 0 ? (
        <div className="flex gap-4 mt-6">
          {arrFriend
            .filter((item: any) => {
              console.log(item);
              return (
                item.firstname.includes(searchName) ||
                item.lastname.includes(searchName)
              );
            })
            .map((item: any, index: number) => {
              return (
                <FriendCard
                  item={item}
                  btn1={"Accept"}
                  btn2={"Deny"}
                  key={`friend-item-` + index}
                  cb={() => clickAccept(item.friendid)}
                />
              );
            })}
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center min-h-[500px]">
          <h1 className="text-[20px] font-semibold text-textTwo">
            you have no request from other users
          </h1>
        </div>
      )}
    </div>
  );
};

export default FriendAccept;
