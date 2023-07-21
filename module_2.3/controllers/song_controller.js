const { response } = require("../routes/song_routes");
const song_service = require("../services/song_services");

// Fungsi untuk menampilkan semua lagu
const getAllSongs = (req, res) => {
  try {
    const lagu = song_service.getAllSongs();
    res.json(lagu);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//fungsi untuk menampilkan playlist ID
const getSongbyId = (req, res) => {
  const songId = req.params.id;
  try {
    const song = song_service.getSongbyId(songId);
    if (!song) {
      res.status(404).json({ message: "Daftar Lagu tidak muncul" });
    } else {
      res.json(song);
    }
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//fungsi untuk membuat lagu baru
const createSong = (req, res) => {
  const { title, songs } = req.body;
  try {
    const newSong = song_service.createSong(title, songs);
    res.status(201).json(newSong);
  } catch (error) {
    res.status(500).json({ message: "Internal server error" });
  }
};

//fungsi untuk update lagu baru berdasarkan id
const updateLagu = (req, res) => {
  const songId = req.params.id;
  const { title, songs } = req.body;
  try {
    const updatedLagu = song_service.updateLagu(songId, title, songs);
    if (!updatedLagu) {
      res.status(404).json({ message: "Daftar lagu tidak ditemukan" });
    } else {
      res.json(updatedLagu);
    }
  } catch (error) {
    res.status(500).json({ message: "Interval server error" });
  }
};

// Fungsi untuk menghitung jumlah pemutaran lagu
const getMostPlayedList = (req, res) => {
  const songId = req.params.id;
  try {
    const playedId = song_service.mostplayedSong(songId);
    if (!playedId) {
      res.status(404).json({ message: "Daftar lagu tidak ditemukan" });
    } else {
      res.json(playedId);
    }
  } catch (error) {
    res.status(500).json({ message: "Interval server error" });
  }
};

module.exports = {
  getAllSongs,
  getSongbyId,
  createSong,
  updateLagu,
  getMostPlayedList,
};
