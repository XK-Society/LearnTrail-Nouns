import React from "react";
import CourseList from "../course/CourseList"; // Adjust the path as per your project structure
import Navbar from "../components/Navbar";
const Coursepage = () => {
  return (
    <div>
      <h2>Course Page</h2>
      <Navbar />
      <CourseList /> {/* Example of rendering CourseList */}
    </div>
  );
};

export default Coursepage;
