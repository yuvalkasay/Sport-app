import React,{Component} from 'react'
import Carousel from 'react-bootstrap/Carousel';
import './CarouselComp.css';

export default class CarouselComp extends Component {

  render() {  
  const  {img1,img2,img3,img4} = this.props
    return (
      <div>
      <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <p classname='p-slider'>Welcome To UFC Page</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />

        <Carousel.Caption>
          <p classname='p-slider'>Here you can find all information about your favorite fighers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="NateDiaz"
        />

        <Carousel.Caption>
          <p classname='p-slider'>Including fighters records history evants and much more </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img4}
          alt="Tony"
        />
        <Carousel.Caption>
          <p classname='p-slider'>Sing up and tell us your thought!</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      </div>
    )
  }
}


