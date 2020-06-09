import React from "react";
import TextField from "../TextField/TextField";

interface Props {
  nextStep: () => void;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  values: any;
}

const FormUserDetails: React.FC<Props> = ({
  nextStep,
  handleChange,
  values,
}) => {
  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();
    nextStep();
  };

  return (
    <form className="step">
      <h2>Enter User Details</h2>
      <TextField
        placeholder="Enter Your First Name"
        label="First Name"
        name="firstName"
        onChange={handleChange}
        initialValue={values.firstName}
      />
      <TextField
        placeholder="Enter Your Last Name"
        label="Last Name"
        name="lastName"
        onChange={handleChange}
        initialValue={values.lastName}
      />
      <TextField
        placeholder="Enter Your Email"
        label="Email"
        name="email"
        onChange={handleChange}
        initialValue={values.email}
      />
      <button onClick={handleContinue}>Continue</button>
    </form>
  );
};

export default FormUserDetails;
