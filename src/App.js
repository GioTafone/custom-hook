import "./App.css";
import { useFetch } from "./useFetch";

function App() {
  const { contacts } = useFetch({
    url: "https://jsonplaceholder.typicode.com/users",
  });

  return (
    <>
      <div className="App">Hello</div>
      {!contacts ? (
        <p>LOADING...</p>
      ) : (
        <p>
          {contacts.map((contact) => (
            <li key={contact.id}>{contact.name}</li>
          ))}
        </p>
      )}
    </>
  );
}

export default App;
