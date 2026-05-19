import React, { useState } from "react";

const TaskCard = ({ notes }) => {
  return (
    <div className="text-white mt-9 mx-4 flex gap-4 shrink-4 flex-wrap">
      {notes.map((task, idx) => {
        return (
          <section
            key={idx}
            className="text-black p-2 px-4 bg-yellow-300 w-96 h-96"
          >
            <h1 className="text-2xl pt-2 font-semibold">{task.taskTitle}</h1>
            <p className="text-xl pt-2">{task.taskDescription}</p>
          </section>
        );
      })}
    </div>
  );
};

export default TaskCard;
