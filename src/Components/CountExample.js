import React, { useState } from "react";

function Count() {
  const [countNo, setCount] = useState(0); //standard practice is to make second variable the setter for the first var
  //more about useState https://reactjs.org/docs/hooks-state.html
  return (
    <div className="bg-gray-100 ">
      <h1 className="bg-gray-300">{countNo}</h1>
      <button
        className="bg-green-300 border-b"
        onClick={() => setCount(countNo + 1)}
      >
        Plus{" "}
      </button>
      <p></p>
      <button
        className="bg-red-300 border-b"
        onClick={() => setCount(countNo - 1)}
      >
        Minus
      </button>
    </div>
  );
}

export default Count;
