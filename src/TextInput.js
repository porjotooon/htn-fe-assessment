import React, { useId } from "react";

function TextInput({ id, label, ...delegated }) {
  let generatedId = useId();
  let appliedId = id || generatedId;

  return (
    <>
      <label htmlFor={appliedId}>{label}</label>
      <input id={appliedId} {...delegated} />
    </>
  );
}

export default TextInput;
