import React from 'react';

const CommonInputBox = (props) => {
  const {
    label = "",
    value = "",
    type = "text",
    name = "",
    inputclassname = "",
    htmlFor,
  } = props;

  return (
    <div className="mb-2 w-[50%] md:w-[60%] lg:w-[100%] mx-auto">
      <label
        htmlFor={htmlFor}
        className="block text-sm sm:text-base font-medium mb-2 text-black"
      >
        {label}
      </label>
      <input
        className={`h-10 rounded-lg border-2 w-full border-black  p-3 ${inputclassname} text-black`}
        type={type}
        name={name}
        value={value}
        autoComplete='false'
        {...props}
      />
    </div>
  );
};

export default CommonInputBox;
