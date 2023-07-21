const Songs = require("../models/song_models");

//fungsi untuk mendaptkan semua lagu
function getAllSongs() {
  return Songs;
}

//fungsi untuk membuat lagu baru
function createSong(title, artist, URL) {
  let index = Songs.length + 1;
  Songs.push({
    id: index++,
    title: title,
    artist: artist,
    URL: "https://open.spotify.com/intl-id",
  });
}

//fungsi untuk mencari lagu berdasarkan id
function findplaySongbyId(id) {
  return Songs.find((song) => song.id === id);
}

//fungsi untuk mencari lagu berdasarkan title
function findplaySongbyTitle(title) {
  return Songs.find((song) => song.title === title);
}

///Perlu diperbaiki dibagian servicenyaa
// Menampilkan lagu yang paling banyak ditampilkan
const mostplayedSong = () => {
  return Songs.sort((a, b) => b.total_played - a.total_played);
};

module.exports = {
  getAllSongs,
  createSong,
  findplaySongbyId,
  findplaySongbyTitle,
  mostplayedSong,
};
