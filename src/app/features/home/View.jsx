import React from "react";
import { css } from "@emotion/react";
import useViewModel from "./ViewModel";

const Home = () => {
  const { navigateToProfile } = useViewModel();

  return (
    <body className={myClassName()}>
      <div className="button-container">
        <button className="button" onClick={() => navigateToProfile()}>
          Profile
        </button>
      </div>
    </body>
  );
};

const myClassName = () => css`
  background-color: blue;
  height: 100vh;
  width: 100vw;
  margin: 0;
  padding: 0;

  .button-container {
  }

  .button {
    color: green;
    background-color: black;
  }
`;

export default Home;
