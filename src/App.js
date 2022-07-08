import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);
  const [userPilih, setUserPilih] = useState("");
  const [tampil, setTampil] = useState(false);

  const apiGithub = async () => {
    const ambil = await fetch(
      "https://api.github.com/users/Satriagalangs/repos"
    );
    const value = await ambil.json();
    const hasil = value.map((isi) => {
      return {
        label: isi.name,
        value: isi.name,
      };
    });
    setData(hasil.sort((a, b) => a.label.localeCompare(b.label)));
  };

  useEffect(() => {
    apiGithub();
  }, []);

  const handleLihat = () => {
    setTampil((state) => !state);
  };

  const handlePilih = (value) => {
    setUserPilih(value);
  };
  return (
    <div className="container mt-5">
      <Select options={data} onChange={(x) => handlePilih(x.value)}>
        {" "}
      </Select>
      <div className="btn btn-primary mt-5" onClick={() => handleLihat()}>
        {" "}
        {tampil ? "Tutup" : "Lihat"}
      </div>
      <h2>{tampil ? userPilih : ""}</h2>
    </div>
  );
}

export default App;
