import React from "react";

const Login = () => {
  return (
        <section className="h-screen flex flex-col md:flex-row justify-center space-y-10 md:space-y-0          md:space-x-16 items-center my-2 mx-5 md:mx-0 md:my-0" >
        <div className="md:w-1/3 max-w-sm">
            <img
            src="https://img.freepik.com/free-vector/isometric-colored-parking-composition-with-two-properly-parked-cars-standing-roadside-parking-lot_1284-63164.jpg?t=st=1713630477~exp=1713634077~hmac=e27d2b3e316a3a924aee8aaa2229d344bafbe56f5a73ade30327c8d068c56e43&w=740"
            alt="Sample image"
            />
        </div>
        <div className="md:w-1/3 max-w-sm">
            <div className="text-center mb-10 md:text-left">
            <label className="mr-1 font-bold text-3xl">Login For Admin</label>
            </div>
        
            <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded"
            type="text"
            placeholder="Email Address"
            />
            <input
            className="text-sm w-full px-4 py-2 border border-solid border-gray-300 rounded mt-4"
            type="password"
            placeholder="Password"
            />
            <div className="mt-4 flex justify-between font-semibold text-sm">
            <label className="flex text-slate-500 hover:text-slate-600 cursor-pointer">
                <input className="mr-1" type="checkbox" />
                <span>Remember Me</span>
            </label>
            <a
                className="text-blue-600 hover:text-blue-700 hover:underline hover:underline-offset-4"
                href="#"
            >
                Forgot Password?
            </a>
            </div>
            <div className="text-center md:text-left">
            <button
                className="mt-4 bg-blue-600 hover:bg-blue-700 px-4 py-2 text-white uppercase rounded text-xs tracking-wider"
                type="submit"
            >
                Login
            </button>
            </div>
            <div className="mt-4 font-semibold text-sm text-slate-500 text-center md:text-left">
            <a
                className="text-red-600 hover:underline hover:underline-offset-4"
                href="#"
            >
            
            </a>
            </div>
        </div>
        </section>
    
  );
};

export default Login;
