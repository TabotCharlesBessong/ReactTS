import React from "react";

const Spinner = () => {
  return (
    <div className="flex items-center w-full justify-center py-3">
      <div className="w-20 h-20 border-4 border-red-600 border-solid rounded-full animate-spin border-t-transparent"></div>
    </div>
  );
}

export default Spinner
