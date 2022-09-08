import "./App.css";
import axios from "axios";

function App() {
  const sendRequest = () => {
    axios
      .post("http://localhost:5000/api/v1/auth/login", {
        email: "testing1@gmail.com",
        password: "testingPass",
      })
      .then((res) => console.log(res.data));
  };
  return (
    <div className="App">
      <button onClick={() => sendRequest()}>Send Request</button>
    </div>
  );
}

export default App;
