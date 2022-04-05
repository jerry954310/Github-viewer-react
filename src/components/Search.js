import React, { useState } from "react";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import RepoList from "./RepoList";
import Errorpage from "./ErrorPage";
const Search = ({ setUser, setUserName, setRepoData, userName, repoData }) => {
  let navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const getUserRepos = async () => {
    let data = await fetch(`https://api.github.com/users/${userName}/repos`);
    let parsedData = await data.json();
    setRepoData(parsedData);
    setUser(userName);
    navigate(`/users/${userName}/repos`);
  };

  return (
    <Container className="searchBar">
      <InputGroup className="mb-3 searchBar">
        <FormControl
          placeholder="username"
          aria-label="username"
          aria-describedby="basic-addon2"
          onChange={onChangeHandler}
        />
        <Button
          variant="outline-secondary"
          id="button-addon2"
          onClick={getUserRepos}
        >
          Search repos
        </Button>
      </InputGroup>
    </Container>
  );
};

export default Search;
