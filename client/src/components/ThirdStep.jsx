import React from 'react';
import { TextField, Typography, Button, Grid } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function ThirdStep({ formData, handleChange, handleChangeProfessionalDetails, handleAddEntry, handleRemoveEntry }) {

  const handleRemove = (section) => {
    handleRemoveEntry(section);
  };

  
  return (
    <div className="flex justify-center items-center min-h-screen bg-[#FFFAF5]">
      <div className="w-full max-w-7xl bg-white p-8 px-14 rounded-xl shadow-lg">
        <h2 className="text-3xl font-bold tracking-wide mb-10 text-center text-[#FF7C00]">
          Professional Details
        </h2>
        <form className="space-y-14">
          {/* Activities Section */}
          <div className="space-y-8">
            <Typography  variant="h6"
                      className="col-span-1 md:col-span-2 text-[#FF7C00] mt-8">
              Curricular Details
            </Typography>
            <Typography className='text-gray-600'>
            To help us better understand your background, please provide the following information:
            </Typography>
            {formData.activities && formData?.activities?.map((activity, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Course Name"
                    name='activityName'
                    value={activity.activityName}
                    onChange={(event) => handleChangeProfessionalDetails(event, index, 'activities')}
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Rank/Position"
                    name='activityRank'
                    value={activity.activityRank}
                    onChange={(event) => handleChangeProfessionalDetails(event, index, 'activities')}
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
            ))}
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddEntry('activities')}
                >
                  Add Activity
                </Button>
              </Grid>
              {formData.activities.length > 0 && (
                <Grid item>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemove('activities')}
                    startIcon={<DeleteIcon />}
                  >
                    Remove
                  </Button>
                </Grid>
              )}
            </Grid>
          </div>

          {/* Internships Section */}
          <hr />
          <div className="space-y-8">
            <Typography  variant="h6"
                      className="col-span-1 md:col-span-2 text-[#FF7C00] mt-8 font-semibold">
              Internships Details
            </Typography>
            <Typography className='text-gray-600'>We want to know about your hands-on experience in the industry. Please provide the following details. Leave empty if not done any.</Typography>
            {formData.internships && formData?.internships?.map((internship, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Company Name"
                    name='companyName'
                    value={internship.companyName}
                    onChange={(event) => handleChangeProfessionalDetails(event, index, 'internships')}
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Position"
                    name='position'
                    value={internship.position}
                    onChange={(event) => handleChangeProfessionalDetails(event, index, 'internships')}
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Starting Date"
                    name={`internships[${index}].startingDate`}
                    type="date"
                    value={internship.startingDate}
                    onChange={(e) => handleChange(e, index, 'internships')}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Ending Date"
                    name={internship.endingDate || ''}
                    type="date"
                    value={internship.endingDate}
                    onChange={(event) => handleChangeProfessionalDetails(event, index, 'internships')}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
            ))}
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button
                  variant="contained"
                  color="primary"
                  onClick={() => handleAddEntry('internships')}
                >
                  Add Internship
                </Button>
              </Grid>
              {formData?.internships?.length > 0 && (
                <Grid item>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemove('internships')}
                    startIcon={<DeleteIcon />}
                  >
                    Remove 
                  </Button>
                </Grid>
              )}
            </Grid>
          </div>

          {/* Jobs Section */}
          <hr />
          <div className="space-y-8">
            <Typography  variant="h6"
                      className="col-span-1 md:col-span-2 text-[#FF7C00] mt-8">
              Job Details
            </Typography>
            <Typography className='text-gray-600'>Enter your job details you have done, if not leave it empty.</Typography>

            {formData.jobs && formData?.jobs?.map((job, index) => (
              <Grid container spacing={2} key={index}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Company Name"
                    name="companyName"
                    value={job.companyName || ''}
                    onChange={(event) => handleChangeProfessionalDetails(event, index, 'jobs')}
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Position"
                    name="position"
                    value={job.position || ''}  // Ensure value is properly bound
                    onChange={(event) => handleChangeProfessionalDetails(event, index, 'jobs')}
                    placeholder="Company Name"
                    variant="outlined"
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Starting Date"
                    name={`jobs[${index}][startingDate]`}
                    type="date"
                    value={job.startingDate}
                    onChange={(e) => handleChange(e, index, 'jobs')}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    label="Ending Date"
                    name={`jobs[${index}].endingDate`}
                    type="date"
                    value={job.endingDate}
                    onChange={(e) => handleChange(e, index, 'jobs')}
                    variant="outlined"
                    InputLabelProps={{ shrink: true }}
                    required
                    fullWidth
                  />
                </Grid>
              </Grid>
            ))}
            <Grid container spacing={2} justifyContent="flex-end">
              <Grid item>
                <Button
                  variant="contained"
                  color= 'primary'
                  onClick={() => handleAddEntry('jobs')}
                  
                >
                  Add Job
                </Button>
              </Grid>
              {formData?.jobs?.length > 0 && (
                <Grid item>
                  <Button
                    variant="outlined"
                    color="error"
                    onClick={() => handleRemove('jobs')}
                    startIcon={<DeleteIcon />}
                  >
                    Remove 
                  </Button>
                </Grid>
              )}
            </Grid>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ThirdStep;





