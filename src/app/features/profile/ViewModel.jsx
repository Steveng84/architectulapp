import React, { useState } from "react";

const ViewModel = () => {
  const [counter, setCounter] = useState(0);

  function IncreaseCounter() {
    setCounter((currentCounter) => {
      return currentCounter + 1;
    });
  }

  function DecreaseCounter() {
    setCounter((currentCounter) => {
      return currentCounter - 1;
    });
  }

  function CounterHandler(number) {
    setCounter((currentCounter) => {
      return currentCounter + number;
    });
  }

  return {
    counter,
    IncreaseCounter,
    DecreaseCounter,
    CounterHandler,
  };
};

export default ViewModel;
