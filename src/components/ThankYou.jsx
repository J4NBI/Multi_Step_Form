import React from "react";

export default function ThankYou() {
  let [completeData, setCompleteData] = React.useState({
    personal: null,
    selected: null,
    addon: [],
  });
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
    const timer = setTimeout(() => {
      localStorage.clear();
      window.location.reload();
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  function SubmitData() {
    localStorage.clear();
  }

  return (
    <>
      THANK YOU. DATA SEND!<br></br>
      <br />
      <pre>{JSON.stringify(completeData, null, 2)}</pre>
    </>
  );
}
