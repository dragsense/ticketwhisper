import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import logo from "./logo.svg";
import "./styles.css";
import "./App.css";
import LandingPage from "./pages/landing-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <LandingPage />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
