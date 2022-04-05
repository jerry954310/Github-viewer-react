import React from "react";
import { InputGroup, FormControl, Button, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Search = ({
  setUser,
  setUserName,
  setRepoData,
  userName,
  currentPage,
  setMoreRepo,
}) => {
  let navigate = useNavigate();

  const onChangeHandler = (e) => {
    setUserName(e.target.value);
  };

  const getUserRepos = async () => {
    let data = await fetch(
      `https://api.github.com/users/${userName}/repos?per_page=10&&page=${currentPage}`
    );
    let parsedData = await data.json();

    //若第一次取得的資料長度小於10，代表之後沒有更多的資料需要載入，設moreRepo為false
    //並且顯示提示字元" You have seen it all"
    if (parsedData.length < 10) {
      setMoreRepo(false);
    }

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
