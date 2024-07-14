import React, { useState } from "react";
import Navbar from "../../../components/Navbar";
import { Link } from "react-router-dom";
const questions = [
  {
    question:
      "Which of the following is NOT a characteristic of Web3?",
    options: ["Centralization", "Decentralization", "Transparency", "User ownership"],
    answer: ["A"],
  },
];

const CourseQuest = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedOption, setSelectedOption] = useState("");
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === questions[currentQuestion].answer) {
      setScore(score + 1);
    }
  };

  const handleNextQuestion = () => {
    const nextQuestion = currentQuestion + 1;
    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
      setSelectedOption(null);
    } else {
      setShowScore(true);
    }
  };

  console.log("showScore:", showScore);
  console.log("score:", score);

  return (
    <div className="bg-[url('/src/assets/pagebg.png')] bg-center bg-contain h-screen">
      <Navbar />

      <div className="flex justify-between items-center mt-4">
        <div className=" flex justify-between w-1/4 ml-24">
          <div className="">
            {/* player's character */}
            <div>
              <img
                src="src/assets/character/avatar.png"
                className="w-40 h-40 ml-80"
              />
            </div>
            {/* player's HP */}
            <div>
              <img src="src/assets/character/hp.png" className="w-28 ml-96" />
            </div>
          </div>
          <div className="">
            {/* player's weapon */}
            <div>
              <img
                src="src/assets/character/sword.png"
                className="w-20 h-20 ml-24 mt-10"
              />
              <h1 className="font-presstart text-white text-xs ml-24">Weapon</h1>
            </div>
          </div>
        </div>

        <div className="w-1/2 text-center">
          <p className="text-white font-semibold font-presstart -ml-32">VS</p>
        </div>

        <div className="w-1/4">
          {/* monster */}
          <img src="src/assets/character/monster.png" className="w-44 -mt-16 -ml-80" />
        </div>
      </div>

      <div>
        {/* quest */}
        <div className="flex flex-col items-center justify-center p-4 -mt-4">
          {showScore ? (
            <div className="text-2xl text-white font-play ">
              You scored {score} out of {questions.length}
            </div>
          ) : (
            <div className="w-full max-w-xl bg-[#FBF6E2] shadow-md rounded-lg p-6">
              <div className="text-xl mb-4 font-play">
                {questions[currentQuestion].question}
              </div>
              <div className="flex flex-col font-play">
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
                    {option}
                  </button>
                ))}
              </div>
              <button
                onClick={handleNextQuestion}
                className="mt-4 py-2 px-4 bg-[#E68369] text-white rounded font-play"
              >
                Check Answer
              </button>
            </div>
          )}
        </div>
      </div>

      {/* back next button */}
      <div className="flex items-center justify-center space-x-4 font-play">
        <Link to="/coursecontent">
          <button
            type="button"
            className="styled border-0 leading-10 px-5 font-semibold text-base text-center text-black rounded-lg bg-[#E68369] custom-gradient custom-box-shadow hover:bg-[#ECCEAE] active:custome-active-box-shadow text-shadow w-36 h-15"
          >
            Back
          </button>
        </Link>
        <Link to="/courseending">
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