// import React from 'react';
// import { TextField, Typography, Button, Grid } from '@mui/material';

// function ThirdStep({ formData, handleChange, handleAddEntry }) {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-[#FFFAF5]">
//       <div className="w-full max-w-7xl bg-white p-8 px-14 rounded-xl shadow-lg">
//         <h2 className="text-3xl font-bold tracking-wide mb-10 text-center text-[#FF7C00]">
//           Professional Details
//         </h2>
//         <form className="space-y-14">
//           {/* Activities Section */}
//           <div className="space-y-8">
//             <Typography variant="h6" className="section-title">
//               Activities
//             </Typography>
//             {formData.activities.map((activity, index) => (
//               <Grid container spacing={2} key={index}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Activity Name"
//                     name={`activities[${index}].activityName`}
//                     value={activity.activityName}
//                     onChange={(e) => handleChange(e, index, 'activities')}
//                     variant="outlined"
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Rank/Position"
//                     name={`activities[${index}].activityRank`}
//                     value={activity.activityRank}
//                     onChange={(e) => handleChange(e, index, 'activities')}
//                     variant="outlined"
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//               </Grid>
//             ))}
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleAddEntry('activities')}
//             >
//               Add Activity
//             </Button>
//           </div>

//           {/* Internships Section */}
//           <div className="space-y-8">
//             <Typography variant="h6" className="section-title">
//               Internships
//             </Typography>
//             {formData.internships.map((internship, index) => (
//               <Grid container spacing={2} key={index}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Company Name"
//                     name={`internships[${index}].companyName`}
//                     value={internship.companyName}
//                     onChange={(e) => handleChange(e, index, 'internships')}
//                     variant="outlined"
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Position"
//                     name={`internships[${index}].position`}
//                     value={internship.position}
//                     onChange={(e) => handleChange(e, index, 'internships')}
//                     variant="outlined"
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Starting Date"
//                     name={`internships[${index}].startingDate`}
//                     type="date"
//                     value={internship.startingDate}
//                     onChange={(e) => handleChange(e, index, 'internships')}
//                     variant="outlined"
//                     InputLabelProps={{ shrink: true }}
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Ending Date"
//                     name={`internships[${index}].endingDate`}
//                     type="date"
//                     value={internship.endingDate}
//                     onChange={(e) => handleChange(e, index, 'internships')}
//                     variant="outlined"
//                     InputLabelProps={{ shrink: true }}
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//               </Grid>
//             ))}
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleAddEntry('internships')}
//             >
//               Add Internship
//             </Button>
//           </div>

//           {/* Jobs Section */}
//           <div className="space-y-8">
//             <Typography variant="h6" className="section-title">
//               Jobs
//             </Typography>
//             {formData.jobs.map((job, index) => (
//               <Grid container spacing={2} key={index}>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Company Name"
//                     name={`jobs[${index}].companyName`}
//                     value={job.companyName}
//                     onChange={(e) => handleChange(e, index, 'jobs')}
//                     variant="outlined"
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Position"
//                     name={`jobs[${index}].position`}
//                     value={job.position}
//                     onChange={(e) => handleChange(e, index, 'jobs')}
//                     variant="outlined"
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Starting Date"
//                     name={`jobs[${index}].startingDate`}
//                     type="date"
//                     value={job.startingDate}
//                     onChange={(e) => handleChange(e, index, 'jobs')}
//                     variant="outlined"
//                     InputLabelProps={{ shrink: true }}
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//                 <Grid item xs={12} sm={6}>
//                   <TextField
//                     label="Ending Date"
//                     name={`jobs[${index}].endingDate`}
//                     type="date"
//                     value={job.endingDate}
//                     onChange={(e) => handleChange(e, index, 'jobs')}
//                     variant="outlined"
//                     InputLabelProps={{ shrink: true }}
//                     required
//                     fullWidth
//                   />
//                 </Grid>
//               </Grid>
//             ))}
//             <Button
//               variant="contained"
//               color="primary"
//               onClick={() => handleAddEntry('jobs')}
//             >
//               Add Job
//             </Button>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default ThirdStep;



