import React, { useEffect, useState } from "react";
import { Card } from "react-bootstrap";
const SingleRepo = ({ userName, repoName }) => {
  const [repoInfo, setRepoInfo] = useState([]);

  const getRepoInfo = async () => {
    let data = await fetch(
      `https://api.github.com/repos/${userName}/${repoName}`
    );
    let parsedData = await data.json();
    setRepoInfo(parsedData);
  };

  //載入頁面時呼叫 getRepoInfo() 來取得第一次 fetch 的資料
  useEffect(() => {
    getRepoInfo();
  }, []);

  return (
    <div>
      <Card className="text-center">
        <Card.Header>{repoInfo.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            {repoInfo.stargazers_count} stars
            <br />
            {repoInfo.description}
          </Card.Text>
          <a href={repoInfo.html_url} target="_blank" rel="noreferrer">
            view repository on Github
          </a>
        </Card.Body>
        <Card.Footer className="text-muted">{userName}</Card.Footer>
      </Card>
    </div>
  );
};

export default SingleRepo;
