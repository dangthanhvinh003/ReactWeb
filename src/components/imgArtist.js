import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Image from 'react-bootstrap/Image';
import Row from 'react-bootstrap/Row';
import a1 from "../images/a1.jpg"
import a2 from "../images/a2.jpg"
import a3 from "../images/a3.jpg"
import a4 from "../images/a4.jpg"
const customImageStyle = {
    width: '100%',
    height: '300px',
    objectFit: 'cover'
};
function ImageArtists() {
    return (
        <div >
            <h1 className="text-left p-3" style={{textAlign: "center"}}>Our Artits</h1>
            <div className="d-flex">
            <Container>
                    <Row>
                        <Col xs={12} md={3} className="text-center mb-4">
                            <Image src={a1} style={customImageStyle} thumbnail />
                            <div>Johny Dang</div>
                        </Col>
                        <Col xs={12} md={3} className="text-center mb-4">
                            <Image src={a2} style={customImageStyle} thumbnail />
                            <div>Kenvin Flow</div>
                        </Col>
                        <Col xs={12} md={3} className="text-center mb-4">
                            <Image src={a3} style={customImageStyle} thumbnail />
                            <div>Mendy Dew</div>
                        </Col>
                        <Col xs={12} md={3} className="text-center mb-4">
                            <Image src={a4} style={customImageStyle} thumbnail />
                            <div>John Wick</div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default ImageArtists;