import React from "react";
import { useForm } from "react-hook-form";

export const ReactFormValidation = ({}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (form) => {
    alert(`Required Input: ${form.requiredInput}`);
  };

  return (
    <form className="ReactFormValidation" onSubmit={handleSubmit(onSubmit)}>
      <input
        name="requiredInput"
        type="text"
        ref={register({ required: true })}
      />
      {errors.requiredInput && (
        <p>{`Input field "${errors.requiredInput.ref.name}" is required 🐑`}</p>
      )}
    </form>
  );
};
