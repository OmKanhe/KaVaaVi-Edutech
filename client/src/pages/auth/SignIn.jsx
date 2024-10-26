import React, { useEffect, useState } from "react";
import axios from "axios";
import image from "../../assets/Nerd-bro.svg"
import { Link, useNavigate } from "react-router-dom";
import { Button, TextField } from "@mui/material";
import toast from "react-hot-toast";

function SignIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    if (localStorage.getItem('emailId')) {
      navigate("/candidate/form");
    }
  }, [navigate]);

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    const loginCredentials = {
      email: email,
      password: password,
    };
    try {
      const response = await axios.post(
        "http://localhost/kavaavi/api/login.php",
        loginCredentials,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true
        }
      );
      const data = response.data;

      if (data.status === "error") {
        toast(data.message, {
          style: { backgroundColor: "red", color: "white" },
        });
      } else {
        toast(data.message, { style: { backgroundColor: 'green', color: 'white' } });
        localStorage.setItem("emailId", email);
        console.log("Navigating to /candidate/form");
        navigate("/candidate/form");
      }
    } catch (error) {
      console.error("Error details:", error.response || error.message || error);
    }
  };
  return (
    <>
      <div className="h-[91vh] flex justify-around">
        <form
          onSubmit={handleLoginSubmit}
          className="px-6 sm:p-0 flex flex-col justify-center"
        >
          <div className="flex flex-col space-y-10">
            <h1 className="text-3xl font-medium text-slate-700">
              Login to{" "}
              <span className="text-[#FC7F07] text-4xl font-Montserrat">
                KaVaaVi EduTech!
              </span>
            </h1>
            <p className="text-center font-md text-slate-700">
              Please enter your credentials to access your account.{" "}
            </p>
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <TextField
              id="outlined-basic"
              label="Password"
              type="password"
              variant="outlined"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <Button
              style={{
                background: "#FC7F07",
                height: "50px",
                fontSize: "23px",
                fontWeight: "500",
                fontFamily: "inherit",
              }}
              variant="contained"
              type="submit"
            >
              LOGIN
            </Button>
            <Link to="/sign-up" className="text-md underline">
              Create an account
            </Link>
          </div>
        </form>
        <div className="hidden sm:flex bg-[#FFE4CC] my-8 rounded-2xl sm:bg-none">
          <img src={image} alt="" />
        </div>
      </div>
    </>
  );
}

export default SignIn;
