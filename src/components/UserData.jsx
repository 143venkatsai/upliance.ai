import React from "react";

const UserData = ({ name, id, users, handleChange, handleSave }) => {
  return (
    <div className="flex flex-col items-center border border-slate-600 rounded-lg p-4 gap-5">
      <div className="border w-full p-2 rounded overflow-auto max-h-10">
        <h1>
          <strong>User Data:</strong> {JSON.stringify(users, null, 2)}
        </h1>
      </div>

      <input
        type="text"
        name="name"
        value={name}
        className="border w-full p-2 rounded"
        placeholder="Enter your name"
        onChange={handleChange}
        required
      />
      <p className="border w-full p-2 rounded">
        <strong>Id:</strong> {id}
      </p>

      <button
        type="button"
        className="border border-none bg-blue-500 px-5 py-1 text-md rounded cursor-pointer text-white"
        onClick={handleSave}
      >
        Save
      </button>
    </div>
  );
};

export default UserData;
