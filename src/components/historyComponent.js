import React from 'react';
import { Container } from 'react-bootstrap';
import banner from "../images/history.jpg" // Thay đổi đường dẫn này đến ảnh banner của bạn
import banner1 from "../images/history2.jpg"
import banner2 from "../images/history3.jpg"
import { Carousel } from "react-bootstrap"
const customImgStyle = {
    height: '500px',
    objectFit: 'cover'
    ,
    objectPosition: 'top'
};

const HistoryComponent = () => {
    return (
        <Container >
            <h1 className="text-left p-3" style={{ textAlign: "center" }}>History</h1>
            <Carousel id="carouselExample">
                <Carousel.Item>
                    <img className="d-block w-100" src={banner} alt="First slide" style={customImgStyle} />

                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner1} alt="Second slide" style={customImgStyle} />

                </Carousel.Item>
                <Carousel.Item>
                    <img className="d-block w-100" src={banner2} alt="Third slide" style={customImgStyle} />

                </Carousel.Item>
            </Carousel>
            <p>
                Once a notorious street gang feared throughout the city for their involvement in various illicit activities, the members of the group, driven by a newfound collective passion for the arts, gradually shifted their focus from a life of crime to more creative pursuits such as music and tattooing; this transformation culminated in the formation of a tattooing collective where, through rigorous training and a shared dedication to mastering the craft, they evolved into highly skilled tattoo artists, now celebrated for their intricate designs and professional expertise.
            </p>
            <p>
                Tattooing has been practiced across the globe since at least Neolithic times, as evidenced by mummified preserved skin, ancient art, and the archaeological record. In the past, tattoos were used for identification, protection, and spiritual reasons. Today, tattooing is a widely accepted art form and a way for individuals to express their identity and creativity.
            </p>
        </Container>
    );
};

export default HistoryComponent;