import React from "react";
import { down, facebook, instagram, twitter, up, youtube } from "../images";

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

const Blocks = () => {
  return (
    <div className="content__container-blocks">
      {blocks.map((block, index) => (
        <div key={index} className={`card ${borderColour(index + 1)}`}>
          <div className="card__username">
            <img
              src={block.icon}
              alt={`${block.icon} platform icon`}
              className="w-6 h-6 mr-2"
            />
            <h6>{block.username}</h6>
          </div>
          <div className="card__number">{block.number}</div>
          <div className="card__title">{block.title}</div>
          <div
            className={`card__time ${
              index === 3 ? "text-bright-red" : "text-lime-green"
            }`}
          >
            <img src={block.status} alt="status up or down" className="mr-2" />
            {block.time}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Blocks;
