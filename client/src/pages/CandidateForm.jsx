import React, { useState, useEffect } from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';
import ConfirmationDialog from '../components/ConfirmationDialog';
import axios from 'axios';
import toast from 'react-hot-toast';

const CustomStepperRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyItems: 'center',
  justifyContent: 'center',
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(5),
}));

const CustomStepperContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '1200px',
  margin: '0 auto',
}));

const steps = ['Personal Details', 'Educational Details', 'Professional Details'];

const theme = createTheme({
  components: {
    MuiStepIcon: {
      styleOverrides: {
        root: {
          '&.Mui-completed': {
            color: '#FF7C00',
          },
          '&.Mui-active': {
            color: '#FF7C00',
          },
          '&.Mui-disabled': {
            color: '#BDBDBD',
          },
        },
      },
    },
    MuiStepLabel: {
      styleOverrides: {
        label: {
          color: '#FFF',
          '&.Mui-completed': {
            color: '#FF7C00 !important',
          },
          '&.Mui-active': {
            color: '#FF7C00 !important',
          },
          '&.Mui-disabled': {
            color: '#BDBDBD',
          },
        },
      },
    },
  },
  palette: {
    primary: {
      main: '#FF7C00',
    },
  },
});

const CandidateForm = () => {
  const [activeStep, setActiveStep] = useState(0);
  const [dialogOpen, setDialogOpen] = useState(false); // State for the dialog
  const [dialogMessage, setDialogMessage] = useState(""); // State for dialog message
  const [formData, setFormData] = useState(() => {
    const storedFormData = localStorage.getItem('formData');
    return storedFormData
      ? JSON.parse(storedFormData)
      : {
          fullName: '',
          email: '',
          dateOfBirth: '',
          phoneNumber: '',
          alternateNumber: '',
          address: '',
          landmark: '',
          country: '',
          city: '',
          state: '',
          zipCode: '',
          district: '',
          highestQualification: '',
          schoolName: '',
          boardName: '',
          schoolMarks: '',
          collegeName: '',
          stream: '',
          collegeBoardName: '',
          collegeMarks: '',
          universityCollegeName: '',
          universityName: '',
          courseName: '',
          branchName: '',
          startingYear: '',
          graduationYear: '',
          cgpa: '',
          postGradCollegeName: '',
          postGradCourseName: '',
          postGradUniversityName: '',
          postGradStartDate: '',
          postGradEndDate: '',
          activities: [{ activityName: '', activityRank: '' }],
          internships: [{ companyName: '', position: '', startDate: '', endDate: '' }],
          jobs: [{ companyName: '', position: '', startDate: '', endDate: '' }],
          profilePhoto: '', // Add this field
        };
  });
  

  useEffect(() => {
    localStorage.setItem('formData', JSON.stringify(formData));
  }, [formData]);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleSubmit = () => {
    setDialogMessage("Please review your information carefully before submitting");
    setDialogOpen(true); // Open the dialog
  };

  const handleDialogClose = () => {
    setDialogOpen(false); // Close the dialog
  };


  const handleDialogConfirm = async () => {
    setDialogOpen(false); // Close the dialog
  
    // Create a new FormData object
    try {
      // Create a FormData instance
      const formDataWithImage = new FormData();
      
      // Loop through each key-value pair in the form data
      Object.entries(formData).forEach(([key, value]) => {
        if (key === "profilePhoto" && value) {
          // If the value is the image in base64, decode it back to a file blob
          const byteString = atob(value.split(",")[1]); // Decode base64
          const mimeType = value.split(",")[0].match(/:(.*?);/)[1]; // Extract MIME type from base64
          const arrayBuffer = new Uint8Array(byteString.length);
          
          // Create the byte array from base64
          for (let i = 0; i < byteString.length; i++) {
            arrayBuffer[i] = byteString.charCodeAt(i);
          }
    
          // Create the Blob from the array buffer with mime type
          const fileBlob = new Blob([arrayBuffer], { type: mimeType });
    
          // Append the file to FormData
          formDataWithImage.append(key, fileBlob, "profile-photo.png"); // Using the filename (can be dynamic)
        } else {
          // Append other fields (name, email, etc.)
          formDataWithImage.append(key, value);
        }
      });
    
      // Make the POST request with the FormData object
      console.log("photo: ", formData.profilePhoto);
      
      const response = await axios.post(
        "http://localhost/kavaavi/api/fromData.php",
        formDataWithImage, // Send the FormData object with image
        {
          headers: {
            "Content-Type": "multipart/form-data", // Important for file upload
          },
          withCredentials: true,
        }
      );
    
      console.log(response, "Response");
    
      const data = response.data;
      console.log(data);
    
      // Handle the response
      if (data.status === "error") {
        const errorMessages = data.messages?.join("\n");
        toast(errorMessages || data.message, {
          style: { backgroundColor: "#FF4545", color: "white" },
          duration: 3000,
        });
      }
      if (data.status === "success") {
        toast(data.message, {
          style: { backgroundColor: "green", color: "white" },
          duration: 5000,
        });
        setFormData({
          fullName: '',
          email: '',
          dateOfBirth: '',
          phoneNumber: '',
          alternateNumber: '',
          address: '',
          landmark: '',
          country: '',
          city: '',
          state: '',
          zipCode: '',
          district: '',
          highestQualification: '',
          schoolName: '',
          boardName: '',
          schoolMarks: '',
          collegeName: '',
          stream: '',
          collegeBoardName: '',
          collegeMarks: '',
          universityCollegeName: '',
          universityName: '',
          courseName: '',
          branchName: '',
          startingYear: '',
          graduationYear: '',
          cgpa: '',
          postGradCollegeName: '',
          postGradCourseName: '',
          postGradUniversityName: '',
          postGradStartDate: '',
          postGradEndDate: '',
          activities: [{ activityName: '', activityRank: '' }],
          internships: [{ companyName: '', position: '', startDate: '', endDate: '' }],
          jobs: [{ companyName: '', position: '', startDate: '', endDate: '' }],
          profilePhoto: "", // Clear the image field
        });
      }
  
        // Optionally, remove form data from local storage
        localStorage.removeItem('formData');
      }
    catch (error) {
      console.error("Error submitting the form:", error);
      toast("An error occurred while submitting the form.", {
        style: { backgroundColor: "#FF4545", color: "white" },
        duration: 3000,
      });
    }
  };



  const handleChangeProfessionalDetails = (event, index, type) => {
    const { name, value } = event.target;

    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: prevFormData[type].map((item, i) =>
        i === index ? { ...item, [name]: value } : item
      ),
    }));
  };

  const handleAddEntry = (type) => {
    const newEntry = { companyName: '', position: '', startDate: '', endDate: '' };
    setFormData((prevFormData) => ({
      ...prevFormData,
      [type]: [...(prevFormData[type] || []), newEntry],
    }));
  };

  const handleRemoveEntry = (type) => {
    if (formData[type].length > 1) {
      const updatedEntries = [...formData[type]];
      updatedEntries.pop();
      setFormData({
        ...formData,
        [type]: updatedEntries,
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => {
      const updatedFormData = { ...prev, [name]: value };
      localStorage.setItem('formData', JSON.stringify(updatedFormData)); // Persist the data
      return updatedFormData;
    });
  };

  const renderStepContent = (step) => {
    switch (step) {
      case 0:
        return <FirstStep formData={formData} handleChange={handleChange} />;
      case 1:
        return <SecondStep formData={formData} handleChange={handleChange} />;
      case 2:
        return (
          <ThirdStep
            formData={formData}
            handleChange={handleChange}
            handleAddEntry={handleAddEntry}
            handleRemoveEntry={handleRemoveEntry}
            handleChangeProfessionalDetails={handleChangeProfessionalDetails}
          />
        );
      default:
        return 'Unknown step';
    }
  };

  const renderStepActions = () => {
    if (activeStep === steps.length - 1) {
      return (
        <Button variant="contained" color="primary" onClick={handleSubmit}>
          Finish
        </Button>
      );
    }

    return (
      <Button variant="contained" color="primary" onClick={handleNext}>
        Next
      </Button>
    );
  };

  return (
    <ThemeProvider theme={theme}>
      <div style={{ width: '100%', marginBottom: '30px' }}>
        <CustomStepperRoot>
          <CustomStepperContainer>
            <Stepper activeStep={activeStep} alternativeLabel>
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel>{label}</StepLabel>
                </Step>
              ))}
            </Stepper>
          </CustomStepperContainer>
        </CustomStepperRoot>
        <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
          <div style={{ width: '80%' }}>
            {renderStepContent(activeStep)}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <Button disabled={activeStep === 0} onClick={handleBack} style={{ marginRight: '10px' }}>
                Back
              </Button>
              {renderStepActions()}
            </div>
          </div>
        </div>
      </div>
      <ConfirmationDialog 
        open={dialogOpen} 
        handleClose={handleDialogClose} 
        handleConfirm={handleDialogConfirm} 
        message={dialogMessage} 
      />
    </ThemeProvider>
  );
};

