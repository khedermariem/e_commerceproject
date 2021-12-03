import React, { useRef, useState } from "react";
import PropTypes from "prop-types";
import { useClickAway } from "react-use";
import { login } from "../../actions/auth.actions";
import {connect} from "react-redux";
const SignIn = ({ closeModal,login }) => {
  const ModelRef = useRef(null);
 
  const [LoginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  useClickAway(ModelRef, () => {
    closeModal(false);
  });

  const onSubmitData = async (e) => {
    e.preventDefault();
    await login(LoginData);
    closeModal(false);
  };
   
  const handleDataChange = (e) => {
    setLoginData({ ...LoginData, [e.target.name]: e.target.value });
  };
  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-main bg-opacity-60">
      <div ref={ModelRef} className="relative w-1/3 p-4 bg-white rounded-xl">
        <div className="text-2xl font-bold text-main">Sign in</div>
        <form onSubmit={(e) => onSubmitData(e)}>
          <div className="flex flex-col items-center justify-between w-full gap-4 mb-6">
            <div className="w-full">
              <label htmlFor="email">Email</label>
              <input
                onChange={(e) => handleDataChange(e)}
                type="email"
                name="email"
                className="w-full px-4 py-2 border border-black border-solid rounded focus:outline-none"
                placeholder="Email"
                value={LoginData.email}
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
                value={LoginData.password}
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="w-full px-6 py-2 font-bold text-white transition-all duration-200 ease-in-out transform border-2 rounded-full border-main bg-main hover:opacity-95 hover:scale-105"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

SignIn.propTypes = {
	closeModal: PropTypes.func.isRequired,
  login: PropTypes.func.isRequired,
};
const mapStateToProps = (state) => ({
  
})
const mapDistatchToProps = {
  login
}
export default connect(mapStateToProps,mapDistatchToProps) (SignIn);
