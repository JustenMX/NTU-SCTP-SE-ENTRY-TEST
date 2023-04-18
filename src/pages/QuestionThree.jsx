import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function QuestionThree() {
  // Solution to Question Three
  const ansQuestionThree = `
  const dog = {
    petName: "Bobby",
  };
  
  // Task 1
  dog.breed = "Poodle";
  console.log(dog);
  
  // Task 2
  for (const key in dog) {
    console.log(key);
  }
  `;

  return (
    <>
      <div
        className="hero min-h-screen bg-cover bg-center"
        style={{
          backgroundImage: `url("https://images.unsplash.com/photo-1579547945413-497e1b99dac0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3870&q=80")`,
        }}
      >
        <div className="hero-overlay bg-opacity-60"></div>
        <div className="max-w-screen-lg px-4 md:px-8 mx-auto flex flex-col h-screen">
          <div className="dark:text-teal-100">
            <h1 className="font-bold text-2xl text-center m-10">
              Question Three
            </h1>
          </div>
          <div className="ml-50 dark:text-teal-100">
            <h3 className="font-semibold text-lg my-2">Task 1</h3>
            <ul className="list-inside list-disc">
              <li>
                Add a new property &quot;breed&quot; with the value
                &quot;Poodle&quot;
              </li>
            </ul>
            <h3 className="font-semibold text-lg mt-4 mb-2">Task 2</h3>
            <ul className="list-inside list-disc mb-4">
              <li>
                Implement a for-in loop through the keys in &quot;dog&quot;
                object and print it with console.log
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold text-lg my-2">Solution</h3>
            <SyntaxHighlighter
              className="text-md"
              language="javascript"
              style={docco}
            >
              {ansQuestionThree}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>
    </>
  );
}

export default QuestionThree;
