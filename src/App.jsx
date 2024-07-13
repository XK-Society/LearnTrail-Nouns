import React from "react";
import {
  BrowserRouter as BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import Coursepage from "./pages/Coursepage";
import Homepage from "./pages/Homepage";
import CourseContent from "./course/learnpage/firstcourse/CourseContent";
import CourseDetails from "./course/learnpage/firstcourse/CourseDetails";
import CourseEnding from "./course/learnpage/firstcourse/CourseEnding";
import CourseQuest from "./course/learnpage/firstcourse/CourseQuest";
function App() {
  return (
    <BrowserRouter>
      <div>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/coursepage" element={<Coursepage />} />
          <Route path="/coursecontent" element={<CourseContent />} />
          <Route path="/coursedetails" element={<CourseDetails />} />
          <Route path="/courseending" element={<CourseEnding />} />
          <Route path="/coursequest" element={<CourseQuest />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
