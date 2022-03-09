import React from "react";

export const Header = ({ handleChangeMode }) => {
  return (
    <div className="Header">
      <h1>Sticky notes</h1>
      <button
        className="darkmodebutton"
        onClick={() =>
          handleChangeMode((previousDarkMode) => !previousDarkMode)
        }
      >
        Dark mode
      </button>
    </div>
  );
};
