import "./App.css";

import Navbar from "./components/Navbar";
import UserList from "./components/UserList";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main className="container-fluid mt-3">
        <UserList />
      </main>
    </div>
  );
}

export default App;
