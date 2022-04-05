import Repo from "./Repo";
import InfiniteScroll from "react-infinite-scroll-component";
const RepoList = ({
  repoData,
  userName,
  setRepoName,
  setRepoData,
  setCurrentPage,
  currentPage,
  setMoreRepo,
  moreRepo,
}) => {
  const fetchMoreData = async (page) => {
    //網頁拉到底時，若還有資料，則呼叫fetchMoreData取得再10個repositories
    let data = await fetch(
      `https://api.github.com/users/${userName}/repos?per_page=10&&page=${
        currentPage + 1
      }`
    );
    let parsedData = await data.json();

    //若資料長度小於10，代表已經沒有更多的資料，則要把moreRepo的狀態設為false
    //當網頁拉至最底時，顯示提示字元" You have seen it all"
    //下一次當網頁拉到底時，就不會再繼續呼叫fetchMoreData()

    if (parsedData < 10) {
      setMoreRepo(false);
    }

    //將新取得的資料放至原狀態(陣列)尾端
    for (let i = 0; i < parsedData.length; i++) {
      setRepoData((repoData) => [...repoData, parsedData[i]]);
    }

    //每呼叫一次 fetchMoreData() ，就要將 currentPage+1，以利下一次正確的 api call
    let currentvalue = currentPage + 1;
    setCurrentPage(currentvalue);
  };

  return (
    <div className="repolist">
      <div className="repo">
        {repoData &&
          repoData.map((msg) => {
            return (
              <Repo msg={msg} userName={userName} setRepoName={setRepoName} />
            );
          })}
      </div>
      <div className="test"></div>
      <InfiniteScroll
        dataLength={repoData.length}
        next={fetchMoreData}
        hasMore={moreRepo}
        loader={<h4>Loading...</h4>}
        endMessage={
          <p style={{ textAlign: "center" }}>
            <b>You have seen it all</b>
          </p>
        }
      ></InfiniteScroll>
    </div>
  );
};

export default RepoList;
