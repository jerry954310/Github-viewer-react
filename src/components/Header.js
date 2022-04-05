import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Header = ({ user }) => {
  return (
    <div className="header">
      <h1>
        Github repo viewer <br />
      </h1>
      <p>{user}</p>
    </div>
  );
};

export default Header;
