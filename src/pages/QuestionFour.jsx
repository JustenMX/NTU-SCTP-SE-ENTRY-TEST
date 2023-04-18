import React from "react";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";
import Pagination from "../components/Pagination";

function QuestionFour() {
  // Solution to Question Four
  const ansQuestionFour = `
  class Parent {
    abilities = [];
  
    constructor() {
      this.abilities.push("Parenting");
      this.abilities.push("Role modeling");
    }
  
    showAbilities() {
      console.log("These are the abilities:");
      for (const a of this.abilities) {
        console.log(a);
      }
    }
  }
  
  const p = new Parent();
  p.showAbilities(); // Observe that this function prints "Parenting" and "Role modeling".
  
  // Task 1: Add code here
  class Child extends Parent {
    constructor() {
      super();
    }
  
    addNewAbility(newAbility) {
      this.abilities.push(newAbility);
    }
  }
  
  const c = new Child();
  c.addNewAbility("Dancing");
  c.showAbilities(); // This function should print "Parenting", "Role modeling" and "Dancing".
  `;
  return (
    <>
      <div className="max-w-screen-lg px-4 md:px-8 mx-auto flex flex-col relative">
        <div className="hero-overlay bg-opacity-60"></div>
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
        <div className="mb-10">
          <h3 className="font-semibold text-lg my-2">Solution</h3>
          <SyntaxHighlighter
            className="text-md"
            language="javascript"
            style={docco}
          >
            {ansQuestionFour}
          </SyntaxHighlighter>
        </div>
        <Pagination />
      </div>
    </>
  );
}

export default QuestionFour;
