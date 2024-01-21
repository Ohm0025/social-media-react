import { useState } from "react";
import FriendFilter from "../component/friendPage/FriendFilter";
import FriendList from "../component/friendPage/FriendList";
import FriendFinding from "../component/friendPage/FriendFinding";

const FriendPage = () => {
  const [page, setPage] = useState(1);
  const selectPage = (page: number) => {
    if (page === 2) {
      return <h1>page2</h1>;
    } else if (page === 3) {
      return <h1>page 3</h1>;
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
