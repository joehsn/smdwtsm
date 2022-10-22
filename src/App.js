import { useEffect, useState } from "react";

function App() {
  const [theme, setTheme] = useState(localStorage.theme);
  const colourTheme = theme === "dark" ? "light" : "dark";
  useEffect(() => {
    const root = window.document.documentElement;
    root.classList.remove(colourTheme);
    root.classList.add(theme);
    localStorage.setItem("theme", theme);
  }, [theme, colourTheme]);
  return (
    <div className="container">
      <label class="switch">
        <input
          type="checkbox"
          // checked={theme === "dark"}
          onChange={() => {
            setTheme(colourTheme);
          }}
        />
        <span class="slider round"></span>
      </label>
      <button
        className="center rounded-full bg-gray-800 text-white dark:bg-slate-600 w-10 md:w-14 h-10 md:h-14 fixed bottom-2 md:bottom-4 right-2 md:right-4 text-[1rem] md:text-[2rem]"
        onClick={() => {
          setTheme(colourTheme);
        }}
      ></button>
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
  
  <div class="attribution">
    Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>. 
    Coded by <a href="#">Your Name Here</a>.
  </div> */}
    </div>
  );
}

export default App;
