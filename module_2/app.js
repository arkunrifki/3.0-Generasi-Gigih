const express = require("express"); //Framework NodeJS dengan mengambile module express
const app = express();
const port = 3000;
const bodyParser = require("body-parser");

//Routes / URL / endpoint utama dengan method GET

//masukkin body-parser agar bisa dimasukkan ke POST
app.use(bodyParser.json());
//Mengambil format dari frontEnd yang ngirim ke saya sebuah request berupa post method lalu ubah ke JSON format
//dari depan udah dikirim JSON format nah saya ambil dengan format JSON format juga

// app.get("/", (req, res) => {
//   res.send("Hello World! Bismillah dapet kerja");
// });

// app.get("/hy", (req, res) => {
//   console.log({ urlParam: req.query.alamat });
//   res.send("Bulan ini dapet kerja!!!!");
// });

// app.post("/login", (req, res) => {
//   console.log({ requestFromOutside: req.body });
//   res.send("login berhasil");
// });

// app.put("/username", (req, res) => {
//   console.log({ updateData: req.body });
//   res.send("update berhasil");
// });

app.use(express.json());

let songs = [
  {
    id: 1,
    title: "Just The Way You Are",
    artist: "Bruno Mars",
  },
  {
    id: 2,
    title: "Talking to the Moon",
    artist: "Bruno Mars",
  },
  {
    id: 3,
    title: "Treasure",
    artist: "Bruno Mars",
  },
  {
    id: 4,
    title: "24K Magic",
    artist: "Bruno Mars",
  },
];

//Read songs from data
app.get("/songs", (req, res) => {
  res.setHeader("Content-Type", "application/json");
  res.statusCode = 200;
  res.send(JSON.stringify(songs));
});

//Read song by id
app.get("/songs/id", (req, res) => {
  const id = req.params.id; /// mengambil params id dan memasukkan nya ke const id
  const song = songs.find((song) => song.id === id); // menggunakan find untuk mencari object lagu dalam array songs
  // buat percabangan untuk menerima json id dari const music, jika tidak ada maka akan ada status error
  if (song) {
    res.json(song);
  } else {
    res.status(404).json({ message: "Not found song you search" });
  }
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
