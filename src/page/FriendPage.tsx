import { useState } from "react";
import FriendFilter from "../component/friendPage/FriendFilter";
import FriendList from "../component/friendPage/FriendList";

const FriendPage = () => {
  const [page, setPage] = useState(1);
  const selectPage = (page: number) => {
    if (page === 2) {
      return <h1>page2</h1>;
    } else if (page === 3) {
      return <h1>page 3</h1>;
    } else if (page === 4) {
      return <h1>page 4</h1>;
    }
    return <FriendList />;
  };
  return (
    <div className="flex flex-col min-h-[100vh]">
      <FriendFilter changePage={(page) => setPage(page)} page={page} />
      {selectPage(page)}
    </div>
  );
};

export default FriendPage;
