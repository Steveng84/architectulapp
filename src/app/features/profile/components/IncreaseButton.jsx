import { css } from "@emotion/react";

const IncreaseButton = (props) => {
  return (
    <div>
      <button
        css={myClassName}
        //className="button"
        //style={{ backgroundColor: "green" }}
        onClick={props.onClick}
      >
        increaseCounter
      </button>
    </div>
  );
};

const myClassName = css`
  background-color: green;
  color: black;
  padding: 1rem;
`;

export default IncreaseButton;
