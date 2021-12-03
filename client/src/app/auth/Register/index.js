import React, { useState,useRef } from "react";
import PropTypes from "prop-types";

import { useClickAway } from "react-use";
import { register } from "../../actions/auth.actions";

import {connect} from "react-redux";

const Register = ({closeModal, register}) => {
    const modalRef = useRef (null);
    const [RegisterData, setRegisterData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
      useClickAway(modalRef , () => {
        closeModal(false);
      });
      const onSubmitData = async (e) => {
        e.preventDefault();
        await register(RegisterData);
        closeModal(false);
      };
      const handleDataChange = (e) => {
        setRegisterData({ ...RegisterData, [e.target.name]: e.target.value });
      };
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-main bg-opacity-60">
      <div className="relative w-1/3 p-4 bg-white rounded-xl">
        <div className="text-2xl font-bold text-main">Register</div>
        <form onSubmit={(e) => onSubmitData(e)}>
          <div className="mb-6 space-y-4 ">
            <div className="flex items-center justify-between gap-4">
              <div className="w-1/2">
                <label htmlFor="firstName">firstName</label>
                <input
                  onChange={(e) => handleDataChange(e)}
                  type="firstName"
                  name="firstName"
                  className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                  placeholder="FirstName"
                  value={RegisterData.firstName}
                />
              </div>
              <div className="w-1/2">
                <label htmlFor="lastName">lastName</label>
                <input
                  onChange={(e) => handleDataChange(e)}
                  type="lastName"
                  name="lastName"
                  className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                  placeholder="lastName"
                  value={RegisterData.lastName}
                />
              </div>
            </div>
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => handleDataChange(e)}
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                placeholder="Email"
                value={RegisterData.email}
              />
            </div>
            <div className="w-full">
              <label htmlFor="password">Password</label>
              <input
                onChange={(e) => handleDataChange(e)}
                type="password"
                name="password"
                className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                placeholder="Password"
                value={RegisterData.password}
              />
            </div>
            <div className="w-full">
              <label htmlFor="password">Confirm Password</label>
              <input
                onChange={(e) => handleDataChange(e)}
                type="password"
                name="confirmPassword"
                className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                placeholder="Password"
                value={RegisterData.confirmPassword}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-2 font-bold text-white transition-all duration-200 ease-in-out transform border-2 rounded-full border-main bg-main hover:opacity-95 hover:scale-105"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
Register.propTypes = {
    closeModal: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,

};
const mapStateToProps = (state) => {
   
}
const mapDispatchToProps =  {
    register
}
   

export default  connect (mapStateToProps,mapDispatchToProps)(Register);
