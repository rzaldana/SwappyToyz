const toyNames = [
  "Spaceman",
  "Beach toy truck",
  "Teddy Bear",
  "Avocado Plushie",
  "Toy Robot",
  "Super Mario Figurines",
  "Teddy Bear",
  "Toy Beetle",
  "Piggies",
  "Lego set",
];

const toyTags = [
  ["space", "doll"],
  ["beach", "truck"],
  ["plushie", "0-3 years old"],
  ["green", "cute", "0-3 years old"],
  ["robot"],
  ["Video Games", "3-8 years old"],
  ["Plushie", "Teddy Bear"],
  ["Car"],
  ["cute", "0-3 years old"],
  ["Lego"],
];

const toyDescriptions = [
  "A pretty and fun spaceman doll for boys",
  "A cute toy truck for the beach",
  "My daughter's former favourite stuffed animal",
  "A cute avocado plushie that needs a home",
  "A blue toy robot my son doesn't need anymore",
  "Really expensive Super Mario figurines that our children don't use anymore",
  "An unused Teddy Bear",
  "A toy beetle car",
  "A set of piggies for a baby",
  "An enormous set of lego bricks that are collecting dust in our home",
];

const giftStatus = [
  true,
  false,
  false,
  true,
  true,
  false,
  false,
  true,
  false,
  false,
];

const imageUrl =
  "https://swappytoyz-assets.s3.ca-central-1.amazonaws.com/toy-images/";

const toys = [];
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
  toys.push({
    id: i,
    image: imageUrl + (i + 1).toString() + ".jpg",
    name: toyNames[i],
    tags: toyTags[i],
    ownerId: i % 5,
    description: toyDescriptions[i],
    gift: giftStatus[i],
  });
});

module.exports = toys;
