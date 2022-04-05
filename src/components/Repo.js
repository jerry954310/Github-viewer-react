import React from "react";
import { Container, Button, Card } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
const Repo = ({ msg, userName, setRepoName }) => {
  let navigate = useNavigate();
  const onClickHandler = () => {
    setRepoName(msg.name);
    navigate(`/users/${userName}/repos/${msg.name}`);
  };
  return (
    <div>
      {/* <Container className="repoItem">
        <h2>{msg.name}</h2>
        <p>statgeers={msg.stargazers_count}</p>
        <p>size={msg.size}</p>
        <Button className="viewmore" onClick={onClickHandler}>
          view more
        </Button>
      </Container> */}
      <Card>
        <Card.Header as="h5">{msg.name}</Card.Header>
        <Card.Body>
          {/* <Card.Title>Special title treatment</Card.Title> */}
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
