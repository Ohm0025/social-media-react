import { useState } from "react";
import FriendFilter from "../component/friendPage/FriendFilter";
import FriendList from "../component/friendPage/FriendList";

const FriendPage = () => {
  const [page, setPage] = useState(1);
  const selectPage = (page: number) => {
    if (page === 2) {
      return <FriendList />;
    } else if (page === 3) {
      return <h1>page 3</h1>;
    } else if (page === 4) {
      return <h1>page 4</h1>;
    }
    return <h1>list page</h1>;
  };
  return (
    <div className="flex flex-col">
      <FriendFilter changePage={(page) => setPage(page)} page={page} />
      {selectPage(page)}
    </div>
  );
};

export default FriendPage;
