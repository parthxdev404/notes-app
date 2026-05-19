import React from "react";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const handleLogOut = () => {
    navigate("/");
  };

  return (
    <div className="bg-amber-400">
      <div className="flex items-center justify-between p-4 px-8">
        <h1 className="text-2xl font-semibold">Notes App</h1>
        <button
          onClick={handleLogOut}
          className="bg-amber-50 cursor-pointer p-2 px-4 rounded"
        >
          LogOut
        </button>
      </div>
    </div>
  );
};

export default Header;
