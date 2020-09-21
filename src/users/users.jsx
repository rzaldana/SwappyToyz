const imageUrl =
  "https://swappytoyz-assets.s3.ca-central-1.amazonaws.com/user-images/";

const users = [
  {
    id: 0,
    name: "Mike Toyman",
    wishList: ["Toys for 11-13 year old boy"],
    picture: imageUrl + "0.jpg",
    match: false,
    points: 40,
    interactions: 20,
    location: 23400,
    city: "Toronto",
    country: "Canada",
    friends: [1, 2, 3],
    info:
      "We just moved to Toronto and my kids had to leave a lot of their toys back in Winnipeg so we're looking for some new stuff. ",
  },
  {
    id: 1,
    name: "Nora Herbert",
    wishList: ["Barbie Dolls"],
    picture: imageUrl + "1.jpg",
    match: true,
    points: 40,
    interactions: 20,
    location: 23400,
    city: "Toronto",
    country: "Canada",
    friends: [0, 2, 3],
    info:
      "Hi, I'm Nora. I have a 3-year old boy and a 5-year old girl with lots of toys",
  },

  {
    id: 2,
    name: "Alicia Hartman",
    wishList: ["Barbie Dolls"],
    picture: imageUrl + "2.jpg",
    match: false,
    points: 40,
    interactions: 20,
    location: 23400,
    city: "Toronto",
    country: "Canada",
    friends: [1, 3, 4],
    info: "I'm looking to give away a lot of toys my baby girl outgrew already",
  },

  {
    id: 3,
    name: "Jerry Suarez",
    wishList: ["Barbie Dolls"],
    picture: imageUrl + "3.jpg",
    match: false,
    points: 40,
    interactions: 20,
    location: 23400,
    city: "Toronto",
    country: "Canada",
    friends: [1, 2, 3],
    info:
      "Hi, I'm Jane. I have a little child who has a lot of toys to get rid of",
  },

  {
    id: 4,
    name: "John Appleseed",
    wishList: ["Barbie Dolls"],
    picture: imageUrl + "4.jpg",
    match: true,
    points: 40,
    interactions: 20,
    location: 23400,
    city: "Toronto",
    country: "Canada",
    friends: [1, 2, 3],
    info:
      "Hi, I'm Jane. I have a little child who has a lot of toys to get rid of",
  },
  {
    id: 5,
    name: "Jane Doe",
    wishList: ["Barbie Dolls"],
    picture: imageUrl + "5.png",
    match: false,
    points: 40,
    interactions: 20,
    location: 23400,
    city: "Toronto",
    country: "Canada",
    friends: [1, 2, 3],
    info:
      "Hi, I'm Jane. I have a little child who has a lot of toys to get rid of",
  },
];

module.exports = users;
