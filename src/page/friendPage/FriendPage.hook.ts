import { useEffect, useState } from "react";
import { useLoading } from "../../store/loading";
import { fetchAllFriend } from "../../api/friend";
import { useFriendList } from "../../store/friendList";

const useFriendPage = () => {
  const [page, setPage] = useState(1);
  const { friendList, fetchFriendList } = useFriendList();
  const { openIsLoading, closeIsLoading } = useLoading();

  const callData = async () => {
    try {
      openIsLoading();
      const res = await fetchAllFriend();
      if (res.data?.data.length > 0) {
        fetchFriendList([...res.data?.data]);
      }
    } catch (err) {
      fetchFriendList([]);
    } finally {
      closeIsLoading();
    }
  };

  useEffect(() => {
    callData();
  }, []);

  return {
    page,
    setPage,
    friendList,
  };
};

export default useFriendPage;
