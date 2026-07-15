import { useState } from "react";

function Revision() {
  // state - State is a components memory.
  let title = "React State";
  const handleTitle = () => {
    title = "New State";
  };

  // useState() - useState() hook is used to create and update state variable.
  // const [statevariable, stateSetterFunction] = useState(initialvalue);

  const [stateTitle, setStateTitle] = useState("I am state variable");
  const handleStateTitle = () => {
    setStateTitle("New state Variable Change");
  };

  return (
    <div>
      <h1>{title}</h1>
      <button onClick={handleTitle}>Change Title</button>

      <h1>{stateTitle}</h1>
      <button onClick={handleStateTitle}>Change State Title</button>
    </div>
  );
}
export default Revision;
