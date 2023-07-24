import "./App.css";
import "./index.css";

function App() {
  return (
    <body>
      <h1>GG SPOTIFY</h1>
      <main>
        {/* <!-- List Lagu --> */}
        <div class="song-list">
          <h2>List Lagu</h2>
          <ul id="song-list">
            <li>Lagu 1</li>
            <li>Lagu 2</li>
            <li>Lagu 3</li>
            <li>Lagu 4</li>
          </ul>
        </div>
        <div class="most-played-song">
          {/* <!-- Lagu yang Paling Banyak Didengar --> */}
          <h2>Lagu yang Paling Banyak Didengar</h2>
          <p id="most-played-song">Lagu 1</p>
        </div>
        <div class="add-song-form">
          {/* <!-- Form Tambah Lagu --> */}
          <h2>Tambah Lagu ke Playlist</h2>
          <form id="add-song-form">
            <label for="song-name">Nama Lagu:</label>
            <input type="text" id="song-name" required />
            <button type="submit">Tambah Lagu</button>
          </form>
        </div>
      </main>
    </body>
  );
}

export default App;
