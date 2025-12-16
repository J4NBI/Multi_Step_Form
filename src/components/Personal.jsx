import React from "react";

export default function Personal(props) {
  const [isRequiered, setIsRequiered] = React.useState({
    name: false,
    email: false,
    phone: false,
  });

  const [isFiledCorrect, setIsFiledCorrect] = React.useState({
    name: false,
    email: false,
    phone: false,
  });

  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [phone, setPhone] = React.useState("");

  // SET LOCALSTAGE DATA TO VALUES
  React.useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("personalData"));

    if (savedData) {
      setName(savedData.name);
      setEmail(savedData.email);
      setPhone(savedData.phone);
    }
  }, []);

  // VALUES AND REGEX
  function changeName(e) {
    const val = e.target.value;
    setName(val);
    const regEx = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    setIsFiledCorrect((prev) => ({ ...prev, name: regEx.test(val) }));
  }

  function changeEmail(e) {
    const val = e.target.value;
    setEmail(val);
    const regEx = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsFiledCorrect((prev) => ({ ...prev, email: regEx.test(val) }));
    setIsRequiered((prev) => ({ ...prev, email: false }));
  }

  function changePhone(e) {
    const val = e.target.value;
    setPhone(val);
    const regEx = /^(?:[+\d][\d\s-]*)\d{6,}$/;
    setIsFiledCorrect((prev) => ({ ...prev, phone: regEx.test(val) }));
    setIsRequiered((prev) => ({ ...prev, phone: false }));
  }

  // SET PERSONAL INFO TO LOCAL STAGE REGEX BEFOR REQUIRE BEFORE

  function getPersonalInfo() {
    const regExName = /^[A-Za-zÀ-ÖØ-öø-ÿ]+(?:[ '-][A-Za-zÀ-ÖØ-öø-ÿ]+)*$/;
    const regExEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const regExPhone = /^(?:[+\d][\d\s-]*)\d{6,}$/;
    const personalData = { name, email, phone };
    if (regExName.test(personalData.name)) {
      console.log("name OK");
      setIsRequiered((prev) => ({ ...prev, name: true }));
    } else {
      setIsRequiered((prev) => ({ ...prev, name: false }));
    }

    if (regExEmail.test(personalData.email)) {
      console.log("email OK");
      setIsRequiered((prev) => ({ ...prev, email: true }));
    } else {
      setIsRequiered((prev) => ({ ...prev, email: false }));
      
    }
    if (regExPhone.test(personalData.phone)) {
      console.log("phone OK");
      setIsRequiered((prev) => ({ ...prev, phone: true }));
    } else {
      setIsRequiered((prev) => ({ ...prev, phone: false }));
    }
    if (
      regExEmail.test(personalData.email) &&
      regExPhone.test(personalData.phone) &&
      regExName.test(personalData.name)
    ) {
      localStorage.setItem("personalData", JSON.stringify(personalData));
      const savedData = JSON.parse(localStorage.getItem("personalData"));
      console.log(savedData);
      props.nextStep();
    }
  }

  return (
    <div className="container-content">
      <div className="content-div">
        <h2 className="heading">Personal Info</h2>
        <p className="subhead">
          Please provide your name, email address, and phone number.
        </p>
        <form
          id="personalForm"
          onSubmit={(e) => {
            e.preventDefault();
            getPersonalInfo();
          }}
        >
          <div className="input-heading">
            <label htmlFor="name">Name</label>
            <p
              className="requiered-heading"
              style={{ display: isRequiered.name ? "block" : "none" }}
            >
              This field is required
            </p>
          </div>
          <input
            type="text"
            name="name"
            id="name"
            required
            placeholder="Jon Doe"
            value={name}
            style={{
              border: isFiledCorrect.name ? "1px solid green" : undefined,
            }}
            onChange={changeName}
          />

          <div className="input-heading">
            <label htmlFor="email">Email Address</label>
            <p
              className="requiered-heading"
              style={{ display: isRequiered.email ? "block" : "none" }}
            >
              This field is required
            </p>
          </div>
          <input
            type="email"
            name="email"
            id="email"
            required
            placeholder="jondoe@web.de"
            value={email}
            style={{
              border: isFiledCorrect.email ? "1px solid green" : undefined,
            }}
            onChange={changeEmail}
          />

          <div className="input-heading">
            <label htmlFor="phone">Phone Number</label>
            <p
              className="requiered-heading"
              style={{ display: isRequiered.phone ? "block" : "none" }}
            >
              This field is required
            </p>
          </div>
          <input
            type="text"
            name="phone"
            id="phone"
            placeholder="0152 220030 300"
            value={phone}
            style={{
              border: isFiledCorrect.phone ? "1px solid green" : undefined,
            }}
            onChange={changePhone}
          />
        </form>
      </div>
      <button
        className="nextStep-btn personal-next-btn"
        type="submit"
        form="personalForm"
      >
        Next Step
      </button>
    </div>
  );
}
