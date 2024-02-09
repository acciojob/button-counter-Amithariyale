
import React from "react";
import './../styles/App.css';

const App = () => {
  let [cnt, setCnt] = useState(0);
  const incrementCnt = () => {
    setCnt(cnt + 1);
  };
  return (
    <div>
      {/* Do not remove the main div */}
      <p>Button clicked {cnt} times</p>
      <button onClick={incrementCnt}>Click me</button>
    </div>
  );
}

export default App
