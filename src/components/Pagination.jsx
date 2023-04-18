import React from "react";
import { Link } from "react-router-dom";

function Pagination() {
  return (
    <div className="flex items-center justify-between  bg-indigo-600 px-4 py-3 sm:px-6 mb-10">
      <div className="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
        <div>
          <p className="text-sm text-gray-700 dark:text-slate-100">
            Question Pages
          </p>
        </div>
        <div>
          <Link
            to="/QuestionOne"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-emerald-700 focus:z-20 focus:outline-offset-0 dark:text-slate-100"
          >
            Q1
          </Link>
          <Link
            to="/QuestionTwo"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-emerald-700 focus:z-20 focus:outline-offset-0 dark:text-slate-100"
          >
            Q2
          </Link>
          <Link
            to="/QuestionThree"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-emerald-700 focus:z-20 focus:outline-offset-0 dark:text-slate-100"
          >
            Q3
          </Link>
          <Link
            to="/QuestionFour"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-emerald-700 focus:z-20 focus:outline-offset-0 dark:text-slate-100"
          >
            Q4
          </Link>
          <Link
            to="/QuestionFive"
            className="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-emerald-700 focus:z-20 focus:outline-offset-0 dark:text-slate-100"
          >
            Q5
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Pagination;
