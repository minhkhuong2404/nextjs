import Head from "next/head";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/NavBar";
import Nav from "react-bootstrap/Nav";

const Layout = ({ children }) => (
  <Container>
    <Head>
      <meta charset="UTF-8" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Next App</title>
    </Head>

    <header>
      <Navbar bg="dark" variant="dark">
        <Navbar.Brand>My Next App</Navbar.Brand>
        <Nav>
          <Nav.Link href="/">Posts</Nav.Link>
          <Nav.Link href="/">About</Nav.Link>
        </Nav>
      </Navbar>
    </header>
    <main>{children}</main>
  </Container>
);

export default Layout;
