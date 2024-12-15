import React from 'react';
import CommonInputBox from './CommonInputBox';

const StepFirstForm = ({ values, setFieldValue ,errors}) => {
  return (
    <div className="flex flex-col lg:flex-row mt-5 border-[#f4f4f4] border-[1px]">
      <div className="w-full lg:w-1/4 h-auto lg:h-[500px] bg-[#deedff] p-5 lg:p-10 flex flex-col gap-5 lg:gap-10">
        {['Play House', 'School', 'College', 'Competitive Exam'].map((type, index) => (
          <div className="flex gap-3 items-center flex-wrap break-words" key={index}>
            <input
              type="radio"
              name="instituteType"
              id={`type-${index}`}
              className="w-5 h-5"
              checked={values.instituteType === type}
              onClick={() => setFieldValue('instituteType', type)}
            />
            <label
              htmlFor={`type-${index}`}
              className="text-sm lg:text-base break-words"
            >
              {type}
            </label>
          </div>
        ))}
      </div>
      <div className="flex-1 flex flex-col justify-center items-center">
        <div className='flex flex-col justify-center items-center'>
          <div className='flex gap-10 items-center'>
            <CommonInputBox
              label="Full Name"
              type="text"
              name="fullName"
              htmlFor="fullName"
              value={values.fullName}
              onChange={(e) => setFieldValue('fullName', e.target.value)}
              className="w-full max-w-md"
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.fullname}</p>
            )}
          </div>
          <div className='flex gap-10 items-center'>
            <CommonInputBox
              label="Email"
              type="text"
              name="email"
              htmlFor="email"
              value={values.email}
              onChange={(e) => setFieldValue('email', e.target.value)}
              className="w-full max-w-md"
            />
            {errors.fullname && (
              <p className="text-red-500 text-sm">{errors.email}</p>
            )}
          </div>
        </div>
        <div className="grid grid-rows-2 grid-cols-2 gap-4 mt-5">
          <div className="bg-blue-500 w-16 h-16 flex items-center justify-center text-white rounded-md">1</div>
          <div className="bg-green-500 w-16 h-16 flex items-center justify-center text-white rounded-md">2</div>
          <div className="bg-red-500 w-16 h-16 flex items-center justify-center text-white rounded-md">3</div>
          <div className="bg-yellow-500 w-16 h-16 flex items-center justify-center text-white rounded-md">4</div>
        </div>
        <p className="mt-4 text-center text-gray-600 text-sm lg:text-base">
          Please select your preferred options.
        </p>
      </div>
    </div>
  );
};

export default StepFirstForm;
