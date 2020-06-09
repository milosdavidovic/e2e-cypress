import React from "react";

interface Props {
  initialValue: string;
  placeholder: string;
  name: string;
  label: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextField: React.FC<Props> = ({
  label,
  name,
  placeholder,
  onChange,
  initialValue,
}) => {
  return (
    <>
      <label htmlFor={name}>{label}</label>
      <input
        id={name}
        name={name}
        onChange={onChange}
        defaultValue={initialValue}
        placeholder={placeholder}
        type="textarea"
        autoComplete="off"
      />
    </>
  );
};

export default TextField;
