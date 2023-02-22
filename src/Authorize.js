import React, { useState } from "react";

// Due to shortage of time, I added a toy validation
// since I would not be able to implement
// authentication in such a short time.
const CORRECT_CODE = "123456";

function Authorize({ setIsAuthorized }) {
  const [code, setCode] = useState("");

  function handleSubmit(event) {
    event.preventDefault();

    const isCorrect = code === CORRECT_CODE;

    isCorrect
      ? setIsAuthorized(true)
      : window.alert("Try a different code to unlock 🔓");
  }

  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <input
          id="auth-code"
          type="text"
          placeholder="Unlock events...🔐"
          required={true}
          maxLength={6}
          value={code}
          onChange={(event) => {
            setCode(event.target.value);
          }}
        />
        <button>Validate</button>
      </div>
    </form>
  );
}

export default Authorize;
