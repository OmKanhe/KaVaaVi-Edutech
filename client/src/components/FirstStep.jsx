// import React, { useState, useEffect } from "react";
// import TextField from "@mui/material/TextField";
// import {
//   FormControl,
//   FormControlLabel,
//   FormLabel,
//   Radio,
//   RadioGroup,
//   Typography,
//   MenuItem,
//   Select,
//   InputLabel,
// } from "@mui/material";
// import { Country, State, City } from "country-state-city";

// const FirstStep = ({ formData, handleChange }) => {
//   const [countries, setCountries] = useState([]);
//   const [states, setStates] = useState([]);
//   const [cities, setCities] = useState([]);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(formData);
//   };

//   useEffect(() => {
//     const countriesData = Country.getAllCountries();
//     setCountries(countriesData);
//   }, []);

//   const handleCountryChange = (e) => {
//     const selectedCountry = e.target.value;
//     const statesData = State.getStatesOfCountry(selectedCountry);
//     setStates(statesData);
//     handleChange(e); // Update the form data
//   };

//   const handleStateChange = (e) => {
//     const selectedState = e.target.value;
//     const citiesData = City.getCitiesOfState(formData.country, selectedState);
//     setCities(citiesData);
//     handleChange(e); // Update the form data
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#FFFAF5]">
//       <div className="w-full max-w-7xl bg-white p-8 px-14 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold tracking-wide mb-4 text-center text-[#FF7C00]">
//           Personal Details
//         </h2>
//         <div className="text-center pb-10">
//           <Typography variant="body1" style={{ color: "#e7ae79" }}>
//             Please provide your personal information below. This information is required to proceed with your application. <br />
//             <span className="text-[#FF7C00] text-xl"> * </span>marked details are mandatory.
//           </Typography>
//         </div>
//         <form onSubmit={handleSubmit} className="space-y-2">
//           {/* Personal Information Section */}
//           <div className="pb-4">
//             <Typography variant="h6" style={{ color: "#FF7C00" }}>
//               Personal Information
//             </Typography>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//             <TextField
//               label="First Name"
//               name="firstName"
//               value={formData.firstName}
//               onChange={handleChange}
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Last Name"
//               name="lastName"
//               value={formData.lastName}
//               onChange={handleChange}
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Date of Birth"
//               name="dateOfBirth"
//               type="date"
//               value={formData.dateOfBirth}
//               onChange={handleChange}
//               variant="outlined"
//               required
//               InputLabelProps={{ shrink: true }}
//             />
//             <TextField
//               label="Father's Name"
//               name="fatherName"
//               value={formData.fatherName}
//               onChange={handleChange}
//               variant="outlined"
//             />
//             <TextField
//               label="Mother's Name"
//               name="motherName"
//               value={formData.motherName}
//               onChange={handleChange}
//               variant="outlined"
//             />
//             <FormControl component="fieldset" className="w-full">
//               <FormLabel component="legend">
//                 Gender *
//               </FormLabel>
//               <RadioGroup
//                 row
//                 name="gender"
//                 value={formData.gender}
//                 onChange={handleChange}
//               >
//                 <FormControlLabel
//                   value="male"
//                   control={<Radio />}
//                   label="Male"
//                 />
//                 <FormControlLabel
//                   value="female"
//                   control={<Radio />}
//                   label="Female"
//                 />
//                 <FormControlLabel
//                   value="other"
//                   control={<Radio />}
//                   label="Other"
//                 />
//               </RadioGroup>
//             </FormControl>
//           </div>
          
//           {/* Contact Information Section */}
//           <div className="pt-10 pb-4">
//             <Typography variant="h6" style={{ color: "#FF7C00" }}>
//               Contact Information
//             </Typography>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//             <TextField
//               label="Email ID"
//               name="emailId"
//               type="email"
//               value={formData.emailId}
//               onChange={handleChange}
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Phone Number"
//               name="phoneNumber"
//               type="tel"
//               value={formData.phoneNumber}
//               onChange={handleChange}
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Alternate Phone Number"
//               name="alternateNumber"
//               type="tel"
//               value={formData.alternateNumber}
//               onChange={handleChange}
//               variant="outlined"
//             />
//           </div>

//           {/* Address Details Section */}
//           <div className="pt-10 pb-4">
//             <Typography variant="h6" style={{ color: "#FF7C00" }}>
//               Address Details
//             </Typography>
//           </div>
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
//             <FormControl variant="outlined" fullWidth required>
//               <InputLabel>Country</InputLabel>
//               <Select
//                 name="country"
//                 value={formData.country}
//                 onChange={handleCountryChange}
//                 label="Country"
//               >
//                 {countries.map((country) => (
//                   <MenuItem key={country.isoCode} value={country.isoCode}>
//                     {country.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <FormControl variant="outlined" fullWidth required>
//               <InputLabel>State</InputLabel>
//               <Select
//                 name="state"
//                 value={formData.state}
//                 onChange={handleStateChange}
//                 label="State"
//                 disabled={!formData.country}
//               >
//                 {states.map((state) => (
//                   <MenuItem key={state.isoCode} value={state.isoCode}>
//                     {state.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <FormControl variant="outlined" fullWidth required>
//               <InputLabel>City</InputLabel>
//               <Select
//                 name="city"
//                 value={formData.city}
//                 onChange={handleChange}
//                 label="City"
//                 disabled={!formData.state}
//               >
//                 {cities.map((city) => (
//                   <MenuItem key={city.name} value={city.name}>
//                     {city.name}
//                   </MenuItem>
//                 ))}
//               </Select>
//             </FormControl>
//             <TextField
//               label="Address Line"
//               name="address"
//               value={formData.address}
//               onChange={handleChange}
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="Landmark"
//               name="landmark"
//               value={formData.landmark}
//               onChange={handleChange}
//               variant="outlined"
//             />
//             <TextField
//               label="ZIP Code"
//               name="zipCode"
//               value={formData.zipCode}
//               onChange={handleChange}
//               variant="outlined"
//               required
//             />
//             <TextField
//               label="District"
//               name="district"
//               value={formData.district}
//               onChange={handleChange}
//               variant="outlined"
//             />
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default FirstStep;




