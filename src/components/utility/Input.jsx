import { forwardRef } from "react";
const Input = forwardRef(function Input({ label, isTextarea, ...props }, ref) {
  const classes = "px-3 block w-full border-b-2 border-b-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-b-indigo-600 sm:text-sm sm:leading-6";
  return (
    <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
      <div className="sm:col-span-full">
        <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
          {label}
        </label>
        {isTextarea ? (
          <>
            <div className="mt-2">
              <textarea {...props} className={classes} ref={ref} />
            </div>
          </>
        ) : (
          <>
            <div className="mt-2">
              <input {...props} className={classes} ref={ref} />
            </div>
          </>
        )}
      </div>
    </div>
  );
});

export default Input;