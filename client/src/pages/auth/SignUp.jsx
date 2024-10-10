import React, { useState } from "react";
import image from "../../assets/Nerd-rafiki.svg";
import { Button, TextField } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from 'react-hot-toast'

function SignUp() {

  const navigate = useNavigate();

  const [registerCredentials, setRegisterCredentials] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
  });

  const handleChanges = (e) => {
    const { name, value } = e.target;
    setRegisterCredentials((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost/kavaavi/api/register.php",
        registerCredentials, {
          withCredentials: true
        }
      );
      const data = response.data;
      console.log(data);
      
      if(data.status === 'error'){
       toast(data.message,{style:{backgroundColor:'red', color:'white'}})
      }
      else{
        toast(data.message, {style:{backgroundColor:'green', color:'white'}})
        navigate("/sign-in")
      }
      
    } catch (err) {
      console.log(console.error(err));
    }
  };
  return (
    <div className="h-[91vh] flex justify-around">
      <form
        onSubmit={handleSubmit}
        className="px-6 sm:p-0 flex flex-col justify-center"
      >
        <div className="flex flex-col space-y-10">
          <h1 className="text-3xl font-medium text-slate-700 text-center">
            Create your account in <br />
            <span className="text-[#FC7F07] text-4xl font-Montserrat">
              KaVaaVi EduTech!
            </span>
          </h1>
          <p className="text-center font-md text-slate-700">
            Please enter your credentials to create an account.{" "}
          </p>
          <TextField
            id="outlined-basic"
            label="Full Name"
            variant="outlined"
            name="username"
            value={registerCredentials.username}
            onChange={handleChanges}
            required
          />
          <TextField
            id="outlined-basic"
            label="Email"
            variant="outlined"
            name="email"
            value={registerCredentials.email}
            onChange={handleChanges}
            required
          />
          <TextField
            id="outlined-basic"
            label="Mobile number"
            variant="outlined"
            name="mobile"
            value={registerCredentials.mobile}
            onChange={handleChanges}
            required
          />
          <TextField
            id="outlined-basic"
            label="Password"
            type="password"
            variant="outlined"
            name="password"
            value={registerCredentials.password}
            onChange={handleChanges}
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
            Register
          </Button>
          <Link to="/sign-in" className="text-md underline">
            Already have an account
          </Link>
        </div>
      </form>
      <div className="hidden sm:flex bg-[#FFE4CC] my-8 rounded-2xl sm:bg-none">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default SignUp;
