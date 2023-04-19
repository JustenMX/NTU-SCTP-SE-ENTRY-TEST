import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Pagination from "../components/Pagination";

function QuestionFive() {
  // Solution to Question Five
  const ansQuestionFive = `
  // Task 1:
  import { print } from "./external.js";
  
  print();
  `;
  return (
    <>
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto flex flex-col relative">
        <div className="dark:text-teal-100">
          <h1 className="font-bold text-2xl text-center m-10">Question Five</h1>
        </div>
        <div className="ml-50 dark:text-teal-100">
          <h3 className="font-semibold text-lg my-2">Task 1</h3>
          <ul className="list-inside list-disc mb-4">
            <li>Import the file `external.js`.</li>
            <li>
              Destructure the imported fucntion from `external.js` to display
              the string &quot;I am printing something&quot; on console.log.
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="font-semibold text-lg my-2">Solution</h3>
          <SyntaxHighlighter
            className="text-md"
            language="javascript"
            style={docco}
          >
            {ansQuestionFive}
          </SyntaxHighlighter>
        </div>
        <Pagination />
      </div>
    </>
  );
}

export default QuestionFive;
