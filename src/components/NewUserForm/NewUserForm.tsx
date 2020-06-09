import React, { useState } from "react";

import Confirm from "../Confirm/Confirm";
import Success from "../Success/Success";
import FormUserDetails from "../UserDetails/UserDetails";
import FormPersonalDetails from "../PersonalDetails/PersonalDetails";

const initialState = {
  firstName: "",
  lastName: "",
  email: "",
  occupation: "",
  city: "",
  bio: "",
};
const UserForm: React.FC = () => {
  const [values, setValues] = useState<{ [key: string]: string }>(initialState);
  const [step, setStep] = useState(1);

  // Proceed to next step
  const nextStep = () => {
    setStep((s) => s + 1);
  };

  // Go back to prev step
  const prevStep = () => {
    setStep((s) => s - 1);
  };

  // Handle fields change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.currentTarget;
    setValues((s) => ({ ...s, [name]: value }));
  };

  if (step === 1) {
    return (
      <FormUserDetails
        nextStep={nextStep}
        handleChange={handleChange}
        values={values}
      />
    );
  }
  if (step === 2) {
    return (
      <FormPersonalDetails
        nextStep={nextStep}
        prevStep={prevStep}
        handleChange={handleChange}
        values={values}
      />
    );
  }
  if (step === 3) {
    return <Confirm nextStep={nextStep} prevStep={prevStep} values={values} />;
  }
  if (step === 4) {
    return <Success />;
  }
  return <div>"This is a multi-step form built with React."</div>;
};

export default UserForm;
