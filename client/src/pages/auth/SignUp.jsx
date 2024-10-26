// import React, { useState } from "react";
// import image from "../../assets/Nerd-rafiki.svg";
// import { Button, Input, TextField, Typography } from "@mui/material";
// import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
// import toast from "react-hot-toast";

// function SignUp() {
//   const navigate = useNavigate();

//   const [registerCredentials, setRegisterCredentials] = useState({
//     username: "",
//     email: "",
//     mobile: "",
//     password: "",
//     image: null,
//   });

//   // const [imagePreview, setImagePreview] = useState(null);  // To store the preview URL
//   const [imageUploaded, setImageUploaded] = useState(false);  // To show upload status

//   const handleChanges = (e) => {
//     const { name, value, files } = e.target;

//     if (name === "image") {
//       const file = files[0];
//       setRegisterCredentials((prevState) => ({
//         ...prevState,
//         image: file,  // Handle the file input
//       }));

//       // Set the preview URL for the image
//       setImagePreview(URL.createObjectURL(file));
//       setImageUploaded(true);  // Indicate image is uploaded
//     } else {
//       setRegisterCredentials((prevState) => ({
//         ...prevState,
//         [name]: value,
//       }));
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append("username", registerCredentials.username);
//     formData.append("email", registerCredentials.email);
//     formData.append("mobile", registerCredentials.mobile);
//     formData.append("password", registerCredentials.password);
//     formData.append("image", registerCredentials.image);

//     try {
//       const response = await axios.post(
//         "http://localhost/kavaavi/api/register.php",
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//         }
//       );
//       console.log(response.data);
//     } catch (error) {
//       console.error(error);
//     }
//   };
//   return (
//     <div className="h-[91vh] flex justify-around">
//       <form
//         onSubmit={handleSubmit}
//         className="px-6 sm:p-0 flex flex-col justify-center"
//       >
//         <div className="flex flex-col space-y-10">
//           <h1 className="text-3xl font-medium text-slate-700 text-center">
//             Create your account in <br />
//             <span className="text-[#FC7F07] text-4xl font-Montserrat">
//               KaVaaVi EduTech!
//             </span>
//           </h1>
//           <p className="text-center font-md text-slate-700">
//             Please enter your credentials to create an account.{" "}
//           </p>
//           <TextField
//             id="outlined-basic"
//             label="Full Name"
//             variant="outlined"
//             name="username"
//             value={registerCredentials.username}
//             onChange={handleChanges}
//             required
//           />
//           <TextField
//             id="outlined-basic"
//             label="Email"
//             variant="outlined"
//             name="email"
//             value={registerCredentials.email}
//             onChange={handleChanges}
//             required
//           />
//           <TextField
//             id="outlined-basic"
//             label="Mobile number"
//             variant="outlined"
//             name="mobile"
//             value={registerCredentials.mobile}
//             onChange={handleChanges}
//             required
//           />
//           {/* Hidden input for file */}
//           <input
//             accept="image/*"
//             id="upload-image"
//             type="file"
//             name="image"
//             style={{ display: "none" }}
//             onChange={handleChanges}
//           />

//           {/* Button to trigger file input */}
//           <label htmlFor="upload-image">
//             <Button variant="contained" color="primary" component="span">
//               Upload Image
//             </Button>
//           </label>

//            {/* Display image preview or message */}
//         {imageUploaded ? (
//           <Typography variant="body1" color="green">
//             Image Uploaded Successfully!
//           </Typography>
//         ) : (
//           <Typography variant="body2" color="textSecondary">
//             No image uploaded yet
//           </Typography>
//         )}

//         {/* Image Preview
//         {imagePreview && (
//           <img
//             src={imagePreview}
//             alt="Image Preview"
//             style={{ width: "200px", height: "auto", marginTop: "10px" }}
//           />
//         )} */}

//           <TextField
//             id="outlined-basic"
//             label="Password"
//             type="password"
//             variant="outlined"
//             name="password"
//             value={registerCredentials.password}
//             onChange={handleChanges}
//             required
//           />
//           <Button
//             style={{
//               background: "#FC7F07",
//               height: "50px",
//               fontSize: "23px",
//               fontWeight: "500",
//               fontFamily: "inherit",
//             }}
//             variant="contained"
//             type="submit"
//           >
//             Register
//           </Button>
//           <Link to="/sign-in" className="text-md underline">
//             Already have an account
//           </Link>
//         </div>
//       </form>
//       <div className="hidden sm:flex bg-[#FFE4CC] my-8 rounded-2xl sm:bg-none">
//         <img src={image} alt="" />
//       </div>
//     </div>
//   );
// }

