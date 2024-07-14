import React from "react";
import CourseList from "../course/CourseList"; // Adjust the path as per your project structure
import Navbar from "../components/Navbar";
const Coursepage = () => {
  return (
    <div>
      <Navbar />
      <CourseList /> {/* Example of rendering CourseList */}
    </div>
  );
};

export default Coursepage;
