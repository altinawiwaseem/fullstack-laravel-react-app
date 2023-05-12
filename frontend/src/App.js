import "./App.css";
import List from "./component/List";
import { Link, Route, BrowserRouter as Router, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <nav className="App">
          <div>
            <Link to="/">BookList</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
