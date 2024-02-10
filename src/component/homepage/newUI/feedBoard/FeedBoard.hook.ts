import { AxiosError } from "axios";
import { useEffect, useState } from "react";
import {
  getMyPost,
  getOtherUserPost,
  getStandardPost,
} from "../../../../api/post";
import { useLoading } from "../../../../store/loading";
import { toast } from "react-toastify";
import { useMyPost } from "../../../../store/myPost";

const useFeedBoard = (isMine: boolean, isOther?: boolean, otherId?: number) => {
  const { myPostArr, setMyPostArr } = useMyPost();
  const { openIsLoading, closeIsLoading } = useLoading();
  const [filterPost, setFilterPost] = useState("All");
  const [otherPostArr, setOtherPostArr] = useState<any>([]);

  const callPostData = async () => {
    try {
      openIsLoading();
      if (isMine) {
        const res = await getMyPost(5, filterPost);
        if (res.status === 200) {
          res.data?.data && setMyPostArr([...res.data?.data.rows]);
        } else {
          setMyPostArr([]);
        }
      } else {
        const res = await getStandardPost(5, filterPost);
        if (res.status === 200) {
          res.data?.data && setMyPostArr([...res.data?.data.rows]);
          console.log(res.data?.data);
        } else {
          setMyPostArr([]);
        }
      }
    } catch (err: AxiosError | any) {
      console.log(err);
      if (err.response.status === 400) {
        // toast.error("no any post found");
        setMyPostArr([]);
      } else {
        toast.error(err.message);
      }
    } finally {
      closeIsLoading();
    }
  };

  const callOtherPost = async () => {
    try {
      if (otherId) {
        const res = await getOtherUserPost(otherId);
        if (res.status === 200) {
          console.log(res.data);
          setOtherPostArr([...res.data?.data]);
        }
      }
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    if (!isOther) {
      callPostData();
    } else {
      if (filterPost === "Friends") {
        setOtherPostArr((prev: any) => {
          return prev.filter((item: any) => item.post_type === "only_friend");
        });
      } else {
        callOtherPost();
      }
    }
  }, [filterPost]);

  useEffect(() => {
    if (isOther) {
      console.log("fetch other post");
      callOtherPost();
    }
  }, [isOther, otherId]);

  return {
    postDataArr: isOther && otherId ? [...otherPostArr] : [...myPostArr],
    setMyPostArr,
    callPostData,
    filterPost,
    setFilterPost,
  };
};

export default useFeedBoard;
