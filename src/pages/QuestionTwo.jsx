import React from "react";
// import SyntaxHighlighter from "react-syntax-highlighter";
// import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Pagination from "../components/Pagination";
import CodeEditor from "../components/CodeEditor";

function QuestionTwo() {
  // Solution to Question Two
  const ansQuestionTwo = `
  // Task 1
  const nameList = [];

  // Task 2
  function addPatient(patientName) {
    nameList.push(patientName);
  }

  // Task 3
  function listPatient() {
    console.log(nameList)
  }

  addPatient("John");
  addPatient("Mary");
  addPatient("Mark");

  listPatient();
  `;

  return (
    <>
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto flex flex-col relative">
        <div className="dark:text-teal-100">
          <h1 className="font-bold text-2xl text-center m-10">Question Two</h1>
        </div>
        <div className="ml-50 dark:text-teal-100">
          <h3 className="font-semibold text-lg my-2">Task 1</h3>
          <ul className="list-inside list-disc">
            <li>
              Declare an array that are going to be used to store the
              patient&apos;s name.
            </li>
          </ul>
          <h3 className="font-semibold text-lg mt-4 mb-2">Task 2</h3>
          <ul className="list-inside list-disc mb-4">
            <li>
              Add code to add patient&apos;s name into the array declared in
              task 1.
            </li>
          </ul>
          <h3 className="font-semibold text-lg mt-4 mb-2">Task 3</h3>
          <ul className="list-inside list-disc mb-4">
            <li>
              Implement listPatient() function to print all patient&apos; name
              stored in the array
            </li>
          </ul>
        </div>
        <div className="mb-10">
          <h3 className="font-semibold text-lg my-2">Solution</h3>
          <CodeEditor code={ansQuestionTwo} />
          {/* <SyntaxHighlighter
            className="text-md"
            language="javascript"
            style={docco}
          >
            {ansQuestionTwo}
          </SyntaxHighlighter> */}
        </div>
        <Pagination />
      </div>
    </>
  );
}

export default QuestionTwo;
