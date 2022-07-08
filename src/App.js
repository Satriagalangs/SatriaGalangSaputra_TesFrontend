import { useEffect } from "react";
import { useState } from "react";
import "./App.css";

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
  };

  useEffect(() => {
    apiGithub();
  }, []);

  return (
    <div>
      <h2>TES</h2>
    </div>
  );
}

export default App;
