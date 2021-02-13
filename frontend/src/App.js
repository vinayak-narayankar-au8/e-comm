import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
// Bootstrap imports
import { Container } from "react-bootstrap";
// Component imports
import Footer from "./Components/Footer";
import Header from "./Components/Header";
// Page imports
import HomePage from "./Pages/HomePage";
import ProductPage from "./Pages/ProductPage";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <main className="py-3">
        <Container>
          <Route path="/" component={HomePage} exact />
          <Route path="/product/:id" component={ProductPage} />
        </Container>
      </main>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
