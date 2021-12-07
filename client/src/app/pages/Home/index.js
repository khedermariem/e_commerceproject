import React from "react";
import Slider from "../../shared/carousel/Slider";
import "../../shared/carousel/slide.css";
import RecentProduct from "../../shared/RecentProduct";
const Home = () => {
  return (
    <div>
      <div className="container flex w-60 h-80">
        <Slider />
      </div>
      <div className="grid grid-cols-5 gap-4 mt-32">
        {[1,2,3,4,5,6,7,8,9,10].map((el) => {
          return      <RecentProduct/>;

        }
        )}
      </div>
    </div>
  );
};

export default Home;
