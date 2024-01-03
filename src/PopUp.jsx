import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

function PopUp() {
  return (
    <>
      <div className="flex justify-center mt-32">
        <div className="bg-white shadow-lg border-2 border-gray-200 rounded w-[400px] mx-5 p-5">
          <div className="flex justify-center">
            <FontAwesomeIcon
              icon={faCircleCheck}
              className="text-green-500 h-10 w-10"
            />
          </div>
          <p className="mt-4 text-black text-xl font-semibold text-center">
            Thankyou For Showing Interest.We'll reached you out Soon!.
          </p>
        </div>
      </div>
    </>
  );
}

export default PopUp;
