import Repo from "./Repo";

const RepoList = ({ repoData, userName, setRepoName }) => {
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
      <div className="test">
        
      </div>
    </div>
  );
};

export default RepoList;
