import React from "react";
import TextField from "../TextField/TextField";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  values: any;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormPersonalDetails: React.FC<Props> = ({
  nextStep,
  prevStep,
  values,
  handleChange,
}) => {
  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();
    nextStep();
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    prevStep();
  };

  return (
    <form className="step">
      <h2>Enter Personal Details</h2>
      <TextField
        placeholder="Enter Your Occupation"
        label="Occupation"
        name="occupation"
        onChange={handleChange}
        initialValue={values.occupation}
      />
      <TextField
        placeholder="Enter Your City"
        label="City"
        name="city"
        onChange={handleChange}
        initialValue={values.city}
      />
      <TextField
        placeholder="Enter Your Bio"
        label="Bio"
        name="bio"
        onChange={handleChange}
        initialValue={values.bio}
      />

      <button onClick={handleBack}>Back</button>

      <button onClick={handleContinue}>Continue</button>
    </form>
  );
};

export default FormPersonalDetails;
