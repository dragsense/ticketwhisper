import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//import logo from "./logo.svg";

import "./App.css";
import LandingPage from "./pages/landing-page";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* Route for LandingPage */}
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
