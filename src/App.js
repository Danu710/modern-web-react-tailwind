import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CaseStudies from "./pages/CaseStudies";
import Home from "./pages/Home";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/casestudies" element={<CaseStudies />}></Route>
      </Routes>
    </Router>
  );
}

export default App;
