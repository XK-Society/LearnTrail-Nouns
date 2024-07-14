import React from "react";
import { Link } from "react-router-dom";

const items = [
  { id: 1, title: "Blockchain Development" },
  { id: 2, title: "Course 2" },
  { id: 3, title: "Course 3" },
  { id: 4, title: "Course 4" },
  { id: 5, title: "Course 5" },
  { id: 6, title: "Course 6" },
  { id: 7, title: "Course 7" },
  { id: 8, title: "Course 8" },
  { id: 9, title: "Course 9" },
];

const CourseList = () => {
  return (
    <div className="bg-[url('/src/assets/pagebg.png')] bg-center bg-contain h-screen">
      <div className="container mx-auto p-4">
        <div className="text-[#FBF6E2] text-3xl text-center font-presstart m-4">
          Courses
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-7">
          {items.map((item) => (
            <div
              key={item.id}
              className="bg-[#ECCEAE] hover:bg-[#FBF6E2] p-16 rounded-xl shadow text-[#131842] font-presstart text-center "
            >
              {item.title === "Blockchain Development" ? (
                <Link to="/coursedetails">
                  {" "}
                  {/* Link to homepage */}
                  {item.title}
                </Link>
              ) : (
                <div>{item.title}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CourseList;
