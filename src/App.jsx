// Component - A component is a javascript function which returns xml or html.

import Counter from "./components/Counter";
import Header from "./components/Header";
import ReactState from "./components/ReactState";

// A components name must start with capital letter.
function App() {
  return (
    <div>
      <h1>App Component</h1>
      <Header />
      <ReactState />
      <Counter />
    </div>
  );
}
export default App;
