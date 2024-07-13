import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Content from "./components/Content";
import CourseList from "./course/CourseList";
import CourseContent from "./course/learnpage/firstcourse/CourseContent";
import CourseDetails from "./course/learnpage/firstcourse/CourseDetails";
import CourseQuest from "./course/learnpage/firstcourse/CourseQuest";
import CourseEnding from "./course/learnpage/firstcourse/CourseEnding";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Content />
    </div>
  );
}

export default App;
