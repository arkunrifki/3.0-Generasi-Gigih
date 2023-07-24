import "./App.css";
import "./index.css";

const Avatar = {
  name: "Letto",
  imageUrl: "../public/letto.jpg",
};

export function App() {
  return (
    <div className="Avatar">
      <header>{Avatar.name}</header>
      <img className="Avatar-img" src={Avatar.imageUrl} alt="foto profil"></img>
    </div>
  );
}

export default App;
