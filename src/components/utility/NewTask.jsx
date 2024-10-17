import { useCallback, useState } from "react";

export default function NewTask({ onAddTask }) {
  const [enteredTask, setEnteredTask] = useState("");

  const handleChange = useCallback((event) => {
    setEnteredTask(event.target.value);
  }, []);
  const handleClick = useCallback(() => {
    if (enteredTask.trim() === "") {
      return;
    }
    onAddTask(enteredTask);
    setEnteredTask("");
  }, [enteredTask]);

  return (
    <>
      <form className="w-full">
        <div className="mt-5 mb-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-12">
          <div className="sm:col-span-full">
            <div className="mt-2">
              <input id="title" name="title" type="text" className="px-3 inline-flex max-w-half border-b-2 border-b-gray-300 py-1.5 text-gray-900 shadow-sm placeholder:text-gray-400 focus:border-b-indigo-600 sm:text-sm sm:leading-6" onChange={handleChange} value={enteredTask} />
              <button type="button" className="inline-flex items-center py-3 px-6 text-sm font-medium text-gray-900 bg-transparent rounded-lg hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-2 focus:ring-blue-700 focus:text-blue-700" onClick={handleClick}>
                Add Tasks
              </button>
            </div>
          </div>
        </div>
      </form>
    </>
  );
}
