// import React, { useState, useEffect } from 'react';
// import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
// import Stepper from '@mui/material/Stepper';
// import Step from '@mui/material/Step';
// import StepLabel from '@mui/material/StepLabel';
// import Button from '@mui/material/Button';
// import FirstStep from '../components/FirstStep';
// import SecondStep from '../components/SecondStep';
// import ThirdStep from '../components/ThirdStep';

// const CustomStepperRoot = styled('div')(({ theme }) => ({
//   display: 'flex',
//   flexDirection: 'column',
//   alignItems: 'center',
//   marginTop: theme.spacing(10),
//   marginBottom: theme.spacing(10),
// }));

// const CustomStepperContainer = styled('div')(({ theme }) => ({
//   width: '100%',
//   maxWidth: '700px',
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
//             color: '#BDBDBD', // Use a grey color for disabled steps if desired
//           },
//         },
//       },
//     },
//     MuiStepLabel: {
//       styleOverrides: {
//         label: {
//           color: '#FFF', // Change the color of the numbers inside the circle to white
//           '&.Mui-completed': {
//             color: '#FF7C00 !important',
//           },
//           '&.Mui-active': {
//             color: '#FF7C00 !important',
//           },
//           '&.Mui-disabled': {
//             color: '#BDBDBD', // Use a grey color for disabled steps if desired
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
//   const [formData, setFormData] = useState(() => {
//     const storedFormData = localStorage.getItem('formData');
//     return storedFormData
//       ? JSON.parse(storedFormData)
//       : {
//           fullName: '',
//           email: '',
//           dateOfBirth: '',
//           phoneNumber: '',
//           alternateNumber: '',
//           address: '',
//           landmark: '',
//           country: '',
//           city: '',
//           state: '',
//           zipCode: '',
//           district: '',
//           highestQualification: '',
//           schoolName: '',
//           boardName: '',
//           schoolMarks: '',
//           collegeName: '',
//           stream: '',
//           collegeBoardName: '',
//           collegeMarks: '',
//           universityCollegeName: '',
//           universityName: '',
//           courseName: '',
//           branchName: '',
//           startingYear: '',
//           graduationYear: '',
//           cgpa: '',
//           postGradCollegeName: '',
//           postGradCourseName: '',
//           postGradUniversityName: '',
//           postGradStartDate: '',
//           postGradEndDate: '',
//           activities: [], // Initialize activities as an empty array
//           internships: [], // Initialize internships as an empty array
//           jobs: [], // Initialize jobs as an empty array
//         };
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

//   const handleChange = (event) => {
//     const { name, value } = event.target;
//     setFormData({
//       ...formData,
//       [name]: value,
//     });
//   };

//   const handleAddEntry = (type) => {
//     const newEntry = { companyName: '', position: '', startDate: '', endDate: '' };
//     setFormData((prevFormData) => ({
//       ...prevFormData,
//       [type]: [...(prevFormData[type] || []), newEntry], // Ensure prevFormData[type] is an array or initialize as empty array
//     }));
//   };

//   const renderStepContent = (step) => {
//     switch (step) {
//       case 0:
//         return <FirstStep formData={formData} handleChange={handleChange} />;
//       case 1:
//         return <SecondStep formData={formData} handleChange={handleChange} />;
//       case 2:
//         return (
//           <ThirdStep
//             formData={formData}
//             handleChange={handleChange}
//             handleAddEntry={handleAddEntry}
//           />
//         );
//       default:
//         return 'Unknown step';
//     }
//   };

//   return (
//     <ThemeProvider theme={theme}>
//       <div style={{ width: '100%', marginBottom: '30px' }}>
//         <CustomStepperRoot>
//           <CustomStepperContainer>
//             <Stepper activeStep={activeStep} alternativeLabel>
//               {steps.map((label) => (
//                 <Step key={label}>
//                   <StepLabel>{label}</StepLabel>
//                 </Step>
//               ))}
//             </Stepper>
//           </CustomStepperContainer>
//         </CustomStepperRoot>
//         <div style={{ display: 'flex', justifyContent: 'center', width: '100%' }}>
//           <div style={{ width: '70%' }}>
//             {renderStepContent(activeStep)}
//             <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
//               <Button
//                 disabled={activeStep === 0}
//                 onClick={handleBack}
//                 style={{ marginRight: '10px' }}
//               >
//                 Back
//               </Button>
//               <Button
//                 variant="contained"
//                 color="primary"
//                 onClick={handleNext}
//                 disabled={activeStep === steps.length - 1}
//               >
//                 {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
//               </Button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </ThemeProvider>
//   );
// };

// export default CandidateForm;







import React, { useState, useEffect } from 'react';
import { styled, ThemeProvider, createTheme } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Button from '@mui/material/Button';
import FirstStep from '../components/FirstStep';
import SecondStep from '../components/SecondStep';
import ThirdStep from '../components/ThirdStep';

const CustomStepperRoot = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  marginTop: theme.spacing(7),
  marginBottom: theme.spacing(5),
}));

const CustomStepperContainer = styled('div')(({ theme }) => ({
  width: '100%',
  maxWidth: '700px',
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
      [type]: [...(prevFormData[type] || []), newEntry], // Initialize with empty array if undefined
    }));
  };

  const handleRemoveEntry = (type) => {
    if (formData[type].length > 1) {
      const updatedEntries = [...formData[type]];
      updatedEntries.pop(); // Remove the last entry
      setFormData({
        ...formData,
        [type]: updatedEntries,
      });
    }
  };

  const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
          ...formData,
          [name]: value,
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
          <div style={{ width: '70%' }}>
            {renderStepContent(activeStep)}
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'space-between' }}>
              <Button disabled={activeStep === 0} onClick={handleBack} style={{ marginRight: '10px' }}>
                Back
              </Button>
              <Button
                variant="contained"
                color="primary"
                onClick={handleNext}
                disabled={activeStep === steps.length - 1}
              >
                {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default CandidateForm;




