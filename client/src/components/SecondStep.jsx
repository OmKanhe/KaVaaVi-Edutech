// import React, { useState, useEffect } from "react";
// import {
//   TextField,
//   MenuItem,
//   Typography,
//   FormControl,
//   FormLabel,
//   RadioGroup,
//   FormControlLabel,
//   Radio,
// } from "@mui/material";

// function SecondStep({ formData, handleChange }) {
//   const [qualificationLevel, setQualificationLevel] = useState("");

//   useEffect(() => {
//     setQualificationLevel(formData.highestQualification);
//   }, [formData.highestQualification]);

//   const handleQualificationChange = (e) => {
//     const { value } = e.target;
//     setQualificationLevel(value);
//     handleChange(e);
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#FFFAF5]">
//       <div className="w-full max-w-7xl bg-white p-8 px-14 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold tracking-wide mb-10 text-center text-[#FF7C00]">
//           Educational Details
//         </h2>
//         <form className="space-y-14">
//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-16">
//             <TextField
//               label="Highest Qualification"
//               name="highestQualification"
//               value={formData.highestQualification}
//               onChange={handleQualificationChange}
//               select
//               variant="outlined"
//               required
//             >
//               <MenuItem value="ssc">SSC</MenuItem>
//               <MenuItem value="hsc">HSC</MenuItem>
//               <MenuItem value="graduation">Graduation</MenuItem>
//               <MenuItem value="post-graduation">Post-Graduation</MenuItem>
//               <MenuItem value="phd">PhD</MenuItem>
//             </TextField>

//             {(qualificationLevel === "ssc" ||
//               qualificationLevel === "hsc" ||
//               qualificationLevel === "graduation" ||
//               qualificationLevel === "post-graduation" ||
//               qualificationLevel === "phd") && (
//               <>
//                 <Typography variant="h6" className="col-span-2 text-[#FF7C00]">
//                   School Details
//                 </Typography>
//                 <TextField
//                   label="School Name"
//                   name="schoolName"
//                   value={formData.schoolName}
//                   onChange={handleChange}
//                   variant="outlined"
//                   required
//                 />
//                 <TextField
//                   label="Board Name"
//                   name="boardName"
//                   value={formData.boardName}
//                   onChange={handleChange}
//                   variant="outlined"
//                   required
//                 />
//                 <TextField
//                   label="Marks Obtained"
//                   name="schoolMarks"
//                   value={formData.schoolMarks}
//                   onChange={handleChange}
//                   variant="outlined"
//                   required
//                 />

//                 {(qualificationLevel === "hsc" ||
//                   qualificationLevel === "graduation" ||
//                   qualificationLevel === "post-graduation" ||
//                   qualificationLevel === "phd") && (
//                   <>
//                     <Typography
//                       variant="h6"
//                       className="col-span-2 text-[#FF7C00] mt-8"
//                     >
//                       HSC Details
//                     </Typography>
//                     <TextField
//                       label="College Name"
//                       name="collegeName"
//                       value={formData.collegeName}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                     <FormControl component="fieldset" className="w-full">
//                       <FormLabel component="legend" className="mb-2">
//                         Stream
//                       </FormLabel>
//                       <RadioGroup
//                         row
//                         name="stream"
//                         value={formData.stream}
//                         onChange={handleChange}
//                       >
//                         <FormControlLabel
//                           value="arts"
//                           control={<Radio />}
//                           label="Arts"
//                         />
//                         <FormControlLabel
//                           value="science"
//                           control={<Radio />}
//                           label="Science"
//                         />
//                         <FormControlLabel
//                           value="commerce"
//                           control={<Radio />}
//                           label="Commerce"
//                         />
//                       </RadioGroup>
//                     </FormControl>
//                     <TextField
//                       label="Board Name"
//                       name="collegeBoardName"
//                       value={formData.collegeBoardName}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                     <TextField
//                       label="Marks Obtained"
//                       name="collegeMarks"
//                       value={formData.collegeMarks}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                   </>
//                 )}

//                 {(qualificationLevel === "graduation" ||
//                   qualificationLevel === "post-graduation" ||
//                   qualificationLevel === "phd") && (
//                   <>
//                     <Typography
//                       variant="h6"
//                       className="col-span-2 text-[#FF7C00] mt-8"
//                     >
//                       College Details
//                     </Typography>
//                     <TextField
//                       label="College Name"
//                       name="universityCollegeName"
//                       value={formData.universityCollegeName}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                     <TextField
//                       label="University Name"
//                       name="universityName"
//                       value={formData.universityName}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                     <TextField
//                       label="Course Name"
//                       name="courseName"
//                       value={formData.courseName}
//                       onChange={handleChange}
//                       select
//                       variant="outlined"
//                       required
//                     >
//                       <MenuItem value="b-tech">
//                         B.Tech (Bachelor of Technology)
//                       </MenuItem>
//                       <MenuItem value="b-e">
//                         B.E (Bachelor of Engineering)
//                       </MenuItem>
//                       <MenuItem value="bca">
//                         BCA (Bachelor of Computer Applications)
//                       </MenuItem>
//                       <MenuItem value="bsc">
//                         B.Sc (Bachelor of Science)
//                       </MenuItem>
//                       <MenuItem value="ba">BA (Bachelor of Arts)</MenuItem>
//                       <MenuItem value="bcom">
//                         B.Com (Bachelor of Commerce)
//                       </MenuItem>
//                     </TextField>
//                     <TextField
//                       label="Specialization"
//                       name="specialization"
//                       value={formData.specialization}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                     <TextField
//                       label="Starting Year"
//                       name="startingYear"
//                       type="number"
//                       value={formData.startingYear}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                     <TextField
//                       label="Graduation Year"
//                       name="graduationYear"
//                       type="number"
//                       value={formData.graduationYear}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                     <TextField
//                       label="CGPA Obtained"
//                       name="cgpa"
//                       value={formData.cgpa}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                   </>
//                 )}

