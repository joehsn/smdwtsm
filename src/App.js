import { useEffect, useState } from "react";
import { down, facebook, instagram, twitter, up, youtube } from "./images";

const blocks = [
  {
    icon: facebook,
    username: "@nathanf",
    status: up,
    number: 1987,
    title: "Followers",
    time: "12 Today",
  },
  {
    icon: twitter,
    username: "@nathanf",
    status: up,
    number: 1044,
    title: "Followers",
    time: "99 Today",
  },
  {
    icon: instagram,
    username: "@realnathanf",
    status: up,
    number: "11k",
    title: "Followers",
    time: "1099 Today",
  },
  {
    icon: youtube,
    username: "Nathan F.",
    status: down,
    number: 8239,
    title: "Subscribers",
    time: "144 Today",
  },
];
const borderColour = (e) => {
  switch (e) {
    case 1:
      return "after:bg-facebook";
    case 2:
      return "after:bg-twitter";
    case 3:
      return "after:bg-gradient-to-r from-fromInsta to-toInsta";
    case 4:
      return "after:bg-youTube";
    default:
      return "after:bg-black";
  }
};

function App() {
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
    <div className="main">
      <div className="content">
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
        <div className="content__container">
          <div className="content__container-blocks">
            {blocks.map((block, index) => (
              <div key={index} className={`card ${borderColour(index + 1)}`}>
                <div className="card__username">
                  <img src={block.icon} alt="platform icon" />
                  {block.username}
                </div>
                <div className="card__number">{block.number}</div>
                <div className="card__title">{block.title}</div>
                <div className="card__time">
                  <img src={block.status} alt="status up or down" />
                  {block.time}
                </div>
              </div>
            ))}
          </div>
          <div>small-blocks</div>
        </div>
      </div>

      {/*

  Overview - Today

  Page Views
  87
  3%

  Likes
  52
  2%

  Likes
  5462
  2257%

  Profile Views
  52k
  1375%

  Retweets
  117
  303%

  Likes
  507
  553%

  Likes
  107
  19%

  Total Views
  1407
  12%
  
  <div className="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
    </div>
  );
}

export default App;