import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import {
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  Typography,
  MenuItem,
  Select,
  InputLabel,
} from "@mui/material";
import { Country, State, City } from "country-state-city";

const FirstStep = ({ formData, handleChange }) => {
  const [countries, setCountries] = useState([]);
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  useEffect(() => {
    const countriesData = Country.getAllCountries();
    setCountries(countriesData);
  }, []);

  const handleCountryChange = (e) => {
    const selectedCountry = e.target.value;
    const statesData = State.getStatesOfCountry(selectedCountry);
    setStates(statesData);
    setCities([]); // Clear cities when the country changes
    handleChange(e); // Update the form data
  };

  const handleStateChange = (e) => {
    const selectedState = e.target.value;
    const citiesData = City.getCitiesOfState(formData.country, selectedState);
    setCities(citiesData);
    handleChange(e); // Update the form data
  };

  const menuProps = {
    PaperProps: {
      style: {
        maxHeight: 48 * 8 + 8, // Approx. 8 items
      },
    },
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFAF5]">
      <div className="w-full max-w-7xl bg-white p-8 px-14 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold tracking-wide mb-4 text-center text-[#FF7C00]">
          Personal Details
        </h2>
        <div className="text-center pb-10">
          <Typography variant="body1" style={{ color: "#e7ae79", textAlign: 'center' }}>
            Please provide your personal information below. This information is required to proceed with your application. <br />
            <span className="text-[#FF7C00] text-2xl"> * </span>marked details are mandatory.
          </Typography>
        </div>
        <form onSubmit={handleSubmit} className="space-y-2">
          {/* Personal Information Section */}
          <div className="pb-4">
            <Typography variant="h6" style={{ color: "#FF7C00" }}>
              Personal Information
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
            <TextField
              label="First Name"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Last Name"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Date of Birth"
              name="dateOfBirth"
              type="date"
              value={formData.dateOfBirth}
              onChange={handleChange}
              variant="outlined"
              required
              InputLabelProps={{ shrink: true }}
            />
             <FormControl component="fieldset" className="w-full">
              <FormLabel component="legend">
                Gender *
              </FormLabel>
              <RadioGroup
                row
                name="gender"
                value={formData.gender}
                onChange={handleChange}
              >
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="other"
                  control={<Radio />}
                  label="Other"
                />
              </RadioGroup>
            </FormControl>
            <TextField
              label="Father's Name"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="Mother's Name"
              name="motherName"
              value={formData.motherName}
              onChange={handleChange}
              variant="outlined"
            />
           
          </div>
          
          {/* Contact Information Section */}
          <div className="pt-10 pb-4">
            <Typography variant="h6" style={{ color: "#FF7C00" }}>
              Contact Information
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <TextField
              label="Email ID"
              name="emailId"
              type="email"
              value={formData.emailId}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Phone Number"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Alternate Phone Number"
              name="alternateNumber"
              type="tel"
              value={formData.alternateNumber}
              onChange={handleChange}
              variant="outlined"
            />
          </div>

          {/* Address Details Section */}
          <div className="pt-10 pb-4">
            <Typography variant="h6" style={{ color: "#FF7C00" }}>
              Address Details
            </Typography>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>Country</InputLabel>
              <Select
                name="country"
                value={formData.country}
                onChange={handleCountryChange}
                label="Country"
                MenuProps={menuProps}
              >
                {countries.map((country) => (
                  <MenuItem key={country.isoCode} value={country.isoCode}>
                    {country.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>State</InputLabel>
              <Select
                name="state"
                value={formData.state}
                onChange={handleStateChange}
                label="State"
                disabled={!formData.country}
                MenuProps={menuProps}
              >
                {states.map((state) => (
                  <MenuItem key={state.isoCode} value={state.isoCode}>
                    {state.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <FormControl variant="outlined" fullWidth required>
              <InputLabel>City</InputLabel>
              <Select
                name="city"
                value={formData.city}
                onChange={handleChange}
                label="City"
                disabled={!formData.state}
                MenuProps={menuProps}
              >
                {cities.map((city) => (
                  <MenuItem key={city.name} value={city.name}>
                    {city.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <TextField
              label="Address Line"
              name="address"
              value={formData.address}
              onChange={handleChange}
              variant="outlined"
              required
            />
            <TextField
              label="Landmark"
              name="landmark"
              value={formData.landmark}
              onChange={handleChange}
              variant="outlined"
            />
            <TextField
              label="ZIP Code"
              name="zipCode"
              value={formData.zipCode}
              onChange={handleChange}
              variant="outlined"
              required
              inputProps={{ maxLength: 6 }}
            />
            <TextField
              label="District"
              name="district"
              value={formData.district}
              onChange={handleChange}
              variant="outlined"
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default FirstStep;
