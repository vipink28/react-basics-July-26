// Component - A component is a javascript function which returns xml or html.
// A components name must start with capital letter.

import Counter from "./components/Counter";
import CustomInput from "./components/CustomInput";
import Form from "./components/Form";
import Header from "./components/Header";
import Parent from "./components/Parent";
import ReactState from "./components/ReactState";
import Revision from "./components/Revision";
import StudentList from "./components/StudentList";

function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Form />

      <CustomInput label="Username" type="text" />
      <CustomInput label="Username" type="text" placeholder="Phone" />
      <Parent />
      <Revision />
      <Header />
      <ReactState />
      <Counter />
      <StudentList />
    </div>
  );
}
export default App;
