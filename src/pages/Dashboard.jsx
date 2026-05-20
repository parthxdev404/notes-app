import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import CreateTaskCard from "../components/CreateTaskCard";
import TaskCard from "../components/TaskCard";

const Dashboard = () => {
  const [notes, setNotes] = useState(() => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  });
  const createTask = (title, description) => {
    const newTask = {
      id: Date.now(),
      taskTitle: title,
      taskDescription: description,
    };

    setNotes([...notes, newTask]);
  };

  const deleteNotes = (id) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <>
      <Header />
      <div className="flex items-start ">
        <CreateTaskCard createTask={createTask} />
        <TaskCard notes={notes} deleteNotes={deleteNotes} />
      </div>
    </>
  );
};

export default Dashboard;