//                 {(qualificationLevel === "post-graduation" ||
//                   qualificationLevel === "phd") && (
//                   <>
//                     <Typography
//                       variant="h6"
//                       className="col-span-2 text-[#FF7C00] mt-8"
//                     >
//                       Post-Graduation Details
//                     </Typography>
//                     <TextField
//                       label="Post-Graduation College Name"
//                       name="postGradCollegeName"
//                       value={formData.postGradCollegeName}
//                       onChange={handleChange}
//                       variant="outlined"
//                     />
//                     <TextField
//                       label="Course Name"
//                       name="postGradCourseName"
//                       value={formData.postGradCourseName}
//                       onChange={handleChange}
//                       variant="outlined"
//                     />
//                     <TextField
//                       label="University Name"
//                       name="postGradUniversityName"
//                       value={formData.postGradUniversityName}
//                       onChange={handleChange}
//                       variant="outlined"
//                     />
//                     <TextField
//                       label="Start Year"
//                       name="postGradStartDate"
//                       type="number"
//                       value={formData.postGradStartDate}
//                       onChange={handleChange}
//                       variant="outlined"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                     <TextField
//                       label="End Year"
//                       name="postGradEndDate"
//                       type="number"
//                       value={formData.postGradEndDate}
//                       onChange={handleChange}
//                       variant="outlined"
//                       InputLabelProps={{ shrink: true }}
//                     />
//                   </>
//                 )}

//                 {qualificationLevel === "phd" && (
//                   <>
//                     <Typography
//                       variant="h6"
//                       className="col-span-2 text-[#FF7C00] mt-8"
//                     >
//                       PhD Details
//                     </Typography>
//                     <TextField
//                       label="PhD Course Name"
//                       name="phdCourseName"
//                       value={formData.phdCourseName}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                     <TextField
//                       label="PhD Number"
//                       name="phdNumber"
//                       value={formData.phdNumber}
//                       onChange={handleChange}
//                       variant="outlined"
//                       required
//                     />
//                   </>
//                 )}
//               </>
//             )}
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default SecondStep;


import React, { useState, useEffect } from "react";
import {
  TextField,
  MenuItem,
  Typography,
  FormControl,
  FormLabel,
  RadioGroup,
  FormControlLabel,
  Radio,
} from "@mui/material";

