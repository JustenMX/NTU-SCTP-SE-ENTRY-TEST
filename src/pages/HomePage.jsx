import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold">Hello there!</h1>
          <p className="mb-5">
            Greetings from Justen Manni. I will be attempting all 6 questions
            and my answers can be found in the respective pages.
          </p>
          {/* Question Buttons */}
          <div className="flex-row">
            <button className="btn btn-primary m-2">
              <Link to={`/QuestionOne`}>Question 1</Link>
            </button>
            <button className="btn btn-primary m-2">
              <Link to={`/QuestionTwo`}>Question 2</Link>
            </button>
            <button className="btn btn-primary m-2">
              <Link to={`/QuestionThree`}>Question 3</Link>
            </button>
            <button className="btn btn-primary m-2">
              <Link to={`/QuestionFour`}>Question 4</Link>
            </button>
            <button className="btn btn-primary m-2">
              <Link to={`/QuestionFive`}>Question 5</Link>
            </button>
            <button className="btn btn-primary m-2">
              <Link to={`/QuestionSix`}>Question 6</Link>
            </button>
          </div>
          {/* Question Buttons */}
        </div>
      </div>
    </div>
  );
}

export default HomePage;
