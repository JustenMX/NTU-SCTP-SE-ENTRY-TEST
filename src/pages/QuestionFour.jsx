import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function QuestionFour() {
  // Solution to Question Four
  const ansQuestionFour = `{}`;
  return (
    <>
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto flex flex-col h-screen">
        <div className="dark:text-teal-100">
          <h1 className="font-bold text-2xl text-center m-10">Question Four</h1>
        </div>
        <div className="ml-50 dark:text-teal-100">
          <h3 className="font-semibold text-lg my-2">Task 1</h3>
          <ul className="list-inside list-disc mb-4">
            <li>Implement a Child class that extends the Parent.</li>
            <li>Add a contructor to the Child class can calls super().</li>
            <li>
              Implement a new function addNewAbilities(newAbility) where the new
              ability will be added to the Parent&apos;s #abilities array
            </li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg my-2">Solution</h3>
          <SyntaxHighlighter
            className="text-lg"
            language="javascript"
            style={docco}
          >
            {ansQuestionFour}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default QuestionFour;
