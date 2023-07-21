const express = require("express"); //Framework NodeJS dengan mengambile module express
const route = express();

const song_controller = require("../controllers/song_controller");

//Router untuk menampilkan semua playlist
route.get("/songs", song_controller.getAllSongs);

//Router untuk menampilkan lagu berdasarkan id
route.get("/songs/:id", song_controller.getSongbyId);

//Route untuk membuat song baru
route.post("/songs", song_controller.createSong);

//route untuk update song berdasarkan id
route.put("/songs/:id", song_controller.updateLagu);

//route untuk mencari lagu yang paling banyak diputar
route.get("songs/mostplayed", song_controller.getMostPlayedList);

module.exports = route;
