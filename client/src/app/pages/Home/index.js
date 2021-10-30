import React from "react";

export const Home = () => {
  return (
    <div>
      <header className="box-border pt-4 border-b-2 border-solid border-minor">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4 mb-5">
            <div className="w-1/12 text-4xl font-bold text-primary">SHOP</div>
            <div className="w-8/12 transition-all duration-200 ease-in-out rounded-full focus-within:bg-main focus-within:ring focus-within:ring-minor focus-within:ring-offset-2">
              <input
                className="w-11/12 py-2 pl-4 pr-10 border-2 border-r-0 border-solid rounded-l-full border-main focus:outline-none"
                type="text"
                placeholder="search for something"
              />
              <button className="w-1/12 px-6 py-2 transition-all duration-200 ease-in-out border-2 border-l-0 rounded-r-full border-main hover:bg-gray-100 focus:bg-primary">
                <i className="fas fa-search text-primary"></i>
              </button>
            </div>

            <div className="flex items-center justify-between w-4/12">
              <button className="w-1/12 px-6 py-2 transition-all duration-200 ease-in-out rounded-full hover:bg-gray-100 focus:bg-gray-200 whitespace-nowrap ">
                <i class="fas fa-heart"></i>
              </button>
              
              <button className="w-1/2 px-6 py-2 text-sm font-semibold text-center transition-all duration-200 ease-in-out rounded-full hover:bg-gray-100 focus:bg-gray-200 whitespace-nowrap">
                Sign in
              </button>
              <button className="w-1/2 px-6 py-2 text-sm font-semibold text-center transition-all duration-200 ease-in-out rounded-full hover:bg-gray-100 focus:bg-gray-200 whitespace-nowrap">
                Register
              </button>
              <button className="w-1/12 px-6 py-2 transition-all duration-200 ease-in-out rounded-full hover:bg-gray-100 focus:bg-gray-200 whitespace-nowrap ">
                <i class="fas fa-shopping-bag"></i>
              </button>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between gap-4 ">
          <div> Gaming </div>
          <div>Informatique</div>
          <div>Téléphonie&Tablette</div>
          <div>Multimédia</div>
          <div>Electoménager</div>
          <div>Impression</div>
          <div>Réseaux</div>
          <div>Maison</div>
          <div>Sport</div>
          <div>Robotiques</div>
        </div>
        <div>
            



</div>
      </header>
    </div>
  );
};

export default Home;
