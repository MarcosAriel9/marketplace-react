import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import FeatherIcon from "feather-icons-react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { CategoryScreen } from "./components/category/CategoryScreen";
import { SubcategoryScreen } from "./components/subcategory/SubcategoryScreen";

const App = () => {
  return (
    <Router>
      <Navbar bg="dark" variant="dark">
        <Container fluid>
          <Navbar.Brand href="#">
            <FeatherIcon icon="home" />
          </Navbar.Brand>
          <Nav className="me-auto">
            <Link to={"/"} className="nav-link">
              Categorías
            </Link>
            <Link to={"/subcategory"} className="nav-link">
              Subcategorías
            </Link>
          </Nav>
        </Container>
      </Navbar>
      <Container>
        <Routes>
          <Route path={"/"} element={<CategoryScreen />} />
          <Route path="/subcategory" element={<SubcategoryScreen />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;
