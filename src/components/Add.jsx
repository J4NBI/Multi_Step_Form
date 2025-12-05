export default function Add(props) {
  return (
    <>
      ADD
      <div className="btns">
        <button className="goBack-btn" onClick={props.prevStep}>
          Go Back
        </button>
        <button className="nextStep-btn" onClick={props.nextStep}>
          Next Step
        </button>
      </div>
    </>
  );
}
