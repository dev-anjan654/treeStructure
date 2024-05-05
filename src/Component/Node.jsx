import React from "react";

const Node = ({ value, children, onClick, node, addNode }) => {

  return (
    <li>
      <div className="node" onClick={onClick}>
      <div className="node-box">
        <div className="upper-node">Action:</div>
        <div className="node-title">
          {value}
        </div>
        <button className="add-btn" onClick={() => addNode(node)}>+</button>
      </div>
      <div className="children">{children}</div>
    </div>
    </li>
  );
};

export default Node;
