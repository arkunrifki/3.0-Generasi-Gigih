let songs = [
  {
    id: 1,
    title: "Just The Way You Are",
    artist: "Bruno Mars",
    URL: "https://open.spotify.com/track/7BqBn9nzAq8spo5e7cZ0dJ",
  },
  {
    id: 2,
    title: "Talking to the Moon",
    artist: "Bruno Mars",
    URL: "https://open.spotify.com/track/161DnLWsx1i3u1JT05lzqU",
  },
  {
    id: 3,
    title: "Treasure",
    artist: "Bruno Mars",
    URL: "https://open.spotify.com/track/55h7vJchibLdUkxdlX3fK7",
  },
  {
    id: 4,
    title: "24K Magic",
    artist: "Bruno Mars",
    URL: "https://open.spotify.com/track/6b8Be6ljOzmkOmFslEb23P",
  },
];

function getAllSongs() {
  return songs;
}

function getSong(id) {
  return songs.find((s) => s.id === id);
}

function generateSongId() {
  return Math.random().toString(10).substring(2.6);
}

function createSong(title, artist, URL) {
  let newSongs = {
    id: generateSongId(),
    title: title,
    artist: artist,
    URL: "https://open.spotify.com/intl-id",
  };
  return songs;
}

module.exports = {
  createSong,
  getAllSongs,
  getSong,
};
