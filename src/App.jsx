import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuestionOne from "./pages/QuestionOne";
import QuestionTwo from "./pages/QuestionTwo";
import QuestionThree from "./pages/QuestionThree";
import QuestionFour from "./pages/QuestionFour";
import QuestionFive from "./pages/QuestionFive";
import ErrorPage from "./pages/ErrorPage";
import Navigation from "./components/Navigation";
import Footer from "./components/Footer";
import "./main.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navigation />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/QuestionOne" element={<QuestionOne />} />
          <Route path="/QuestionTwo" element={<QuestionTwo />} />
          <Route path="/QuestionThree" element={<QuestionThree />} />
          <Route path="/QuestionFour" element={<QuestionFour />} />
          <Route path="/QuestionFive" element={<QuestionFive />} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
