import React, { useState,useRef } from "react";
import { Link } from "react-router-dom";
import SignIn from "../../auth/SignIn";
import Register from './../../auth/Register/index';
import {useClickAway} from "react-use";

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { logout } from "../../actions/auth.actions";
const Header = ({authState,logout}) => {
  const [IsSignInOpen, setIsSignInOpen] = useState(false);
  const [IsRegisterOpen, setIsRegisterOpen]= useState(false);
  const [isDropOpen, setIsDropOpen] = useState(false)
  const handleSignInClose = (e) =>{
	setIsSignInOpen (e);
  setIsRegisterOpen(e)  
  }
  const dropRef = useRef(null);
  useClickAway(dropRef, () => {
		setIsDropOpen(false);
	});
 
  return (
    <div>
      <header className="box-border pt-4 border-b-2 border-solid border-minor">
        <div className="container mx-auto">
          <div className="flex items-center justify-between gap-4 mb-5">
            <Link to="/" className="w-1/12 text-4xl font-bold text-primary">
              SHOP
            </Link>
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

            <div className="flex items-center justify-center w-12 h-12">
              <Link
                to="/FavoriteProduct"
                className="w-1/12 px-6 py-2 transition-all duration-200 ease-in-out rounded-full hover:bg-gray-100 focus:bg-gray-200 whitespace-nowrap "
              >
                <i className="fas fa-heart"></i>
              </Link>
              </div>
              
					
					{!authState.isAuthenticated ? (
						<div className="flex items-center justify-between w-4/12">
							<button
								onClick={(e) => setIsSignInOpen(true)}
								className="w-1/2 px-6 py-2 text-sm font-semibold text-center transition-all duration-200 ease-in-out rounded-full hover:bg-gray-100 focus:bg-gray-200 whitespace-nowrap">
								Sign in
							</button>
							<button
								onClick={(e) => setIsRegisterOpen(true)}
								className="w-1/2 px-6 py-2 text-sm font-semibold text-center transition-all duration-200 ease-in-out rounded-full hover:bg-gray-100 focus:bg-gray-200 whitespace-nowrap">
								Register
							</button>
						</div>
					) : (
						<div ref={dropRef} className="relative cursor-pointer">
							<div
								onClick={(e) => setIsDropOpen(!isDropOpen)}
						
								 className="flex items-center justify-start gap-4">
								<div className="flex items-center justify-center w-10 h-10 text-sm font-bold uppercase rounded-full bg-primary text-main">
									<span>{authState.user.firstName[0]}</span>
									<span>{authState.user.lastName[0]}</span>
								</div>
								<div className="font-semibold capitalize whitespace-nowrap">
									{authState.user.firstName} {authState.user.lastName}
								</div>
                
					
        </div>
        {isDropOpen && (
							
									<div
										className="px-4 py-2 font-bold text-center cursor-pointer rounded-xl"
										onClick={(e) => logout()}>
										Logout
									</div>
							
							)}
          </div>	)}
          {IsSignInOpen && <SignIn closeModal={(e) => handleSignInClose(e)} />}
					{IsRegisterOpen && 
						<Register closeModal={(e) => handleSignInClose(e)} />
					}
          
              <Link to="/Cart"className="w-1/12 px-6 py-2 transition-all duration-200 ease-in-out rounded-full hover:bg-gray-100 focus:bg-gray-200 whitespace-nowrap ">
                <i className="fas fa-shopping-bag"></i>
              </Link>
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
      </header>
    </div>
   );
};
Header.propTypes = {
	authState: PropTypes.object.isRequired,
  logout: PropTypes.func.isRequired,
  
};
const mapStateToProps = (state) => ({
  authState: state.authState,
  


})

const mapDispatchToProps = {
  logout
}

export default connect(mapStateToProps,mapDispatchToProps)(Header);
