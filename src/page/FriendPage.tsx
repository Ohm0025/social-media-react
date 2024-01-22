import { useState } from "react";
import FriendFilter from "../component/friendPage/FriendFilter";
import FriendList from "../component/friendPage/FriendList";
import FriendFinding from "../component/friendPage/FriendFinding";
import FriendRequest from "../component/friendPage/FriendRequest";
import FriendAccept from "../component/friendPage/FriendAccept";

const FriendPage = () => {
  const [page, setPage] = useState(1);
  const selectPage = (page: number) => {
    if (page === 2) {
      return <FriendRequest />;
    } else if (page === 3) {
      return <FriendAccept />;
    } else if (page === 4) {
      return <FriendFinding />;
    }
    return <FriendList />;
  };
  return (
    <div className="flex flex-col min-h-[100vh] min-w-[300px]">
      <FriendFilter changePage={(page) => setPage(page)} page={page} />
      {selectPage(page)}
    </div>
  );
};

export default FriendPage;
