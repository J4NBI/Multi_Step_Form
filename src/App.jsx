import Sidebar from "./components/Sidebar";
import Content from "./components/Content";
import "./styles.css";
import React from "react";

export default function App() {
  let [isActive, setIsActive] = React.useState(1);

  function nextStep() {
    setIsActive((prev) => (prev < 5 ? prev + 1 : prev));
  }

  function prevStep() {
    setIsActive((prev) => (prev > 1 ? prev - 1 : prev));
  }
  return (
    <div className="App">
      <div className="container">
        <Sidebar isActive={isActive} />
        <Content isActive={isActive} nextStep={nextStep} prevStep={prevStep} />
      </div>
    </div>
  );
}
