import { useEffect } from "react";
import { useState } from "react";
import "./App.css";
import Select from "react-select";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [data, setData] = useState([]);

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

  return (
    <div className="container mt-5">
      <Select options={data}> </Select>
    </div>
  );
}

export default App;
