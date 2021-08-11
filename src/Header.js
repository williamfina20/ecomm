import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import { HouseDoor } from "react-bootstrap-icons";
import { Link, useHistory } from "react-router-dom";

function Header() {
  let user = JSON.parse(localStorage.getItem("user-info"));
  const history = useHistory();

  function logOut() {
    localStorage.clear();
    history.push("/register");
  }

  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand>
            <Link to="/" className="btn btn-text text-white fs-4">
              <HouseDoor color="#3fd4f0" size={24} className="mb-2" />
              Ecomm
            </Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto navbar-wrapper">
              {localStorage.getItem("user-info") ? (
                <>
                  <Link to="/" className="btn btn-text">
                    Product List
                  </Link>
                  <Link to="/add" className="btn btn-text">
                    Add Product
                  </Link>
                  <Link to="/update" className="btn btn-text">
                    Update Product
                  </Link>
                </>
              ) : (
                <>
                  <Link to="/login" className="btn btn-text">
                    Login
                  </Link>
                  <Link to="/register" className="btn btn-text">
                    Register
                  </Link>
                </>
              )}
            </Nav>
            {localStorage.getItem("user-info") && (
              <Nav>
                <NavDropdown title={user.name}>
                  <NavDropdown.Item onClick={logOut}>Logout</NavDropdown.Item>
                </NavDropdown>
              </Nav>
            )}
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;
