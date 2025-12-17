import React from "react";

export default function Summary(props) {
  let [completeData, setCompleteData] = React.useState({
    personal: null,
    selected: null,
    addon: [],
  });
  function SubmitData() {
    localStorage.clear();
  }

  React.useEffect(() => {
    const savedDataPersonal = JSON.parse(localStorage.getItem("personalData"));
    const savedDataSelected = JSON.parse(localStorage.getItem("SelectData"));
    const savedDataAddon = JSON.parse(localStorage.getItem("AddData"));

    if (savedDataPersonal && savedDataSelected) {
      setCompleteData({
        personal: savedDataPersonal,
        selected: savedDataSelected,
        addon: savedDataAddon || [],
      });
    }
  }, []);

  function handleChange() {
    props.prevStep();
    props.prevStep();
  }

  console.log(completeData);

  // Genrate Summary
  let totalPrice = 0;
  let plan;

  // ADD SELECT

  if (completeData.selected?.plan === "arcade") {
    plan = { name: "Aracde", price: 9 };
    totalPrice += 9;
  } else if (completeData.selected?.plan === "advanced") {
    plan = { name: "Advanced", price: 12 };
    totalPrice += 12;
  } else if (completeData.selected?.plan === "pro") {
    plan = { name: "Pro", price: 15 };
    totalPrice += 15;
  }
  if (completeData.selected?.billingType === "yearly") {
    totalPrice = totalPrice * 12 - ((totalPrice * 12) / 100) * 25;
  }

  // ADD ADDONS

  completeData.addon.forEach((a, index) => {
    if (!props.isYearly) {
      totalPrice += index === 0 ? 1 : 2;
    } else {
      totalPrice += index === 0 ? 10 : 12;
    }
  });

  return (
    <div className="container-content">
      <div className="content-div">
        <div className="content">
          <h2 className="heading">Finishing up</h2>
          <p className="subhead">
            Double-check everything looks OK before confirming.
          </p>
        </div>
        <div className="Summary-content">
          <div className="div-select">
            <div className="div-select-text">
              <div className="content-select">
                <h4>{plan && plan.name}</h4>

                {/*----PLAN  -----*/}
                <p>
                  {`(${completeData.selected?.billingType
                    .substring(0, 1)
                    .toUpperCase()}${completeData.selected?.billingType.substring(
                    1
                  )})`}
                </p>
              </div>
              <button onClick={handleChange}>Change</button>
            </div>
            <p className="select-price">
              {completeData.selected?.billingType === "monthly" &&
                `$${plan.price}/mon`}
              {completeData.selected?.billingType === "yearly" &&
                `$${plan.price * 12}/year`}
            </p>
          </div>
          <p className="procent">
            {completeData.selected?.billingType === "yearly" &&
              `20% yearly discount - $${((plan.price * 12) / 100) * 25}/year`}
          </p>

          {/*----ADD ONS -----*/}
          <div className="summary-addons">
            {completeData.addon &&
              completeData.addon.map((a, index) => (
                <div className="summary-addons-items">
                  <p>{a}</p>
                  <p>
                    {!props.isYearly
                      ? index === 0
                        ? `$1/${props.isYearly ? "year" : "mon"}`
                        : `$2/${props.isYearly ? "year" : "mon"}`
                      : index === 0
                      ? `$10/${props.isYearly ? "year" : "mon"}`
                      : `$12/${props.isYearly ? "yaer" : "mon"}`}
                  </p>
                </div>
              ))}
          </div>
          {/*------TOTAL PRICE------*/}

          <div className="total-div">
            <p>
              Total price{" "}
              {completeData.selected?.billingType === "monthly" &&
                `(per month)`}
              {completeData.selected?.billingType === "yearly" && `(per year)`}
            </p>
            <p>
              {`$${totalPrice}`}{" "}
              {completeData.selected?.billingType === "monthly" && `/mon`}
              {completeData.selected?.billingType === "yearly" && `/year`}
            </p>
          </div>
        </div>

        <div className="btns">
          <button className="goBack-btn" type="button" onClick={props.prevStep}>
            Go Back
          </button>
          <button className="nextStep-btn personal-next-btn">Next Step</button>
        </div>
      </div>
    </div>
  );
}
