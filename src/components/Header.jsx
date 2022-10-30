import React from "react";
import { useEffect, useState } from "react";

const Header = () => {
  const [theme, setTheme] = useState(localStorage.theme);
  const [dark, setDark] = useState(theme === "light" ? false : true);
  const colourTheme = theme === "light" ? "dark" : "light";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colourTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colourTheme]);
  return (
    <header className="header">
      <div className="header__container">
        <div className="header__title">
          <a className="header__title-logo" href="/">
            Social Media Dashboard
          </a>
          <div className="header__title-total">Total Followers: 23,004</div>
        </div>
        <hr className="md:hidden" />
        <div className="header__theme">
          <span className="header__theme-title">Dark Mode</span>
          <label htmlFor="checked-toggle" className="header__theme-label">
            <input
              type="checkbox"
              id="checked-toggle"
              className="sr-only peer"
              checked={dark}
              onChange={() => {
                setTheme(colourTheme);
                setDark(!dark);
              }}
            />
            <div
              aria-label="Theme Toggler"
              className="header__theme-toggler peer peer-checked:after:left-[23px] peer-checked:after:-translate-x-full peer-checked:bg-gradient-to-r peer-checked:from-fromToggle peer-checked:to-toToggle"
            ></div>
          </label>
        </div>
      </div>
    </header>
  );
};

export default Header;
