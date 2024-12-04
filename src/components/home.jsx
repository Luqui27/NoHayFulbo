import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();
  return (
    <Container fluid>
      <Row>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://yt3.googleusercontent.com/ixVEoxdif6DyM79ghgX3Y5i6ndya6G4zbPw0FAiKnFW5CTnr7hqeeym-4BJ0BJuGBasc5PF3=s900-c-k-c0x00ffffff-no-rj" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button onClick={()=>navigate('/Tnt')}>Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="https://www.telsur.cl/documents/862366/7635601/ESPN_PREMIUM.jpg/42e3a21d-0dcc-3cb6-28fa-ecb58aa4f19d?t=1708354644114" />
            <Card.Body>
              <Card.Title>Card Title</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <Button variant="primary">Go somewhere</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Home;
