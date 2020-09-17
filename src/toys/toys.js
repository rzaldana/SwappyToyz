function importAll(r) {
  let images = {};
  r.keys().map((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}

const toyImages = importAll(
  require.context("./../img/random_toys", false, /\.(png|jpe?g|svg)$/)
);

const ownerImages = importAll(
  require.context("./owner-images", false, /\.(png|jpe?g|svg)$/)
);
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

const toys = [];
[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => {
  toys.push({
    id: i,
    image: toyImages[(i + 1).toString() + ".jpg"],
    name: toyNames[i],
    tags: toyTags[i],
    ownerId: i % 5,
    description: toyDescriptions[i],
  });
});

module.exports = toys;