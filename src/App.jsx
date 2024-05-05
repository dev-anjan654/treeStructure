import React, { useState } from "react";
import "./App.css";
import Node from "./Component/Node";

// Define the App component
const App = () => {

  // Define state to manage the tree structure
  const [tree, setTree] = useState({
    value: "Root",
    children: [],
  });
  // Function to add a new node
  const addNode = (parentNode) => {
    const newValue = prompt('Enter node value:');
    if (newValue) {
      const newNode = { value: newValue, children: [] };
      parentNode.children.push(newNode);
      setTree({ ...tree });
    }
  };
  
  // Function to render all the nodes
  const renderNodes = (node) => {
    return (
      <Node 
        key={node.value}
        value={node.value}
        addNode={addNode}
        node={node}
        >
        <ul>
            {node.children.map(child => renderNodes(child))}
        </ul>
      </Node>
    );
  };

  return (
    <div className="app">
      <h1>Tree Structure</h1>
      <div className="tree">{renderNodes(tree)}</div>
    </div>
  );
};

export default App;
