import React from "react";
import { Link } from "react-router-dom";

const items = [
  { id: 1, title: "Blockchain Development" },
  { id: 2, title: "Coming soon" },
  { id: 3, title: "Coming soon" },
  { id: 4, title: "Coming soon" },
  { id: 5, title: "Coming soon" },
  { id: 6, title: "Coming soon"},
  { id: 7, title: "Coming soon"},
  { id: 8, title: "Coming soon" },
  { id: 9, title: "Coming soon"},
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
