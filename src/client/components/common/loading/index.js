import React from "react";

function Loading() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-gray-800 bg-opacity-80">
      <div className="w-24 h-24 ease-linear border-8 border-t-8 border-gray-200 rounded-full loader">
        <img
          src={require("../../../assets/images/loading.gif")}
          alt="loading..."
        />
      </div>
    </div>
  );
}

export default Loading;
