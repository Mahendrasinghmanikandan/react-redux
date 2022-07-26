import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../features/themeRedux";

const Themes = () => {
  const themeStatus = useSelector((result) => result.theme.values.darkMode);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(change({ darkMode: !themeStatus }));
  };

  return (
    <div>
      {themeStatus ? (
        <button onClick={handleClick}>☀️</button>
      ) : (
        <button onClick={handleClick}>🌙</button>
      )}
    </div>
  );
};

export default Themes;
