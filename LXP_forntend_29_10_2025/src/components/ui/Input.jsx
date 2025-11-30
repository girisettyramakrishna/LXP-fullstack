import React from "react";

const Input = ({ label, type = "text", value, onChange, error }) => {
  return (
    <div className="form-control w-full mb-4">
      <label className="label">
        <span className="label-text text-black">{label}</span>
      </label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        className={`input input-bordered w-full ${
          error ? "input-error" : "hover:bg-[#c0c0c0]"
        }`}
      />
      {error && <span className="text-red-500 text-sm">{error}</span>}
    </div>
  );
};

export default Input;
