import React from "react";
import MonacoEditor from "react-monaco-editor";
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

// Import the JavaScript language module
import "monaco-editor/esm/vs/basic-languages/javascript/javascript.contribution";

function CodeEditor(props) {
  const { code, readOnly } = props;

  const options = {
    selectOnLineNumbers: true,
    readOnly: true,
  };

  // Set the language for the editor
  monaco.languages.register({ id: "javascript" });

  return (
    <MonacoEditor
      //   width="800"
      height="400"
      language="javascript"
      theme="vs-dark"
      value={code}
      options={options}
    />
  );
}

export default CodeEditor;
