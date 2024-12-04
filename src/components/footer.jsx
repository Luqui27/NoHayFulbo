import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

function Footer1() {
  return (
    <>
      <Navbar fixed='bottom' className="bg-body-tertiary">
        <Container>
          <Navbar.Brand>Brand text</Navbar.Brand>
        </Container>
      </Navbar>
    </>
  );
}

export default Footer1;