export default CandidateForm;

// import React, { useState, useEffect } from 'react';
// import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import FirstStep from '../components/FirstStep';
// import SecondStep from '../components/SecondStep';
// import ThirdStep from '../components/ThirdStep';
// import ConfirmationDialog from '../components/ConfirmationDialog';
// import axios from 'axios';
// import toast from 'react-hot-toast';

// // Create an initial state for form data
// const initialFormData = {
//   fullName: '',
//   email: '',
//   dateOfBirth: '',
//   phoneNumber: '',
//   alternateNumber: '',
//   address: '',
//   landmark: '',
//   country: '',
//   city: '',
//   state: '',
//   zipCode: '',
//   district: '',
//   highestQualification: '',
//   schoolName: '',
//   boardName: '',
//   schoolMarks: '',
//   collegeName: '',
//   stream: '',
//   collegeBoardName: '',
//   collegeMarks: '',
//   universityCollegeName: '',
//   universityName: '',
//   courseName: '',
//   branchName: '',
//   startingYear: '',
//   graduationYear: '',
//   cgpa: '',
//   postGradCollegeName: '',
//   postGradCourseName: '',
//   postGradUniversityName: '',
//   postGradStartDate: '',
//   postGradEndDate: '',
//   activities: [{ activityName: '', activityRank: '' }],
//   internships: [{ companyName: '', position: '', startDate: '', endDate: '' }],
//   jobs: [{ companyName: '', position: '', startDate: '', endDate: '' }],
// };

