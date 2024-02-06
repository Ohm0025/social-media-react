import { useEffect, useState } from "react";
import { fetchSearchFriend } from "../../../api/friend";

const useFriendFinding = () => {
  const [searchName, setSearchName] = useState("");
  const [arrFriend, setArrFriend] = useState<any>([]);

  const callData = async () => {
    try {
      const res = await fetchSearchFriend(searchName);
      if (res.data?.data.length > 0) {
        setArrFriend(res.data?.data);
      }
    } catch (err) {
      console.log(err);
      //toast err
      setArrFriend([]);
    }
  };

  //   const clickRequest = async (accepterId: number) => {
  //     try {
  //       const res = await requestFriend(accepterId);
  //       if (res.status === 201) {
  //         console.log("add friend success");
  //         setArrFriend((prev: any) => {
  //           return [...prev.filter((item: any) => item.userid !== accepterId)];
  //         });
  //       }
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  useEffect(() => {
    callData();
  }, []);

  return {
    searchName,
    setSearchName,
    arrFriend,
  };
};

export default useFriendFinding;
