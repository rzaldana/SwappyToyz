const { faSlidersH } = require("@fortawesome/free-solid-svg-icons");

function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const ownerImages = importAll(
  require.context("./images", false, /\.(png|jpe?g|svg)$/)
);
const users = [
  {
    id: 1,
    name: "Mike Toyman",
    wishList: ["Toys for 11-13 year old boy"],
    picture: ownerImages["0.jpg"],
    match: false,
  },
  {
    id: 2,
    name: "Nora Herbert",
    wishList: ["Barbie Dolls"],
    picture: ownerImages["1.jpg"],
    match: true,
  },

  {
    id: 3,
    name: "Alicia Hartman",
    wishList: ["Barbie Dolls"],
    picture: ownerImages["2.jpg"],
    match: false,
  },

  {
    id: 4,
    name: "Jerry Suarez",
    wishList: ["Barbie Dolls"],
    picture: ownerImages["3.jpg"],
    match: false,
  },

  {
    id: 4,
    name: "John Appleseed",
    wishList: ["Barbie Dolls"],
    picture: ownerImages["4.jpg"],
    match: true,
  },
];

module.exports = users;
