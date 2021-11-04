import React from "react";
import ImageSlider from "../../shared/carousel/ImageSlider";
import { SliderData } from "../../shared/carousel/SliderData";
 const Home = () => {
  return (
  
            


<div className="container flex h-48 max-w-full"  >
<ImageSlider slides={SliderData} />
</div>

  );
};

export default Home;
