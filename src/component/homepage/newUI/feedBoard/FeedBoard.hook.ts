import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { getMyPost, getStandardPost } from "../../../../api/post";
import { useLoading } from "../../../../store/loading";
import { toast } from "react-toastify";
import { useMyPost } from "../../../../store/myPost";

const useFeedBoard = (isMine: boolean) => {
  const { myPostArr, setMyPostArr } = useMyPost();
  const { openIsLoading, closeIsLoading } = useLoading();
  const [filterPost, setFilterPost] = useState("All");
  const [finalPost, setFinalPost] = useState([...myPostArr]);

  const callPostData = async () => {
    try {
      openIsLoading();
      if (isMine) {
        const res = await getMyPost();
        if (res.status === 200) {
          res.data && setMyPostArr([...res.data?.data]);
        } else {
          setMyPostArr([]);
        }
      } else {
        const res = await getStandardPost();

        console.log(res.data);
        if (res.status === 200) {
          res.data?.data && setMyPostArr([...res.data?.data.rows]);
        } else {
          setMyPostArr([]);
        }
      }
    } catch (err: AxiosError | any) {
      console.log(err);
      if (err.response.status === 400) {
        toast.error("no any post found");
      } else {
        toast.error(err.message);
      }
    } finally {
      closeIsLoading();
    }
  };

  useEffect(() => {
    callPostData();
  }, []);

  useEffect(() => {
    setFinalPost([
      ...myPostArr.filter((item) => {
        if (filterPost === "Friends") {
          return item.post_type === "only_friend";
        }
        if (filterPost === "Private") {
          return item.post_type === "private";
        }
        return true;
      }),
    ]);
  }, [filterPost]);

  return {
    postDataArr: [...finalPost],
    setMyPostArr,
    callPostData,
    filterPost,
    setFilterPost,
  };
};

export default useFeedBoard;
