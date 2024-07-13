import React from "react";
import { useHistory } from "react-router-dom";

const Button = ({ path, label }) => {
  const history = useHistory();

  const handleClick = () => {
    history.push(path);
  };
  return <button OnClick={handleClick}>{label}</button>;
};

export default Button;
