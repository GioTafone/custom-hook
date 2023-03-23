import { useState } from "react";
import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  const [url, setUrl] = useState(null);
  const { datas } = useFetch({
    url,
  });
  console.log(datas);

  return (
    <>
      <div className="App">Data fetch and rendering with custom hook</div>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/posts")}
      >
        Show Posts
      </button>
      <button
        onClick={() => setUrl("https://jsonplaceholder.typicode.com/comments")}
      >
        Show Comments
      </button>
      {!datas ? (
        <p>Click the buttons to display datas</p>
      ) : (
        datas.map((data) => <p key={data.id}>{data.body}</p>)
      )}
    </>
  );
}

export default App;
