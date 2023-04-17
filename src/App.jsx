import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import QuestionThree from "./pages/QuestionThree";
import QuestionFour from "./pages/QuestionFour";
import QuestionFive from "./pages/QuestionFive";
import Footer from "./components/Footer";
import "./main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/QuestionOne" element={<QuestionOne />} />
          <Route path="/QuestionTwo" element={<QuestionTwo />} />
          <Route path="/QuestionThree" element={<QuestionThree />} />
          <Route path="/QuestionFour" element={<QuestionFour />} />
          <Route path="/QuestionFive" element={<QuestionFive />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