// const CustomStepperRoot = styled('div')(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: theme.spacing(7),
//   marginBottom: theme.spacing(5),
// }));

// const CustomStepperContainer = styled('div')(({ theme }) => ({
//   width: '100%',
//   maxWidth: '1200px',
//   margin: '0 auto',
// }));

// const steps = ['Personal Details', 'Educational Details', 'Professional Details'];

// const theme = createTheme({
//   components: {
//     MuiStepIcon: {
//       styleOverrides: {
//         root: {
//           '&.Mui-completed': {
//             color: '#FF7C00',
//           },
//           '&.Mui-active': {
//             color: '#FF7C00',
//           },
//           '&.Mui-disabled': {
//             color: '#BDBDBD',
//           },
//         },
//       },
//     },
//     MuiStepLabel: {
//       styleOverrides: {
//         label: {
//           color: '#FFF',
//           '&.Mui-completed': {
//             color: '#FF7C00 !important',
//           },
//           '&.Mui-active': {
//             color: '#FF7C00 !important',
//           },
//           '&.Mui-disabled': {
//             color: '#BDBDBD',
//           },
//         },
//       },
//     },
//   },
//   palette: {
//     primary: {
//       main: '#FF7C00',
//     },
//   },
// });

// const CandidateForm = () => {
//   const [activeStep, setActiveStep] = useState(0);
//   const [dialogOpen, setDialogOpen] = useState(false); // State for the dialog
//   const [dialogMessage, setDialogMessage] = useState(''); // State for dialog message

//   // Use initialFormData for the initial state
//   const [formData, setFormData] = useState(() => {
//     const storedFormData = localStorage.getItem('formData');
//     return storedFormData ? JSON.parse(storedFormData) : initialFormData;
//   });

//   useEffect(() => {
//     localStorage.setItem('formData', JSON.stringify(formData));
//   }, [formData]);

//   const handleNext = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep + 1);
//   };

//   const handleBack = () => {
//     setActiveStep((prevActiveStep) => prevActiveStep - 1);
//   };

//   const handleSubmit = () => {
//     setDialogMessage('Please review your information carefully before submitting');
//     setDialogOpen(true); // Open the dialog
//   };

//   const handleDialogClose = () => {
//     setDialogOpen(false); // Close the dialog
//   };

//   const handleDialogConfirm = async () => {
//     setDialogOpen(false); // Close the dialog

//     const response = await axios.post(
//       'http://localhost/kavaavi/api/fromData.php',
//       formData,
//       {
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         withCredentials: true,
//       }
//     );

//     const data = response.data;

//     if (data.status === 'error') {
//       toast(data.message, {
//         style: { backgroundColor: 'red', color: 'white' },
//         duration: 3000,
//       });
//     }
//     if (data.status === 'success') {
//       toast(data.message, {
//         style: { backgroundColor: 'green', color: 'white' },
//         duration: 5000,
//       });
//       setFormData(initialFormData); // Reset the form to initial state
//       localStorage.removeItem('formData'); // Clear from local storage
//       setActiveStep(0); // Reset to the first step
//     }
//   };

//   // Rest of the code remains the same
//   // ...
// };

// export default CandidateForm;
