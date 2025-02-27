import React from "react";

const UserForm = ({ address, email, phone, handleChange, handleSave }) => {
  return (
    <div className="flex flex-col items-center border border-slate-600 rounded-lg p-4 gap-5">
      <input
        type="text"
        name="address"
        value={address}
        placeholder="Enter your address"
        className="border w-full p-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="email"
        name="email"
        value={email}
        placeholder="Enter your email"
        className="border w-full p-2 rounded"
        onChange={handleChange}
        required
      />
      <input
        type="mobile"
        name="phone"
        value={phone}
        placeholder="Enter your phone no"
        className="border w-full p-2 rounded"
        onChange={handleChange}
        required
      />
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

export default UserForm;