// export default SignUp;


import React, { useEffect, useState } from "react";
import image from "../../assets/Nerd-rafiki.svg";
import { Button, TextField, Typography } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import toast from "react-hot-toast";
import { CloudUploadIcon } from "lucide-react";

function SignUp() {
  const navigate = useNavigate();
  useEffect(() => {
    if(localStorage.getItem('emailId'))
      navigate("/candidate/form")
  },[])

  const [registerCredentials, setRegisterCredentials] = useState({
    username: "",
    email: "",
    mobile: "",
    password: "",
    image: null,
  });

  const [imagePreview, setImagePreview] = useState(null);
  const [imageUploaded, setImageUploaded] = useState(false);

  const handleChanges = (e) => {
    const { name, value, files } = e.target;

    if (name === "image") {
      const file = files[0];

      if (file) {
        setRegisterCredentials((prevState) => ({
          ...prevState,
          image: file,
        }));

        setImagePreview(URL.createObjectURL(file));
        setImageUploaded(true);
      } else {
        setImageUploaded(false);
      }
    } else {
      setRegisterCredentials((prevState) => ({
        ...prevState,
        [name]: value,
      }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!registerCredentials.image) {
      toast.error("Please upload an image.");
      return;
    }

    const formData = new FormData();
    formData.append("fullname", registerCredentials.username);
    formData.append("email", registerCredentials.email);
    formData.append("mobile", registerCredentials.mobile);
    formData.append("password", registerCredentials.password);
    formData.append("image", registerCredentials.image);

    try {
      const response = await axios.post(
        "http://localhost/kavaavi/api/register.php",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      )
      const data = response.data;
      if(data.status === "error"){
        toast(data.message,{style:{backgroundColor:'red', color:'white', width:'100%', height:'auto'}})
      }
      else{
        toast("Registration Successful! 🤘", {style:{backgroundColor:'green', color:'white'}})
        navigate("/sign-in")
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="min-h-full p-5 gap-12 flex flex-col lg:flex-row justify-around">
      <form
        onSubmit={handleSubmit}
        className="px-6 sm:p-12 flex flex-col basis-3/5 justify-center"
      >
        <div className="flex flex-col space-y-10">
          <h1 className="text-3xl font-medium text-slate-700 text-center">
            Create your account in <br />
            <span className="text-[#FC7F07] text-4xl font-Montserrat">
              KaVaaVi EduTech!
            </span>
          </h1>
          <p className="text-center font-md text-slate-700">
            Please enter your credentials to create an account.
          </p>

          {/* Full Name and Email - Display side by side on larger screens */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
            <TextField
              id="outlined-basic"
              label="Full Name"
              variant="outlined"
              name="username"
              value={registerCredentials.username}
              onChange={handleChanges}
              required
              fullWidth
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              name="email"
              value={registerCredentials.email}
              onChange={handleChanges}
              required
              fullWidth
            />
          </div>

          {/* Mobile Number and Password - Display side by side on larger screens */}
          <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
            <TextField
              id="outlined-basic"
              label="Mobile number"
              variant="outlined"
              name="mobile"
              value={registerCredentials.mobile}
              onChange={handleChanges}
              required
              fullWidth
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
              fullWidth
            />
          </div>

          {/* Hidden input for file */}
          <input
            accept="image/*"
            id="upload-image"
            type="file"
            name="image"
            style={{ display: "none" }}
            onChange={handleChanges}
          />

          {/* Button to trigger file input */}
          <label htmlFor="upload-image">
            <Button variant="contained" style={{backgroundColor:"#FC7F07", fontSize:'16px'}} color="primary" component="span"  startIcon={<CloudUploadIcon />}>
              Upload Profile Image
            </Button>
          </label>

          {/* Display image preview or message */}
          {imageUploaded ? (
            <Typography variant="body1" color="green">
              Image Uploaded Successfully!
            </Typography>
          ) : (
            <Typography variant="body2" color="textSecondary">
              No image uploaded yet
            </Typography>
          )}

          {/* Image Preview */}
          {/* {imagePreview && (
            <img
              src={imagePreview}
              alt="Image Preview"
              style={{ width: "200px", height: "auto", marginTop: "10px" }}
            />
          )} */}

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
      <div className="hidden sm:flex bg-[#FFE4CC] basis-2/5 my-8 mr-12 rounded-2xl sm:bg-none">
        <img src={image} alt="" />
      </div>
    </div>
  );
}

export default SignUp;



