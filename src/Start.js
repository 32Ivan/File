import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import "./Start.scss";

function Start() {
  return (
    <div className="start">
      <div className="link">
        <Link
          to="/posts"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button>Post All</Button>
        </Link>
      </div>

      <div className="link">
        <Link
          to="/post/id"
          style={{ color: "inherit", textDecoration: "inherit" }}
        >
          <Button>Post ID</Button>
        </Link>
      </div>
    </div>
  );
}

export default Start;
