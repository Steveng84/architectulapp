import React from "react";
import { css } from "@emotion/css";
import useViewModel from "./ViewModel";
import IncreaseButton from "./components/IncreaseButton";

const Profile = () => {
  const { IncreaseCounter, counter, DecreaseCounter } = useViewModel();

  return (
    <div className={myClassName()}>
      <div className="buttonContainer">
        <IncreaseButton onClick={() => IncreaseCounter()}>
          increaseCounter
        </IncreaseButton>
        <p>{counter}</p>
        <button onClick={() => DecreaseCounter()}>decreaseCounter</button>
      </div>
    </div>
  );
};

const myClassName = () => css`
  position: fixed;
  top: 50%;
  left: 50%;
  display: flex;
  flex-direction: column;
  justify-items: center;

  .buttonContainer {
    display: flex;
    flex-direction: row;
    gap: 1rem;
  }
`;

export default Profile;
