const { faSlidersH } = require("@fortawesome/free-solid-svg-icons");

const imageUrl =
  "https://swappytoyz-assets.s3.ca-central-1.amazonaws.com/user-images/";

const users = [
  {
    id: 1,
    name: "Mike Toyman",
    wishList: ["Toys for 11-13 year old boy"],
    picture: imageUrl + "0.jpg",
    match: false,
  },
  {
    id: 2,
    name: "Nora Herbert",
    wishList: ["Barbie Dolls"],
    picture: imageUrl + "1.jpg",
    match: true,
  },

  {
    id: 3,
    name: "Alicia Hartman",
    wishList: ["Barbie Dolls"],
    picture: imageUrl + "2.jpg",
    match: false,
  },

  {
    id: 4,
    name: "Jerry Suarez",
    wishList: ["Barbie Dolls"],
    picture: imageUrl + "3.jpg",
    match: false,
  },

  {
    id: 4,
    name: "John Appleseed",
    wishList: ["Barbie Dolls"],
    picture: imageUrl + "4.jpg",
    match: true,
  },
];

module.exports = users;
