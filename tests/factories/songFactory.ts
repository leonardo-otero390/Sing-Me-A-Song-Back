const songs = [
  {
    name: "Ludovico Einaudi - Experience",
    youtubeLink: "https://www.youtube.com/watch?v=hN_q-_nGv4U",
  },
  {
    name: "Ylvis - Stonehenge",
    youtubeLink: "https://www.youtube.com/watch?v=mbyzgeee2mg",
  },
  {
    name: "TENACIOUS D - Kickapoo",
    youtubeLink: "https://www.youtube.com/watch?v=hvvjiE4AdUI",
  },
];

export function songFactory() {
  return songs[Math.floor(Math.random() * songs.length)];
}
