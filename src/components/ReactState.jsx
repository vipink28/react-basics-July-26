import { useState } from "react";

function ReactState() {
  // state - State is a components memory.

  // the problem with following function -
  // 1. it doesn't re-render the code so that dom is updated.
  // 2. local variables cannot persist(stay in memory) between renders.

  let title = "React State";
  const changeTitle = () => {
    console.log(title);
    title = "New React State";
    console.log(title);
  };

  // to manage state update we have a hook provided by react - useState();
  // syntax - const = [stateVarible, stateSetterFunction]=useState(initialValue);

  const [stateTitle, setStateTitle] = useState("React State Title");
  const changeStateTitle = () => {
    setStateTitle("New State Title");
  };
  return (
    <div>
      <h1>{title}</h1>
      <button onClick={changeTitle}>Change Title</button>

      <h1>{stateTitle}</h1>
      <button onClick={changeStateTitle}>Change Title Using State</button>
    </div>
  );
}
export default ReactState;
