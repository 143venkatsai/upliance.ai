import React, { useState } from "react";

const Counter = () => {
  const [count, setCount] = useState(
    JSON.parse(localStorage.getItem("count")) || 0
  );

  const onIncrement = () => {
    localStorage.setItem("count", count + 1);
    setCount(count + 1);
  };

  const onDecrement = () => {
    localStorage.setItem("count", count - 1);
    setCount(count - 1);
  };

  const onReset = () => {
    localStorage.removeItem("count", 0);
    setCount(0);
  };

  return (
    <div className="flex flex-col items-center border border-slate-600 rounded-lg">
      <p className="text-2xl my-2 font-bold">{count}</p>
      <h1 className="text-xl font-normal">Counter</h1>
      <div className="flex gap-5 my-5">
        <button
          onClick={onIncrement}
          className="border border-slate-600 rounded py-0 px-5 font-bold text-2xl cursor-pointer"
        >
          +
        </button>
        <button
          onClick={onReset}
          className="border border-slate-600 rounded py-0 px-5 font-bold text-lg cursor-pointer"
        >
          Reset
        </button>
        <button
          onClick={onDecrement}
          className="border border-slate-600 rounded py-0 px-5 font-bold text-2xl cursor-pointer"
        >
          -
        </button>
      </div>
    </div>
  );
};

export default Counter;
