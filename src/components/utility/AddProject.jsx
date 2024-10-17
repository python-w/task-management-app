import { useRef } from "react";
import Input from "./Input";
import Button from "./Button";
import Modal from "./Modal";

export default function AddProject({ onAdd, buttonCaption, onCancel }) {
  const modalRef = useRef();
  const titleRef = useRef();
  const descRef = useRef();
  const dateRef = useRef();

  const handleSave = () => {
    const enteredTitle = titleRef.current.value;
    const enteredDesc = descRef.current.value;
    const enteredDate = dateRef.current.value;

    if (enteredTitle.trim() === "" || enteredDesc.trim() === "" || enteredDate.trim() === "") {
      modalRef.current.open();
      return;
    }

    onAdd({
      title: enteredTitle,
      description: enteredDesc,
      dueDate: enteredDate,
    });
  };
  return (
    <>
      <Modal ref={modalRef} buttonCaption="Close">
        <h2 className="text-xl font-bold">Invalid Input</h2>
        <p>Oops... Looks like you forgot to enter a value.</p>
        <p>Please make sure you provide a valid value for every input field.</p>
      </Modal>
      <div className="flex flex-col pl-12 pr-40 mt-40">
        <div className="flex-1 py-3 bg-gray-50 space-x-6 ml-auto">
          <Button onClick={onCancel}>Cancel</Button>
          <Button onClick={handleSave}>Save</Button>
        </div>
        <div className="flex-1">
          <form className="w-full">
            <Input label="Title" placeholder="Enter Title" type="text" ref={titleRef} />
            <Input label="Description" isTextarea placeholder="Enter Description" ref={descRef} />
            <Input label="Due Date" placeholder="Enter Due Date" type="date" ref={dateRef} />
          </form>
        </div>
      </div>
    </>
  );
}
