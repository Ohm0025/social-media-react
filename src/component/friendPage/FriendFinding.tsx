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
          onClick={() => callData()}>
          search
        </button>
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
        <div className="flex flex-col items-center justify-center min-h-[500px]">
          <h1 className="text-[40px]">no friend found</h1>
          <h4 className="text-[36px]">{searchName}</h4>
        </div>
      )}
    </div>
  );
};

export default FriendFinding;
