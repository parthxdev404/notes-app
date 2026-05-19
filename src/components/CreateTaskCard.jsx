import React, { useState } from "react";

const CreateTaskCard = ({ createTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();

    if (!taskTitle || !taskDescription) return;
    createTask(taskTitle, taskDescription);

    setTaskTitle("");
    setTaskDescription("");
  };

  return (
    <div className="bg-white w-96 mt-10 mx-4">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="text-black placeholder:text-black p-4 gap-1 flex flex-col items-start "
      >
        <h1 className="text-xl font-medium">Title</h1>
        <input
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          className="text-xl outline-none"
          type="text"
          placeholder="Enter Title"
        />
        <h1 className="text-xl font-medium">Description</h1>
        <textarea
          style={{ resize: "none" }}
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          className="text-xl outline-none w-80 font-medium h-52"
          placeholder="Enter Description"
        ></textarea>
        <button className="text-center font-medium bg-amber-300 p-3 w-1/2 cursor-pointer">
          Create Note
        </button>
      </form>
    </div>
  );
};

export default CreateTaskCard;
