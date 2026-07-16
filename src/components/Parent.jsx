import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div>
      <h1>Parent</h1>
      <div>
        <Child title="Child 1" showDetails={true} />
        <Child title="Child 2" />
        <Child title="Child 3" showDetails={true} />
        <Child title="Child 4" />

        <Child title="Child 5">
          <p>I am child element</p>
        </Child>
      </div>
    </div>
  );
};

export default Parent;
