// // App.jsx
// import "./App.css";
// import { createBrowserRouter, Route, Routes } from "react-router-dom";
// import Landing from "./pages/Landing";
// import SignUp from "./pages/auth/SignUp";
// import SignIn from "./pages/auth/SignIn";
// import { Toaster } from "react-hot-toast";
// import axios from "axios";
// import Navbar from "./components/Navbar";
// import CandidateForm from "./pages/CandidateForm";
// import CandidateProfile from "./pages/CandidateProfile";
// import { StepProvider } from "./context/StepContext";
// import Protectedroute from "./pages/auth/Protectedroute";

// function App() {
//   axios.defaults.baseURL = "http://localhost:3000";
//   axios.defaults.withCredentials = true;

//   return (
//     <>
//     <Toaster
//   position="top-center"
//   reverseOrder={false}
//   gutter={8}
//   containerClassName=""
//   containerStyle={{}}
//   toastOptions={{
//     // Define default options
//     className: '',
//     duration: 5000,
//     style: {
//       background: '#363636',
//       color: '#fff',
//     },

//     // Default options for specific types
//     success: {
//       duration: 3000,
//       theme: {
//         primary: 'green',
//         secondary: 'black',
//       },
//     },
//   }}
// />
//         <Navbar />
//       <Toaster
//         position="top-center"
//         toastOptions={{
//           success: {
//             style: {
//               background: "green",
//               color: "white",
//             },
//           },
//           error: {
//             style: {
//               background: "red",
//               color: "white",
//             },
//           },
//           duration: 3000,
//           style: {},

//           // Aria
//           ariaProps: {
//             role: "status",
//             "aria-live": "polite",
//           },
//         }}
//       />

//       <Routes>
//         <Route path="/" element={<SignUp />} />
//         <Route path="/sign-up" element={<SignUp />} />
//         <Route path="/sign-in" element={<SignIn />} />
//         <Route path="/candidate" element={<Protectedroute />}>

//           <Route
//             path="form"
//             element={
//               <StepProvider>
//                 <CandidateForm />
//               </StepProvider>
//             }
//           />
//         <Route path="profile" element={<CandidateProfile />} />
//         </Route>
//       </Routes>
//     </>
//   );
// }

// export default App;



import "./App.css";
import { Routes, Route, Navigate } from "react-router-dom";
import Landing from "./pages/Landing";
import SignUp from "./pages/auth/SignUp";
import SignIn from "./pages/auth/SignIn";
import { Toaster } from "react-hot-toast";
import axios from "axios";
import Navbar from "./components/Navbar";
import CandidateForm from "./pages/CandidateForm";
import CandidateProfile from "./pages/CandidateProfile";
import { StepProvider } from "./context/StepContext";
import Protectedroute from "./pages/auth/Protectedroute";
import Layout from "./pages/Layout";
import CandidateProfileContainer from "./components/CandidateProfileContainer";

// Placeholder components for new dashboard routes
const Home = () => <div className="text-3xl text-center">Welcome to Dashboard</div>;
const LMS = () => <div className="text-3xl text-center">Learning Management System</div>;
const AptitudeTest = () => <div className="text-3xl text-center ">Aptitude Test</div>;

function App() {
  axios.defaults.baseURL = "http://localhost:3000";
  axios.defaults.withCredentials = true;

  return (
    <>
      <Toaster
        position="top-center"
        reverseOrder={false}
        gutter={8}
        containerClassName=""
        containerStyle={{}}
        toastOptions={{
          className: '',
          duration: 5000,
          style: {
            background: '#363636',
            color: '#fff',
          },
          success: {
            duration: 3000,
            theme: {
              primary: 'green',
              secondary: 'black',
            },
          },
        }}
      />

      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<SignIn/>} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />

        {/* Protected Dashboard Routes */}
        <Route path="/dashboard" element={<Protectedroute />}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            
            {/* User Routes */}
            <Route path="user">
              <Route 
                path="create-profile" 
                element={
                  <StepProvider>
                    <CandidateForm />
                  </StepProvider>
                } 
              />
              <Route path="view-profile" element={<CandidateProfileContainer />} />
            </Route>

            {/* Other Dashboard Routes */}
            <Route path="/dashboard/lms" element={<LMS />} />
            <Route path="aptitude-test" element={<AptitudeTest />} />
          </Route>
        </Route>

        {/* Redirect /candidate routes to new dashboard routes */}
        <Route 
          path="/candidate/form" 
          element={<Navigate to="/dashboard/user/create-profile" replace />} 
        />
        <Route 
          path="/candidate/profile" 
          element={<Navigate to="/dashboard/user/view-profile" replace />} 
        />

        {/* Catch all route */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </>
  );
}

export default App;


