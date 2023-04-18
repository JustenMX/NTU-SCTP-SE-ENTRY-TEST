import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function QuestionFive() {
  // Solution to Question Four
  const ansQuestionFive = `{}`;
  return (
    <>
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto flex flex-col h-screen">
        <div className="dark:text-teal-100">
          <h1 className="font-bold text-2xl text-center m-10">Question Five</h1>
        </div>
        <div className="ml-50 dark:text-teal-100">
          <h3 className="font-semibold text-lg my-2">Task 1</h3>
          <ul className="list-inside list-disc mb-4">
            <li>Import the file `externalk.js`.</li>
            <li>
              Destructure the imported fucntion from `external.js` to display
              the string &quot;I am printing something&quot; on console.log.
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
            {ansQuestionFive}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default QuestionFive;
