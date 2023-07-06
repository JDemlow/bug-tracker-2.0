import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { UserAuth } from "./context/AuthContext";
import bug from "../assets/bug-1.png";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isModalOpen, setModalOpen] = useState(false);
  const [errorType, setErrorType] = useState(""); // New state for error type
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const openModal = (type) => {
    setErrorType(type);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/employees");
    } catch (e) {
      setError(e.message);
      openModal(e.code); // Pass the error code as the error type
      console.log(e.message);
    }
  };

  const buttonWidth = `${Math.max(email.length, password.length) * 10 + 100}px`;

  return (
    <div className="mx-auto my-16 h-screen w-screen max-w-[700px] p-4">
      <div className="flex justify-center">
        <h1 className="py-2 text-4xl font-bold">Aviaf Issue Tracker</h1>
      </div>
      <div className="mb-5 flex items-center justify-center">
        <img src={bug} alt="" className="h-72 w-72" />
      </div>
      <div className="flex justify-center">
        <h2 className="py-2 text-2xl font-bold">Log in to your account</h2>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Email Address</label>
          <input
            onChange={(e) => setEmail(e.target.value)}
            className="border p-3"
            type="email"
            placeholder="For demo: type admin@admin.com"
          />
        </div>
        <div className="flex flex-col py-2">
          <label className="py-2 font-medium">Password</label>
          <input
            onChange={(e) => setPassword(e.target.value)}
            className="border p-3"
            type="password"
            placeholder="For demo: type password"
          />
        </div>

        <button className="m-4 mx-auto block w-full rounded bg-[#284B63] px-4 py-3 font-bold text-white hover:bg-[#353535] focus:outline-none">
          Log In
        </button>
      </form>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          <div className="rounded-lg bg-white p-4 shadow-lg">
            <h2 className="text-xl font-bold">Please enter you credentials</h2>
            {errorType === "auth/user-not-found" && (
              <p>Invalid email address. Please try again.</p>
            )}
            {errorType === "auth/wrong-password" && (
              <p>Invalid password. Please try again.</p>
            )}
            {errorType === "auth/user-not-found,auth/wrong-password" && (
              <p>Invalid email address and password. Please try again.</p>
            )}
            <button
              className="mt-4 rounded bg-slate-400 px-4 py-2 font-bold text-white hover:bg-[#353535]"
              onClick={closeModal}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Signin;
