import { useEffect, useState } from "react";

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
    <div className="bg-white dark:bg-zinc-900  w-screen h-screen mx-auto">
      <label
        htmlFor="checked-toggle"
        className="inline-flex relative items-center cursor-pointer"
        aria-label="Theme Toggler"
      >
        <input
          type="checkbox"
          id="checked-toggle"
          className="sr-only peer"
          checked={dark}
          onChange={() => {
            setTheme(colourTheme);
            setDark(theme === "light");
          }}
        />
        <div className="w-11 h-6 bg-gray-200 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
      </label>

      {/* Social Media Dashboard
  Total Followers: 23,004

  Dark Mode

  

  @nathanf
  1987
  Followers
  12 Today

  @nathanf
  1044
  Followers
  99 Today

  @realnathanf
  11k
  Followers
  1099 Today

  Nathan F.
  8239
  Subscribers
  144 Today



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
