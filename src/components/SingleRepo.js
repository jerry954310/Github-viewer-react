import React, { useEffect, useState } from "react";
import { Button, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
const SingleRepo = ({ userName, repoName }) => {
  const [repoInfo, setRepoInfo] = useState([]);

  const getRepoInfo = async () => {
    let data = await fetch(
      `https://api.github.com/repos/${userName}/${repoName}`
    );
    let parsedData = await data.json();
    setRepoInfo(parsedData);
  };

  useEffect(() => {
    getRepoInfo();
  }, []);

  return (
    <div>
      {/* <Card style={{ width: "18rem" }}>
        <Card.Body>
          <Card.Title>{repoInfo.name}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">{userName}</Card.Subtitle>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Card.Link href={repoInfo.html_url} target="_blank">
            View repo on Github
          </Card.Link>
        </Card.Body>
      </Card> */}
      <Card className="text-center">
        <Card.Header>{repoInfo.name}</Card.Header>
        <Card.Body>
          <Card.Text>
            {repoInfo.stargazers_count} stars
            {repoInfo.description}
          </Card.Text>
          <a href={repoInfo.html_url} target="_blank">
            view repository on Github
          </a>
        </Card.Body>
        <Card.Footer className="text-muted">{userName}</Card.Footer>
      </Card>
    </div>
  );
};

export default SingleRepo;
