import React from "react";
import { useForm } from "react-hook-form";

export const ReactFormValidation = ({}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (form) => {
    alert(`Required Input: ${form.required}`);
  };

  return (
    <form className="ReactFormValidation" onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        name="required"
        type="text"
        ref={register({ required: true })}
        style={{ fontSize: "2em" }}
      />
      {errors.required && (
        <p
          style={{ fontSize: "2em" }}
        >{`Input field "${errors.required.ref.name}" is required 🐑`}</p>
      )}
    </form>
  );
};
