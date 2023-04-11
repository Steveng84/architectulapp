import React, { useState } from "react";

import { getUser } from "../../services/user";

const ViewModel = () => {
  const [counter, setCounter] = useState(0);

  const [error, setError] = useState(); // redux
  const [user, setUser] = useState(); // redux
  const [loading, setLoading] = useState(); // redux

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

  async function User() {
    const { user, error, loading } = await getUser();
    setError(error);
    setUser(user);
    setLoading(loading);
  }

  return {
    counter,
    IncreaseCounter,
    DecreaseCounter,
    CounterHandler,
  };
};

export default ViewModel;
