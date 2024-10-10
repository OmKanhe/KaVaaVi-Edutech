// App.jsx
import "./App.css";
import { createBrowserRouter, Route, Routes } from "react-router-dom";
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
    // Define default options
    className: '',
    duration: 5000,
    style: {
      background: '#363636',
      color: '#fff',
    },

    // Default options for specific types
    success: {
      duration: 3000,
      theme: {
        primary: 'green',
        secondary: 'black',
      },
    },
  }}
/>
        <Navbar />
      <Toaster
        position="top-center"
        toastOptions={{
          success: {
            style: {
              background: "green",
              color: "white",
            },
          },
          error: {
            style: {
              background: "red",
              color: "white",
            },
          },
          duration: 3000,
          style: {},

          // Aria
          ariaProps: {
            role: "status",
            "aria-live": "polite",
          },
        }}
      />

      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/candidate" element={<Protectedroute />}>

          <Route
            path="form"
            element={
              <StepProvider>
                <CandidateForm />
              </StepProvider>
            }
          />
        <Route path="profile" element={<CandidateProfile />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
