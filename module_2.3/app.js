const express = require("express"); //Framework NodeJS dengan mengambile module express
const cors = require("cors");
const bodyParser = require("body-parser");
const songRoutes = require("./routes/song_routes");

const app = express();
const port = 3000;
//Routes / URL / endpoint utama dengan method GET

//masukkin body-parser agar bisa dimasukkan ke POST
app.use(bodyParser.json());
//Mengambil format dari frontEnd yang ngirim ke saya sebuah request berupa post method lalu ubah ke JSON format
//dari depan udah dikirim JSON format nah saya ambil dengan format JSON format juga

//Middleware untuk mengizinkan akses ke domain berbeda
app.use(cors());

app.use(express.json());

app.use(songRoutes);

//Server
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
