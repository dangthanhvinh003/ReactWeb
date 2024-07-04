
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import menu1 from "../images/menu1.jpg"
import menu2 from "../images/menu2.jpg"
import menu3 from "../images/menu3.jpg"
import menu4 from "../images/menu4.jpg"
import menu5 from "../images/menu5.jpg"
import menu6 from "../images/menu6.jpg"
import menu7 from "../images/menu7.jpg"
import menu8 from "../images/menu8.jpg"
const customCardImgStyle = {
  height: '350px',
  objectFit: 'cover'
};
const CardComponent = () => {
  return (
    <Container >
      <h1 className="text-left p-3" style={{textAlign: "center"}}>Our Art</h1>
      <Row>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src={menu1} style={customCardImgStyle} />
            <Card.Body>
              <Card.Title>Thunder</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src={menu2} style={customCardImgStyle} />
            <Card.Body>
              <Card.Title>Sun & Moon</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src={menu3} style={customCardImgStyle} />
            <Card.Body>
              <Card.Title>Shark</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src={menu4} style={customCardImgStyle} />
            <Card.Body>
              <Card.Title>Life</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src={menu5} style={customCardImgStyle} />
            <Card.Body>
              <Card.Title>Demon</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src={menu6} style={customCardImgStyle} />
            <Card.Body>
              <Card.Title>Fire</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="           mb-4">
          <Card>
            <Card.Img variant="top" src={menu7} style={customCardImgStyle} />
            <Card.Body>
              <Card.Title>Touch</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
        <Col lg={3} md={4} sm={6} xs={12} className="mb-4">
          <Card>
            <Card.Img variant="top" src={menu8} style={customCardImgStyle} />
            <Card.Body>
              <Card.Title>Skull</Card.Title>
              <Card.Text>Price: $19.99</Card.Text>
              <Button variant="dark" className="w-100 text-center">Buy</Button>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>

  );
}
export default CardComponent;