function SecondStep({ formData, handleChange }) {
  const [qualificationLevel, setQualificationLevel] = useState("");

  useEffect(() => {
    setQualificationLevel(formData.highestQualification);
  }, [formData.highestQualification]);

  const handleQualificationChange = (e) => {
    const { value } = e.target;
    setQualificationLevel(value);
    handleChange(e);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFAF5]">
      <div className="w-full max-w-7xl bg-white p-8 px-14 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold tracking-wide mb-10 text-center text-[#FF7C00]">
          Educational Details
        </h2>
        <div className="text-center pb-10">
          <Typography variant="body1" style={{ color: "#e7ae79", textAlign: 'center' }}>
            Please provide your educational information below. This information is required to proceed with your application. <br />
            <span className="text-[#FF7C00] text-2xl"> * </span>marked details are mandatory.
          </Typography>
        </div>
        <form className="space-y-14">
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            <TextField
              label="Highest Qualification"
              name="highestQualification"
              value={formData.highestQualification}
              onChange={handleQualificationChange}
              select
              variant="outlined"
              required
              fullWidth
            >
              <MenuItem value="ssc">SSC</MenuItem>
              <MenuItem value="hsc">HSC</MenuItem>
              <MenuItem value="graduation">Graduation</MenuItem>
              <MenuItem value="post-graduation">Post-Graduation</MenuItem>
              <MenuItem value="phd">PhD</MenuItem>
            </TextField>

            {(qualificationLevel === "ssc" ||
              qualificationLevel === "hsc" ||
              qualificationLevel === "graduation" ||
              qualificationLevel === "post-graduation" ||
              qualificationLevel === "phd") && (
              <>
                <Typography
                  variant="h6"
                  className="col-span-1 md:col-span-2 text-[#FF7C00]"
                >
                  School Details
                </Typography>
                <TextField
                  label="School Name"
                  name="schoolName"
                  value={formData.schoolName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="Board Name"
                  name="boardName"
                  value={formData.boardName}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />
                <TextField
                  label="Marks Obtained"
                  name="schoolMarks"
                  value={formData.schoolMarks}
                  onChange={handleChange}
                  variant="outlined"
                  fullWidth
                />

                {(qualificationLevel === "hsc" ||
                  qualificationLevel === "graduation" ||
                  qualificationLevel === "post-graduation" ||
                  qualificationLevel === "phd") && (
                  <>
                    <Typography
                      variant="h6"
                      className="col-span-1 md:col-span-2 text-[#FF7C00] mt-8"
                    >
                      HSC Details
                    </Typography>
                    <TextField
                      label="College Name"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                    <FormControl component="fieldset" className="w-full">
                      <FormLabel component="legend" className="">
                        Stream
                      </FormLabel>
                      <RadioGroup
                        row
                        name="stream"
                        value={formData.stream}
                        onChange={handleChange}
                      >
                        <FormControlLabel
                          value="arts"
                          control={<Radio />}
                          label="Arts"
                        />
                        <FormControlLabel
                          value="science"
                          control={<Radio />}
                          label="Science"
                        />
                        <FormControlLabel
                          value="commerce"
                          control={<Radio />}
                          label="Commerce"
                        />
                      </RadioGroup>
                    </FormControl>
                    <TextField
                      label="Board Name"
                      name="collegeBoardName"
                      value={formData.collegeBoardName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      label="Marks Obtained"
                      name="collegeMarks"
                      value={formData.collegeMarks}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                  </>
                )}

                {(qualificationLevel === "graduation" ||
                  qualificationLevel === "post-graduation" ||
                  qualificationLevel === "phd") && (
                  <>
                    <Typography
                      variant="h6"
                      className="col-span-1 md:col-span-2 text-[#FF7C00] mt-8"
                    >
                      College Details
                    </Typography>
                    <TextField
                      label="College Name"
                      name="universityCollegeName"
                      value={formData.universityCollegeName}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                    <TextField
                      label="University Name"
                      name="universityName"
                      value={formData.universityName}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                    <TextField
                      label="Course Name"
                      name="courseName"
                      value={formData.courseName}
                      onChange={handleChange}
                      select
                      variant="outlined"
                      required
                      fullWidth
                    >
                      <MenuItem value="b-tech">
                        B.Tech (Bachelor of Technology)
                      </MenuItem>
                      <MenuItem value="b-e">
                        B.E (Bachelor of Engineering)
                      </MenuItem>
                      <MenuItem value="bca">
                        BCA (Bachelor of Computer Applications)
                      </MenuItem>
                      <MenuItem value="bsc">
                        B.Sc (Bachelor of Science)
                      </MenuItem>
                      <MenuItem value="ba">BA (Bachelor of Arts)</MenuItem>
                      <MenuItem value="bcom">
                        B.Com (Bachelor of Commerce)
                      </MenuItem>
                    </TextField>
                    <TextField
                      label="Specialization"
                      name="specialization"
                      value={formData.specialization}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                    <TextField
                      label="Starting Year"
                      name="startingYear"
                      type="number"
                      value={formData.startingYear}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                    <TextField
                      label="Graduation Year"
                      name="graduationYear"
                      type="number"
                      value={formData.graduationYear}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                    <TextField
                      label="CGPA Obtained"
                      name="cgpa"
                      value={formData.cgpa}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </>
                )}

                {(qualificationLevel === "post-graduation" ||
                  qualificationLevel === "phd") && (
                  <>
                    <Typography
                      variant="h6"
                      className="col-span-1 md:col-span-2 text-[#FF7C00] mt-8"
                    >
                      Post-Graduation Details
                    </Typography>
                    <TextField
                      label="College Name"
                      name="postGradCollegeName"
                      value={formData.postGradCollegeName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      label="Course Name"
                      name="postGradCourseName"
                      value={formData.postGradCourseName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      label="University Name"
                      name="postGradUniversityName"
                      value={formData.postGradUniversityName}
                      onChange={handleChange}
                      variant="outlined"
                      fullWidth
                    />
                    <TextField
                      label="Start Year"
                      name="postGradStartDate"
                      type="number"
                      value={formData.postGradStartDate}
                      onChange={handleChange}
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                    <TextField
                      label="End Year"
                      name="postGradEndDate"
                      type="number"
                      value={formData.postGradEndDate}
                      onChange={handleChange}
                      variant="outlined"
                      InputLabelProps={{ shrink: true }}
                      fullWidth
                    />
                  </>
                )}

                {qualificationLevel === "phd" && (
                  <>
                    <Typography
                      variant="h6"
                      className="col-span-1 md:col-span-2 text-[#FF7C00] mt-8"
                    >
                      PhD Details
                    </Typography>
                    <TextField
                      label="PhD Course Name"
                      name="phdCourseName"
                      value={formData.phdCourseName}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                    <TextField
                      label="PhD Number"
                      name="phdNumber"
                      value={formData.phdNumber}
                      onChange={handleChange}
                      variant="outlined"
                      required
                      fullWidth
                    />
                  </>
                )}
              </>
            )}
          </div>
        </form>
      </div>
    </div>
  );
}

export default SecondStep;


