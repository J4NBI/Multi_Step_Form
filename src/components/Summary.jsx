export default function Summary(props) {
  function SubmitData() {
    localStorage.clear();
  }
  return (
    <>
      SUMMARY
      <div className="btns">
        <button className="goBack-btn" onClick={props.prevStep}>
          Go Back
        </button>
        <button className="confirm-btn">Confirm</button>
      </div>
    </>
  );
}
