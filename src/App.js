import React, { Fragment, useState } from "react";
import Search from "./components/Search";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./styles/style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./components/Header";
import RepoList from "./components/RepoList";
import SingleRepo from "./components/SingleRepo";

const App = () => {
  const [user, setUser] = useState(null);
  const [userName, setUserName] = useState("");
  const [repoData, setRepoData] = useState([]);
  const [repoName, setRepoName] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [moreRepo, setMoreRepo] = useState(true);

  return (
    //在 App component 實作 Route
    <Router>
      <Fragment>
        <Header user={user} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <Search
                setUser={setUser}
                setUserName={setUserName}
                setRepoData={setRepoData}
                userName={userName}
                repoData={repoData}
                currentPage={currentPage}
                setMoreRepo={setMoreRepo}
              />
            }
          ></Route>
          <Route
            path={`/users/${userName}/repos`}
            element={
              <RepoList
                repoData={repoData}
                userName={userName}
                setRepoName={setRepoName}
                setRepoData={setRepoData}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
                moreRepo={moreRepo}
                setMoreRepo={setMoreRepo}
              />
            }
          ></Route>
          <Route
            path={`/users/${userName}/repos/*`}
            element={<SingleRepo userName={userName} repoName={repoName} />}
          ></Route>
        </Routes>
      </Fragment>
    </Router>
  );
};

export default App;
