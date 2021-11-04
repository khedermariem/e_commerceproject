import React from 'react'
import PropTypes from 'prop-types'
 const SignIn = ({text ,CloseModel}) => {
    return (
		<div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full bg-main bg-opacity-60">
        <div className="w-1/2 bg-white h-1/2">
           {text} 
        </div>
        <div onClick={() => CloseModel (false)} className="text-6xl " >X</div>
        </div>
        
    )
    
 }
 // eslint-disable-next-line react/no-typos
 SignIn.PropTypes = {
    text: PropTypes.string.isRequired,
    CloseModel: PropTypes.func.isRequired,
       
    
 }
 export default SignIn