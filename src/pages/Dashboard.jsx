import React, { useState } from "react";
import Header from "../components/Header";
import CreateTaskCard from "../components/CreateTaskCard";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [notes, setNotes] = useState([]);
  const createTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      taskTitle: title,
      taskDescription: description,
    };

    setNotes([...notes, newTask]);
  };

  return (
    <>
      <Header />
      <div className="flex items-start ">
        <CreateTaskCard createTask={createTask} />
        <TaskCard notes={notes} />
      </div>
    </>
  );
};

export default Dashboard;
