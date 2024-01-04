import React from "react";

const Input = ({
  type,
  placeholder,
  id,
  required,
  label,
  onchange,
  value,
  editModalId,
}) => {
  return (
    <div className="w-64 mt-3">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-white dark:text-gray"
      >
        {label}
      </label>
      <input
        type={type}
        id={id}
        value={value}
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder={placeholder}
        required={required || false}
        onChange={onchange}
      />
    </div>
  );
};

export default Input;
