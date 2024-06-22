import React, { useState } from 'react';

const ImageModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button onClick={() => setIsOpen(true)}>View Image</button>
      {isOpen && (
        <div className="fixed inset-0 z-50 overflow-auto bg-smoke-light flex">
          <div className="relative p-8 bg-white w-full max-w-md m-auto flex-col flex">
            <span className="absolute top-0 right-0 p-4">
              <button onClick={() => setIsOpen(false)}>Close</button>
            </span>
            <img src="/path-to-image.jpg" alt="Modal Image" />
          </div>
        </div>
      )}
    </>
  );
};

export default ImageModal;
