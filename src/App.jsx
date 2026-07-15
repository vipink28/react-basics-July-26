// Component - A component is a javascript function which returns xml or html.
// A components name must start with capital letter.

import Counter from "./components/Counter";
import Header from "./components/Header";
import ReactState from "./components/ReactState";
import Revision from "./components/Revision";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Revision />
      <Header />
      <ReactState />
      <Counter />
      <StudentList />
    </div>
  );
}
export default App;
