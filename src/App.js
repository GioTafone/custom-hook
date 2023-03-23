import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  const { data } = useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  console.log("App is rendering");
  console.log(data);
  return (
    <>
      <div className="App">Hello</div>
      {!data ? (
        <p>LOADING</p>
      ) : (
        <p>
          {data.map((data) => (
            <li key={data.id}>{data.name}</li>
          ))}
        </p>
      )}
    </>
  );
}

export default App;
