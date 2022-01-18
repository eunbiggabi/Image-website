import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/header/navbar/navbar";
import { GlobalStyle } from "./globalStyles";
import  Home from "./components/pages/home/home"
function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
