import React from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

export const ReactFormValidation3 = ({}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (form) => {
    alert(`Multiple validation Input: ${form.mulitpleValidation}`);
  };

  console.log(errors);
  return (
    <form className="ReactFormValidation3" onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        name="mulitpleValidation"
        type="text"
        ref={register({
          maxLength: {
            value: 20,
            message: "The input is too long 🤟",
          },
          validate: {
            isEmail: (value) =>
              validator.isEmail(value) || "Not a valid email 📧",
          },
          pattern: {
            value: /^[A-Za-z@.]+$/,
            message: "Input can not contain numbers",
          },
        })}
        style={{ fontSize: "2em", width: 600, textAlign: "center" }}
      />
      {errors.mulitpleValidation && (
        <p style={{ fontSize: "2em" }}>{errors.mulitpleValidation.message}</p>
      )}
    </form>
  );
};
