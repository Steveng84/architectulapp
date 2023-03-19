import { css } from "@emotion/css";

const IncreaseButton = (props) => {
  return (
    <div>
      <button
        //css={myClassName()}
        className={myClassName()}
        //style={myClassName()}
        onClick={props.onClick}
      >
        increaseCounter
      </button>
    </div>
  );
};

const myClassName = () => css`
  background-color: green;
  color: black;
  border-radius: 10px;
`;

export default IncreaseButton;
