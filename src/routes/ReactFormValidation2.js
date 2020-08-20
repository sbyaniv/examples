import React from "react";
import { useForm } from "react-hook-form";

export const ReactFormValidation2 = ({}) => {
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = (form) => {
    alert(`Short Input: ${form.limitedLength}`);
  };

  return (
    <form className="ReactFormValidation2" onSubmit={handleSubmit(onSubmit)}>
      <input
        autoComplete="off"
        name="limitedLength"
        type="text"
        ref={register({
          maxLength: {
            value: 5,
            message: "The input is too long 🤟",
          },
        })}
      />
      {errors.limitedLength && <p>{errors.limitedLength.message}</p>}
    </form>
  );
};
