import React from "react";
import { Link } from "react-router-dom";

const Notexisting = () => {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        margin: "100px 0",
      }}
    >
      <span style={{ fontSize: "6rem" }}>😮</span>
      <h1 style={{ fontSize: "3rem", color: "#0d1534", marginBottom: "20px" }}>
        Opps!! The page Not Found
      </h1>
      <Link className="about" to="/">
        Go To HomePage
      </Link>
      .
    </div>
  );
};

export default Notexisting;
