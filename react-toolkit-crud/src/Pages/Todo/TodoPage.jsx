import React from "react";

const TodoPage = () => {
  return (
    <div className="flex flex-col">
      <h1 className="text-6xl text-center py-5">TODO</h1>

      <button className="bg-teal-400 py-3 px-5 rounded-xl text-white hover:bg-teal-500 mx-32 mt-10">
        Add Todo
      </button>
    </div>
  );
};

export default TodoPage;
