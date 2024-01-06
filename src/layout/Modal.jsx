import React from "react";

const Modal = ({ clickedPost, modalRef }) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-gray-800 bg-opacity-50">
      <div
        ref={modalRef}
        className="w-[80%] sm:w-[70%] lg:w-1/3 md:w-1/2  h-auto bg-gradient-to-br from-blue-300 to-purple-300  p-8 rounded-md shadow-lg"
      >
        {/* Your popover content */}
        <div
          // href="#"
          class="block max-w-lg p-6  border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
        >
          <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {clickedPost?.title}
          </h5>
          <p class="font-normal text-gray-700 dark:text-gray-400">
            {/* est rerum tempore vitae\nsequi sint nihil reprehenderit dolor
                beatae ea dolores neque\nfugiat blanditiis voluptate porro vel
                nihil molestiae ut reiciendis\nqui aperiam non debitis possimus
                qui neque nisi nulla */}
            {clickedPost.body}
          </p>
        </div>
        {/* <button
              onClick={togglePopover}
              className="bg-red-500 text-white py-2 px-4 rounded mt-4"
            >
              Close
            </button> */}
      </div>
    </div>
  );
};

export default Modal;
