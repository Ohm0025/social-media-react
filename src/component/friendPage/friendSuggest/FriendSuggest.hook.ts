import { AxiosError } from "axios";
import { fetchFriendSuggest } from "../../../api/friend";
import { useEffect, useState } from "react";
import { requestFriend } from "../../../api/friend";
import { toast } from "react-toastify";

const useFriendSuggest = () => {
  const [suggestArr, setSuggestArr] = useState<any>([]);

  const callData = async () => {
    try {
      const res = await fetchFriendSuggest();
      if (res.status === 200) {
        setSuggestArr([...res.data?.data]);
      } else {
        setSuggestArr([]);
      }
    } catch (err: AxiosError | any) {
      console.log(err.message);
    }
  };

  const handleRequestFriend = async (friendId: number) => {
    try {
      const res = await requestFriend(friendId);
      if (res.status === 201) {
        toast.success("Request sent");
        callData();
      }
    } catch (err: AxiosError | any) {
      console.log(err.message);
    }
  };

  useEffect(() => {
    callData();
  }, []);
  return {
    suggestArr,
    handleRequestFriend,
  };
};

export default useFriendSuggest;
