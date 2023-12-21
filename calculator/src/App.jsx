import Display from "./Compontents/Display";
import Index from "./Compontents/Index";
import "./App.css";
import { useState } from "react";

function App() {
  const [data, setdate] = useState("");
  const handler = (name) => {
    if (name === "c") {
      setdate("");
    } else if (name === "=") {
      const result = eval(data);
      setdate(result);
    } else {
      let manish = data + name;
      setdate(manish);
    }
  };

  return (
    <>
      <div className="tpp">
        <Display data={data}></Display>
        <Index handler={handler}></Index>
      </div>
    </>
  );
}
export default App;
