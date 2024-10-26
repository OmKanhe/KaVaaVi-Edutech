import React from "react";
import assets from "../assets/man.png";
import ReactToPrint from "react-to-print";
import { useRef } from "react";

import { useState } from "react";
import { AlternateEmail } from "@mui/icons-material";

function CandidateProfile() {
  const componentRef = useRef();
  const handlePrint = () => {
    window.print();
  };
  const [profile, setProfile] = useState({
    // Personal info
    name: "Bhushan H Bankar",
    dob: "1998-06-15",
    gender: "Male",
    fatherName: "Harishchandra Bankar",
    motherName: "Suman Bankar",
    imgUrl: "",

    // Contact Information
    email: "bhushanbankar@example.com",
    mobile: "9876543210",
    alternateMobile: "9123456780",

    // Address
    addressLine: "123, Green Street",
    landmark: "Near City Mall",
    city: "Nagpur",
    district: "Nagpur",
    state: "Maharashtra",
    country: "India",
    zipCode: "440001",

    // SSC Details
    sscSchoolName: "Shivaji Vidyalaya",
    sscBoardName: "Maharashtra State Board",
    sscMarksObtained: "85.60%",

    // HSC Details
    hscSchoolName: "Vivekananda Junior College",
    hscBoardName: "Maharashtra State Board",
    hscMarksObtained: "78.40%",

    // Graduation Details
    graduationCollegeName: "Wainganga College of Engineering and Management",
    graduationCourseName: "B.E. in Computer Science",
    graduationYear: "2021",
    graduationCGPA: "8.5",

    // Post Graduation Details
    postGraduationCollegeName: "Indian Institute of Management, Nagpur",
    postGraduationCourseName: "MBA in Information Technology",
    postGraduationYear: "2024",
    postGraduationCGPA: "8.9",

    // PhD Details
    phdCourseName: "PhD in Artificial Intelligence and Machine Learning",
    phdNumber: "AI-ML-2024-001",

    // Curricular Details
    curricularCourseName: "AI and Machine Learning",
    curricularRankOrPosition: "Top 10% in Class",

    // Internship Details
    internshipCompanyName: "CuriosityTech",
    internshipPosition: "Full Stack Developer Intern",
    internshipDuration: "6 months",
    internshipStartDate: "2023-01-10",
    internshipEndDate: "2023-07-10",

    // Job Details
    jobCompanyName: "Clustor Computing",
    jobPosition: "Full Stack Developer",
    jobStartDate: "2023-08-01",
    jobEndDate: "Present",
  });

  return (
    <>
      <div ref={componentRef}>
        <div className="w-[100%] m-auto mb-8 p-6 sm:font-light  lg:w-[80vw]">
          {/* Candidate Profile Title */}
          <h1 className="lg:text-4xl font-bold text-[#FF7C00] mb-6 text-center sm:text-[12px] ">
            Candidate Profile
          </h1>

          <div className="wrapper shadow-lg rounded-md bg-white p-6 ">
            {/* Personal Information */}
            <div>
              <h2 className="text-[#FF7C00] font-semibold text-xl mb-2 text-center">
                Personal Information
              </h2>
              <div>
                <div className="flex justify-between mb-4 flex-col lg:flex-row ">
                  <img
                    src={profile.imgUrl || assets}
                    alt="Candidate Profile Image"
                    className="lg:w-[200px]  w-[150px] rounded-full border-2 border-gray-300 sm: "
                  />

                  <div>
                    <p className="text-lg mb-2">
                      <span className="text-gray-700 font-medium">Name:</span>{" "}
                      {profile.name || "N/A"}
                    </p>
                    <p className="text-lg mb-2">
                      <span className="text-gray-700 font-medium">DOB:</span>{" "}
                      {profile.dob || "N/A"}
                    </p>
                    <p className="text-lg mb-2">
                      <span className="text-gray-700 font-medium">Gender:</span>{" "}
                      {profile.gender || "N/A"}
                    </p>
                    <p className="text-lg mb-2">
                      <span className="text-gray-700 font-medium">
                        Father's Name:
                      </span>{" "}
                      {profile.fatherName || "N/A"}
                    </p>
                    <p className="text-lg mb-2">
                      <span className="text-gray-700 font-medium">
                        Mother's Name:
                      </span>{" "}
                      {profile.motherName || "N/A"}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact & Address Information */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 ">
              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  Contact Information
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">Email:</span>{" "}
                  {profile.email || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">Mobile:</span>{" "}
                  {profile.mobile || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Alternate Mobile:
                  </span>{" "}
                  {profile.alternateMobile || "N/A"}
                </p>
              </div>
              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  Address Details
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Address Line:
                  </span>{" "}
                  {profile.addressLine || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">Landmark:</span>{" "}
                  {profile.landmark || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">City:</span>{" "}
                  {profile.city || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">District:</span>{" "}
                  {profile.district || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">State:</span>{" "}
                  {profile.state || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">Country:</span>{" "}
                  {profile.country || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">ZIP Code:</span>{" "}
                  {profile.zipCode || "N/A"}
                </p>
              </div>
            </div>

            {/* Educational Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  SSC
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    School Name:
                  </span>{" "}
                  {profile.sscSchoolName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">Board Name:</span>{" "}
                  {profile.sscBoardName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Marks Obtained:
                  </span>{" "}
                  {profile.sscMarksObtained || "N/A"}
                </p>
              </div>

              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  HSC
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    School Name:
                  </span>{" "}
                  {profile.hscSchoolName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">Board Name:</span>{" "}
                  {profile.hscBoardName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Marks Obtained:
                  </span>{" "}
                  {profile.hscMarksObtained || "N/A"}
                </p>
              </div>

              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  Graduation
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    College Name:
                  </span>{" "}
                  {profile.graduationCollegeName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Course Name:
                  </span>{" "}
                  {profile.graduationCourseName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Graduation Year:
                  </span>{" "}
                  {profile.graduationYear || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">CGPA:</span>{" "}
                  {profile.graduationCGPA || "N/A"}
                </p>
              </div>

              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  Post Graduation
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    College Name:
                  </span>{" "}
                  {profile.postGraduationCollegeName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Course Name:
                  </span>{" "}
                  {profile.postGraduationCourseName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Graduation Year:
                  </span>{" "}
                  {profile.postGraduationYear || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">CGPA:</span>{" "}
                  {profile.postGraduationCGPA || "N/A"}
                </p>
              </div>

              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  PHD
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Course Name:
                  </span>{" "}
                  {profile.phdCourseName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    {" "}
                    PDH Number:
                  </span>{" "}
                  {profile.phdNumber || "N/A"}
                </p>
              </div>

              {/* Add other sections similarly for post-graduation, PhD, etc. */}
            </div>

            {/* Professional Details */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  Curricular Details
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Course Name:
                  </span>{" "}
                  {profile.curricularCourseName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Rank / Position:
                  </span>{" "}
                  {profile.curricularRankOrPosition || "N/A"}
                </p>
              </div>
              {/* Internship */}
              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  Internship
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Company Name:
                  </span>{" "}
                  {profile.internshipCompanyName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">Position:</span>{" "}
                  {profile.internshipPosition || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Start Date :
                  </span>{" "}
                  {profile.internshipStartDate || "N/A"}
                </p>

                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">End Date :</span>{" "}
                  {profile.internshipEndDate || "N/A"}
                </p>
              </div>

              <div className="border p-4 rounded-md shadow-md">
                <h2 className="text-[#FF7C00] font-semibold text-xl mb-2">
                  Job
                </h2>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Company Name:
                  </span>{" "}
                  {profile.jobCompanyName || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">Position:</span>{" "}
                  {profile.jobPosition || "N/A"}
                </p>
                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">
                    Start Date :
                  </span>{" "}
                  {profile.jobStartDate || "N/A"}
                </p>

                <p className="text-lg mb-2">
                  <span className="text-gray-700 font-medium">End Date :</span>{" "}
                  {profile.jobEndDate || "N/A"}
                </p>
              </div>
            </div>

            {/* Add more sections for job experience, achievements, etc. */}
          </div>
          <button
            onClick={handlePrint}
            className="mt-4 px-4 py-2 bg-[#FF7C00] text-white rounded"
          >
            Download Resume
          </button>
        </div>
      </div>
    </>
  );
}
// }
export default CandidateProfile;
