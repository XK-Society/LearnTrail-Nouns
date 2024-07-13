import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";
const questions = [
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus ex justo, at viverra eros pellentesque in",
    options: ["A", "B", "C", "D"],
    answer: ["A"],
  },
  {
    question:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus finibus ex justo, at viverra eros pellentesque in",
    options: ["A", "B", "C", "D"],
    answer: ["C"],
  },
];

const CourseQuest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const handleNextQuestion = () => {
    if (selectedOption === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
    setSelectedOption("");
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowScore(true);
    }
  };

  return (
    <div>
      <Navbar />

      <div className="flex justify-between items-center p-4 m-10">
        <div className=" flex justify-between w-1/4 ml-24">
          <div className="">
            {/* player's character */}
            <div>
              <img
                src="src/assets/character/player.jpg"
                className="w-52 h-52"
              />
            </div>
            {/* player's HP */}
            <div>
              <img src="src/assets/character/hp.png" className="w-52 ml-1" />
            </div>
          </div>
          <div className="">
            {/* player's weapon */}
            <div>
              <img
                src="src/assets/character/weapon.jpg"
                className="w-24 h-24"
              />
            </div>
          </div>
        </div>

        <div className="w-1/2 text-center">
          <p className="text-white font-semibold">VS</p>
        </div>

        <div className="w-1/4">
          {/* monster */}
          <img src="src/assets/character/monster.jpg" className="w-52 ml-1" />
        </div>
      </div>

      <div>
        {/* quest */}
        <div className="flex flex-col items-center justify-center bg-[#131842] p-4">
          {showScore ? (
            <div className="text-2xl text-white">
              {" "}
              You scored {score} out of {questions.length}{" "}
            </div>
          ) : (
            <div className="w-full max-w-xl bg-white shadow-md rounded-lg p-6">
              <div className="text-xl mb-4">
                {questions[currentQuestion].question}
              </div>
              <div className="flex flex-col">
                {questions[currentQuestion].options.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className={`py-2 px-4 mb-2 rounded ${
                      selectedOption === option
                        ? "bg-[#E68369] text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {" "}
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNextQuestion}
                className="mt-4 py-2 px-4 bg-[#E68369] text-white rounded"
              >
                Next Question
              </button>
            </div>
          )}
        </div>
      </div>

      {/* back next button */}
      <div className="flex items-center justify-center space-x-4 mt-4 mb-4">
        <Link to="/courseending">
          <button
            type="button"
            className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15"
          >
            Back
          </button>
        </Link>
        <Link to="/">
          <button
            type="button"
            className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15"
          >
            Next
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CourseQuest;
