import { AxiosError } from "axios";
import { fetchFriendSuggest } from "../../../api/friend";
import { useEffect, useState } from "react";

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

  useEffect(() => {
    console.log("fetch suggest");
    callData();
  }, []);
  return {
    suggestArr,
  };
};

export default useFriendSuggest;
