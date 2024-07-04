import { Carousel } from "react-bootstrap"
import image1 from "../images/ca1.jpg"
import image2 from "../images/ca2.jpg"
import image3 from "../images/ca3.jpg"
import image4 from "../images/ca5.jpg"

const customImgStyle = {
  height: '700px',
  objectFit: 'cover'
};
const CarouselComponent = () =>{
    return(
    <Carousel id="carouselExample">
    <Carousel.Item>
      <img className="d-block w-100" src={image1} alt="First slide" style={customImgStyle} />
      <Carousel.Caption>
        <h3>Vie Art</h3>
        <p>
          if you are looking for a traditional Art , the Vie Art
          is the best option
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image2} alt="Second slide" style={customImgStyle}/>
      <Carousel.Caption>
        <h3>Vie Art</h3>
        <p>
        if you are looking for a traditional Art , the Vie Art
          is the best option
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image3} alt="Third slide"style={customImgStyle} />
      <Carousel.Caption>
        <h3>Vie Art</h3>
        <p>
        if you are looking for a traditional Art , the Vie Art
          is the best option
        </p>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img className="d-block w-100" src={image4} alt="Third slide"style={customImgStyle} />
      <Carousel.Caption>
        <h3>Vie Art</h3>
        <p>
        if you are looking for a traditional Art , the Vie Art
          is the best option
        </p>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
    )
}
export default CarouselComponent;