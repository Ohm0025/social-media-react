import { useEffect, useState } from "react";
import { fetchSearchFriend, requestFriend } from "../../api/friend";
import FriendCard from "./FriendCard";

type Props = {};

const FriendFinding = ({}: Props) => {
  const [searchName, setSearchName] = useState("");
  const [arrFriend, setArrFriend] = useState<any>([]);

  const callData = async () => {
    try {
      const res = await fetchSearchFriend(searchName);
      if (res.data?.data.length > 0) {
        setArrFriend(res.data?.data);
        console.log(res.data.data);
      }
    } catch (err) {
      console.log(err);
      //toast err
      setArrFriend([]);
    }
  };

  const clickRequest = async (accepterId: number) => {
    try {
      const res = await requestFriend(accepterId);
      if (res.status === 201) {
        console.log("add friend success");
        setArrFriend((prev: any) => {
          return [...prev.filter((item: any) => item.userid !== accepterId)];
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
    <div className="mt-[16px] mb-[24px] mx-auto min-w-[300px]">
      <div className="flex px-[10px] items-center border border-strokeOne shadow rounded-[4px] bg-white">
        <div>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M20 20L15.514 15.506L20 20ZM18 9.5C18 11.7543 17.1045 13.9163 15.5104 15.5104C13.9163 17.1045 11.7543 18 9.5 18C7.24566 18 5.08365 17.1045 3.48959 15.5104C1.89553 13.9163 1 11.7543 1 9.5C1 7.24566 1.89553 5.08365 3.48959 3.48959C5.08365 1.89553 7.24566 1 9.5 1C11.7543 1 13.9163 1.89553 15.5104 3.48959C17.1045 5.08365 18 7.24566 18 9.5V9.5Z"
              stroke="#A8A8A8"
              stroke-width="2"
              stroke-linecap="round"
            />
          </svg>
        </div>
        <input
          className="outline-none text-[14px] px-2 py-[15px]"
          type="text"
          placeholder="Search"
          value={searchName}
          onChange={(e) => setSearchName(e.target.value)}
        />
      </div>
      {arrFriend.length > 0 ? (
        <div className="flex gap-4 mt-6">
          {arrFriend.map((item: any, index: number) => {
            return (
              <FriendCard
                item={item}
                btn1={"Add"}
                btn2={""}
                key={`friend-item-` + index}
                cb={() => clickRequest(item.userid)}
              />
            );
          })}
        </div>
      ) : (
        <div className="pt-7">
          <h1 className="text-[20px] text-textOne font-medium px-5">
            Finding result
          </h1>
          <div className="text-[18px] text-center text-textTwo flex flex-col items-center justify-center min-h-[500px]">
            no friend found
          </div>
        </div>
      )}
    </div>
  );
};

export default FriendFinding;
