import CatListing from "./components/catListing";
import RandomeJokes from "./components/randomeJokes";
import Randomeuser from "./components/randomeuser";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";

export default function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/" element={<Navigate to="/random-user" />} /> */}

        <Route path="/random-user" element={<Randomeuser />} />

        <Route path="/random-jokes" element={<RandomeJokes />} />

        <Route path="/cat-listing" element={<CatListing />} />
      </Routes>
    </Router>
  );
}
