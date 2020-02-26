const MAX_RATING = 10;
const MIN_RATING = 0;
const MIN_DATE = 1997;
const MAX_DATE = 2019;
const MIN_RATING_AMOUNT = 0;
const MAX_RATING_AMOUNT = 300;

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
const genres = [`comedy`, `drama`, `cartoon`];
const poster = `bg-the-grand-budapest-hotel.jpg`;
const description = `The McCallister family prepares to spend Christmas in Paris, gathering at Peter and Kate's home in a Chicago suburb on the night before their departure. Peter and Kate's youngest son, Kevin, is the subject of ridicule by his older siblings and relatives, namely his older brother Buzz. Meanwhile, Harry Lyme, a burglar, poses as a police officer offering security advice in order to gather information about every house in the neighborhood, including the McCallister's. Right before Harry leaves, Kevin gets into a fight with Buzz after Buzz claims he ate all the plain cheese pizza not even a minute after it arrived, resulting in Kevin's plane ticket mistakenly being thrown away and him getting sent to the attic of the house as punishment. As Kate walks Kevin to the attic, she has a brief conversation with Harry. After Harry leaves, Kevin berates Kate and wishes that his family would disappear. During the night, heavy winds cause damage to the power lines; the resulting power outage (which everyone sleeps through and has ended by morning) resets the alarm clocks and causes the family to oversleep. In the confusion and rush to get to the airport, along with an accurate headcount when a neighbor's son passes by (mistaken for Kevin) coupled with no assigned ticket, Kevin is accidentally left behind.`;
const directors = [`Tim Bertone`, `Quentin Tarantino`, `Rob Tomas`];
const actors = [`Leonardo DiCaprio`, `Tim Bertone`, `Jennyfer Aniston`, `David Shvimmer`];
const videos = [
  `https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4`,
  `https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm`
];

const getRandomNumber = (max, min = 0) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomFloatNumber = (max, min = 0) => {
  return parseFloat((Math.random() * (max - min) + min).toFixed(1));
};

const getRandomElement = (elements) => {
  return elements[getRandomNumber(elements.length - 1)];
};

const commentsAuthors = [
  `Emma Stone`,
  `Sam Cook`,
  `Billy Aiz`,
  `Red Bird`,
];

const commentsTexts = [
  `booring`,
  `awesome`,
  `not bad`,
  `awful`,
  `perfect`,
  `so funny`,
];
const date = new Date(Date.now());
const films = new Array(8).fill(``).map((film, index) => ({
  id: index + Date.now(),
  title: getRandomElement(titles),
  genre: getRandomElement(genres),
  picture: getRandomElement(sources),
  release: getRandomNumber(MAX_DATE, MIN_DATE),
  rating: getRandomFloatNumber(MAX_RATING, MIN_RATING),
  ratingAmount: getRandomNumber(MAX_RATING_AMOUNT, MIN_RATING_AMOUNT),
  poster,
  description,
  director: getRandomElement(directors),
  actors: new Array(3).fill(``).map(()=>getRandomElement(actors)),
  video: getRandomElement(videos),
  runTime: `1h 30m`,
  reviews: new Array(6).fill(``).map(() => ({
    author: getRandomElement(commentsAuthors),
    text: getRandomElement(commentsTexts),
    rating: getRandomFloatNumber(10, 0),
    dateTime: `${date.getMonth()} ${date.getDate()}, ${date.getFullYear()}`,
  }))
}));

export default films;
