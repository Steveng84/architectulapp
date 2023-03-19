import React from "react";
import { useNavigate } from "react-router-dom";

const ViewModel = () => {
  let navigate = useNavigate();

  function navigateToProfile() {
    navigate("/profile");
  }

  return {
    navigateToProfile,
  };
};

export default ViewModel;
