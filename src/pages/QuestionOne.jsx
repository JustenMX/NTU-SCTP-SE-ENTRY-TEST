import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function QuestionOne() {
  // Solution to Question One
  const ansQuestionOne = `
  // Task 1
    function swap(x, y) {
      if (typeof x !== "number" || typeof y !== "number") {
        console.log(-1);
      } else {
        [x, y] = [y, x];
        console.log(\`Swapped values: x=\${x}, y=\${y}\`);
      }
    }

  // Task 2
    swap(2, 3);
    swap(2, "animal");
    swap(100, 2000);
  }
  `;

  return (
    <>
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto flex flex-col h-screen">
        <div className="dark:text-teal-100">
          <h1 className="font-bold text-2xl text-center m-10">Question One</h1>
        </div>
        <div className="ml-50 dark:text-teal-100">
          <h3 className="font-semibold text-lg my-2">Task 1</h3>
          <ul className="list-inside list-disc">
            <li>
              Create a function that would swap the value of x and y using only
              x and y as variables.
            </li>
            <li>x and y must be numeric</li>
            <li>return -1 if x and y is not numeric</li>
            <li>print the swapped values in the console</li>
          </ul>
          <h3 className="font-semibold text-lg mt-4 mb-2">Task 2</h3>
          <ul className="list-inside list-disc mb-4">
            <li>Invoke the function &quot;swap&quot;</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-lg my-2">Solution</h3>
          <SyntaxHighlighter
            className="text-lg"
            language="javascript"
            style={docco}
          >
            {ansQuestionOne}
          </SyntaxHighlighter>
        </div>
      </div>
    </>
  );
}

export default QuestionOne;
