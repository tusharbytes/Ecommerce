import React from 'react';

const Loader = () => {
  return (
    <div className="flex justify-center items-center absolute top-0 left-0 w-full h-full">
  <div className="w-16 h-16 border-4 border-t-4 border-gray-200 border-t-blue-500 rounded-full animate-spinSlow"></div>
</div>

  );
};

export default Loader;
