import React, { useState, useEffect } from "react";

export default function Add(props) {
  // State für ausgewählte Add-ons
  const [selectedAddons, setSelectedAddons] = useState([]);

  // Liste der Add-ons
  const addons = [
    {
      id: "Online services",
      headline: "Online services",
      subtext: "Access to multiplayer games",
      money: "+$1/mo",
      count: 1,
    },
    {
      id: "Larger storage",
      headline: "Larger storage",
      subtext: "Extra 1TB of cloud save money",
      money: "+$2/mo",
      count: 2,
    },
    {
      id: "Customizable Profile",
      headline: "Customizable Profile",
      subtext: "Custom theme on your profile",
      money: "+$2/mo",
      count: 2,
    },
  ];

  // Daten aus localStorage laden (falls vorhanden)
  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("AddData"));
    if (savedData) {
      setSelectedAddons(savedData);
    }
  }, []);

  // Checkbox ändern
  function handleCheckboxChange(id) {
    setSelectedAddons((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  }

  // Next Step
  function handleNextStep(e) {
    e.preventDefault();
    localStorage.setItem("AddData", JSON.stringify(selectedAddons));
    props.nextStep();
  }

  // Prev Step
  function handlePrevStep() {
    localStorage.setItem("AddData", JSON.stringify(selectedAddons));
    props.prevStep();
  }

  return (
    <div className="container-content">
      <div className="content-div">
        <div className="content">
          <h2 className="heading">Pick add-ons</h2>
          <p className="subhead">
            Add-ons help enhance your gaming experience.
          </p>
          <form onSubmit={handleNextStep} id="addForm">
            {addons.map((addon) => (
              <label key={addon.id} className="addon-checkbox">
                <input
                  type="checkbox"
                  checked={selectedAddons.includes(addon.id)}
                  onChange={() => handleCheckboxChange(addon.id)}
                />
                <div className="addon-content">
                  <div className="addon-text">
                    <h4>{addon.headline}</h4>
                    <p>{addon.subtext}</p>
                  </div>
                  <p>
                    {!props.isYearly
                      ? `$${addon.count}/mon`
                      : `$${addon.count * 12}/year`}
                  </p>
                </div>
              </label>
            ))}
          </form>
        </div>

        <div className="btns">
          <button className="goBack-btn" type="button" onClick={handlePrevStep}>
            Go Back
          </button>
          <button
            className="nextStep-btn personal-next-btn"
            type="submit"
            form="addForm"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}
