import { useEffect, useState } from "react";
import { Books } from "./Books";

export default function App() {
  const apiURL = "https://www.anapioficeandfire.com/api/books?pageSize=30";
  const [apiData, setApiData] = useState([]);

  async function fetchData() {
    try {
      const res = await fetch(apiURL);
      const data = await res.json();
      setApiData(data);
    } catch (error) {
      console.error("Error", error);
    }
  }

  console.log(apiData);
  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="head">
      <div>
        <button className="fetch-button" onClick={fetchData}>
          Fetch Data
        </button>
        <h1>Game of Thrones Kitapları</h1>
        <h2>API'den liste alın ve görüntüleyin</h2>
        <br />
      </div>
      <div className="container">
        {apiData.map((book) => {
          return <Books book={book} key={book.isbn} />;
        })}
      </div>
    </div>
  );
}
