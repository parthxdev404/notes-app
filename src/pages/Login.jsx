import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      alert("Invalid Email");
    } else {
      return navigate("/dashboard");
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();

    setEmail("");
    setPassword("");
  };

  return (
    <div className="flex items-center justify-center h-screen drop-shadow-md drop-shadow-amber-300">
      <div className="bg-white h-96 w-96 shadow-2xl ">
        <h1 className="text-4xl text-white font-medium text-center mt-4 drop-shadow-lg drop-shadow-amber-500 bg-yellow-600 mx-20 p-2">
          LOGIN
        </h1>
        <form
          onSubmit={(e) => submitHandler(e)}
          className="flex flex-col items-start justify-center mt-10 px-10 gap-1"
        >
          <h1 className="text-lg">Email Address</h1>
          <input
            value={email}
            required
            onChange={(e) => setEmail(e.target.value)}
            className="bg-yellow-500 text-lg p-2 w-full outline-none text-white placeholder:text-white"
            type="email"
            placeholder="Enter Your Email"
          />
          <h1 className="text-lg">Password</h1>
          <input
            value={password}
            required
            onChange={(e) => setPassword(e.target.value)}
            className="bg-yellow-500 text-lg p-2 w-full outline-none text-white placeholder:text-white"
            type="password"
            placeholder="Enter Your Password"
          />
          <button
            onClick={handleLogin}
            className="text-xl text-white text-center w-full mt-2 p-2 bg-amber-500"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
