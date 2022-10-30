import Blocks from "./components/blocks";
import Header from "./components/Header";
import { down, facebook, instagram, twitter, up, youtube } from "./images";
const smallCardData = [
  {
    title: "Page Views",
    icon: facebook,
    numb: 87,
    tIcon: up,
    percent: 3,
  },
  {
    title: "Likes",
    icon: facebook,
    numb: 52,
    tIcon: down,
    percent: 2,
  },
  {
    title: "Likes",
    icon: instagram,
    numb: "52k",
    tIcon: up,
    percent: 2257,
  },
  {
    title: "Profile Views",
    icon: instagram,
    numb: 5462,
    tIcon: up,
    percent: 1375,
  },
  {
    title: "Retweets",
    icon: twitter,
    numb: 117,
    tIcon: up,
    percent: 303,
  },
  {
    title: "Likes",
    icon: twitter,
    numb: 507,
    tIcon: up,
    percent: 553,
  },
  {
    title: "Likes",
    icon: twitter,
    numb: 107,
    tIcon: down,
    percent: 19,
  },
  {
    title: "Total Views",
    icon: twitter,
    numb: 1407,
    tIcon: down,
    percent: 12,
  },
];

function App() {
  return (
    <div className="main">
      <div className="content">
        <Header />
        <div className="content__container">
          <Blocks />
          <div className="content__container-small-blocks">
            <h3>Overview - Today</h3>
            {smallCardData.map((sCard, index) => (
              <div className="small-card" key={index + 1}>
                <div className="small-card__header">
                  <h6>{sCard.title}</h6>
                  <img src={sCard.icon} alt="platform icon" />
                </div>
                <div className="small-card__footer">
                  <div>{sCard.numb}</div>
                  <div>
                    <img src={sCard.tIcon} alt="ups and downs" />
                    <div>{sCard.percent}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="attribution">
        Coded by <a href="linktr.ee/Joe_Hsn">Joe_Hsn</a>.
      </div>
    </div>
  );
}

export default App;
