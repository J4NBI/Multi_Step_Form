import { useState } from "react";
import React from "react";
import arcade from "../images/icon-arcade.svg";
import advanced from "../images/icon-advanced.svg";
import pro from "../images/icon-pro.svg";

export default function Select(props) {
  const [yearly, setYearly] = useState(false);
  const [plan, setPlan] = useState("arcade");

  React.useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("SelectData"));
    console.log(savedData.plan);
    console.log(savedData.billingType);
    if (savedData) {
      if (savedData.billingType === "yearly") {
        setYearly(true);
      }
      setPlan(savedData.plan);
    }
  }, []);

  function getSelectForm(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const submitObject = Object.fromEntries(formData);
    if (submitObject.plan && submitObject.billingType) {
      localStorage.setItem("SelectData", JSON.stringify(submitObject));

      props.nextStep();
    }
  }

  return (
    <div className="container-content">
      <div className="content-div">
        <div className="content">
          <h2 className="heading">Select your plan</h2>
          <p className="subhead">
            You have the option of monthly or yearly billing.
          </p>
          <form onSubmit={getSelectForm} id="selectForm">
            <div className="billings">
              <label className="billing-box">
                <input
                  type="radio"
                  name="plan"
                  value="arcade"
                  checked={plan === "arcade"}
                  onChange={() => setPlan("arcade")}
                />
                <div className="billing-content">
                  <img src={arcade} alt="Arcade Icon" />
                  <div className="billing-content-text">
                    <h4>Arcade</h4>
                    <p>$9/mo</p>
                  </div>
                </div>
              </label>

              <label className="billing-box">
                <input
                  type="radio"
                  name="plan"
                  value="advanced"
                  checked={plan === "advanced"}
                  onChange={() => setPlan("advanced")}
                />
                <div className="billing-content">
                  <img src={advanced} alt="Advanced Icon" />
                  <div className="billing-content-text">
                    <h4>Advanced</h4>
                    <p>$12/mo</p>
                  </div>
                </div>
              </label>

              <label className="billing-box">
                <input
                  type="radio"
                  name="plan"
                  value="pro"
                  checked={plan === "pro"}
                  onChange={() => setPlan("pro")}
                />
                <div className="billing-content">
                  <img src={pro} alt="Pro Icon" />
                  <div className="billing-content-text">
                    <h4>Pro</h4>
                    <p>$15/mo</p>
                  </div>
                </div>
              </label>
            </div>

            <div className="toggle-container">
              <label>
                <input
                  type="radio"
                  name="billingType"
                  value="monthly"
                  checked={!yearly}
                  onChange={() => setYearly(!yearly)}
                  readOnly
                />
                <span>Monthly</span>
              </label>

              <label className="switch">
                <input
                  type="checkbox"
                  checked={yearly}
                  onChange={() => setYearly(!yearly)}
                />
                <span className="slider"></span>
              </label>

              <label>
                <input
                  type="radio"
                  name="billingType"
                  value="yearly"
                  checked={yearly}
                  readOnly
                />
                <span>Yearly</span>
              </label>
            </div>
          </form>
        </div>

        <div className="btns">
          <button className="goBack-btn" onClick={props.prevStep}>
            Go Back
          </button>
          <button
            className="nextStep-btn personal-next-btn"
            type="submit"
            form="selectForm"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
