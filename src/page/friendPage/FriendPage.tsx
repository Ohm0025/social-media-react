import FriendFilter from "../../component/friendPage/FriendFilter";
import FriendList from "../../component/friendPage/FriendList";
import FriendRequest from "../../component/friendPage/FriendRequest";
import FriendAccept from "../../component/friendPage/FriendAccept";
import DelayBox from "../../component/delayBox/DelayBox";
import FriendHeader from "../../component/friendPage/FriendHeader";
import useFriendPage from "./FriendPage.hook";
import { FriendSuggest } from "../../component/friendPage/friendSuggest/FriendSuggest";

const FriendPage = () => {
  const { page, setPage, friendList } = useFriendPage();

  const selectPage = (page: number) => {
    if (page === 2) {
      return <FriendRequest />;
    } else if (page === 3) {
      return <FriendAccept />;
    } else if (page === 4) {
      return <FriendSuggest />;
    }
    return <FriendList friendList={friendList} />;
  };

  return (
    <div className="flex flex-col min-h-[100vh] min-w-[300px]">
      <FriendHeader />
      <FriendFilter changePage={(page) => setPage(page)} page={page} />
      <DelayBox>{selectPage(page)}</DelayBox>
    </div>
  );
};

export default FriendPage;
