const titles = [`Friends`, `Big Bang Theory`, `MadMen`, `Card house`, `Miss Maisel`, `Good day`, `Summer`, `Autumn`];
const sources = [
  `aviator.jpg`,
  `macbeth.jpg`,
  `johnny-english.jpg`,
  `mindhunter.jpg`,
  `orlando.jpg`,
  `snatch.jpg`,
  `moonrise-kingdom.jpg`,
  `revenant.jpg`
];

const films = new Array(8).fill(``).map((film, index) => ({
  title: titles[index],
  picture: sources[index],
  id: index + Date.now(),
}));

export default films;
