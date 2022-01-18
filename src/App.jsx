import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Button } from "./components/button/button.styles";
import Navbar from "./components/header/navbar/navbar";
import { Container, GlobalStyle } from "./globalStyles";
import { BodyContainer } from "./App.styles";

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Navbar />
      {/* <BodyContainer>
        <Button bg="red">Button</Button>
        <Button bg="green">Button</Button>
      </BodyContainer> */}
    </Router>
  );
}

export default App;
