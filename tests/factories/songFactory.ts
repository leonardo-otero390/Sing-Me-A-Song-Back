import songs from '../../prisma/seeds/songsMock';

export function songFactory() {
  const song = songs[Math.floor(Math.random() * songs.length)];
  return { name: song.name, youtubeLink: song.youtubeLink };
}
