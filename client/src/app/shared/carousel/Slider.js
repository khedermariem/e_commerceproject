import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import image1 from './images/image1.jpg';
import image2 from './images/image2.jpg';
import image3 from './images/image3.jpg';
import image4 from './images/image4.jpg';
import image5 from './images/image5.jpg';
import  "./slide.css";


const Slider =() =>{
return (
  <Carousel className='main-slide'>
      <div>
      <img src={image1} height="100px" width="50px"/>
  </div>
  <div>
      <img src={image2} height="100px" width="50px"/>
  </div>
  <div>
      <img src={image3} height="100px" width="50px"/>
  </div>
  <div>
      <img src={image4} height="100px" width="50px"/>
  </div>
  <div>
      <img src={image5} height="100px" width="50px"/>
  </div>
 
</Carousel>
);
}
export default Slider;



