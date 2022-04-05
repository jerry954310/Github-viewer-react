import React from "react";
import { Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Repo = ({ msg, userName, setRepoName }) => {
  let navigate = useNavigate();
  const onClickHandler = () => {
    setRepoName(msg.name);
    navigate(`/users/${userName}/repos/${msg.name}`);
  };
  return (
    //在RepoList上呈現的單位，顯示name以及stargazers_count
    <div>
      <Card>
        <Card.Header as="h5">{msg.name}</Card.Header>
        <Card.Body>
          <Card.Text>{msg.stargazers_count} stars</Card.Text>
          <Button variant="primary" onClick={onClickHandler}>
            view more
          </Button>
        </Card.Body>
      </Card>
    </div>
  );
};

export default Repo;
