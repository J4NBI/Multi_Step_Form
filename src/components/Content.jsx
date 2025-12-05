import Personal from "./Personal";
import Select from "./Select";
import Add from "./Add";
import Summary from "./Summary";
import ThankYou from "./ThankYou";

export default function Content(props) {
  return (
    <>
      <div id="formContainer">
        <div className="form-div">
          {props.isActive === 1 && (
            <Personal nextStep={props.nextStep} prevStep={props.prevStep} />
          )}
          {props.isActive === 2 && (
            <Select nextStep={props.nextStep} prevStep={props.prevStep} />
          )}
          {props.isActive === 3 && (
            <Add nextStep={props.nextStep} prevStep={props.prevStep} />
          )}
          {props.isActive === 4 && (
            <Summary nextStep={props.nextStep} prevStep={props.prevStep} />
          )}
          {props.isActive === 5 && (
            <ThankYou nextStep={props.nextStep} prevStep={props.prevStep} />
          )}
        </div>
      </div>
    </>
  );
}
