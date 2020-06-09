import React from "react";
import { postUser } from "../../service/api";

interface Props {
  nextStep: () => void;
  prevStep: () => void;
  values: { [key: string]: string };
}

const Confirm: React.FC<Props> = ({ nextStep, prevStep, values }) => {
  const handleContinue = (e: React.MouseEvent) => {
    e.preventDefault();
    // PROCESS FORM //
    postUser(values)
      .then(() => {
        nextStep();
      })
      .catch((err) => {
        console.log(err);
        throw err;
      });
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    prevStep();
  };

  const { firstName, lastName, email, occupation, city, bio } = values;

  return (
    <div className="step">
      <h2>Confirm User Data</h2>
      <dl>
        <dt>First Name</dt>
        <dd>{firstName}</dd>

        <dt>Last Name</dt>
        <dd>{lastName}</dd>

        <dt>Email</dt>
        <dd>{email}</dd>

        <dt>Occupation</dt>
        <dd>{occupation}</dd>

        <dt>City</dt>
        <dd>{city}</dd>

        <dt>Bio</dt>
        <dd>{bio}</dd>
      </dl>
      <button onClick={handleBack}>Back</button>
      <button onClick={handleContinue}>Confirm</button>
    </div>
  );
};

export default Confirm;
