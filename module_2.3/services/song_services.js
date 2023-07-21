const Playlist = require("../models/song_models");

//fungsi untuk mendaptkan semua lagu
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

