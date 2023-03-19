import React from "react";
import { css } from "@emotion/react";
import useViewModel from "./ViewModel";
import IncreaseButton from "./components/IncreaseButton";

const Profile = () => {
  const { IncreaseCounter, counter, DecreaseCounter } = useViewModel();

  return (
    <div className={myClassName()}>
      <p>{counter}</p>
      <IncreaseButton onClick={() => IncreaseCounter()}>
        increaseCounter
      </IncreaseButton>
      <button onClick={() => DecreaseCounter()}>decreaseCounter</button>
    </div>
  );
};

const myClassName = () => css`
  display: flex;
  flex-direction: row;
  gap: 1rem;
  align-content: center;
`;

export default Profile;
