import React, { useEffect } from "react";
import { IoClose } from "react-icons/io5";
const Modal = ({
  isOpen,
  setIsOpen,
  children,
  styles = "w-[350px] max-w-[500px] sm:w-[650px] sm:max-w-[700px] custom-md:w-[1000px] md:max-w-[1000px] h-[400px] sm:h-[600px] custom-md:h-[85vh] mx-auto custom-md:mb-auto  ",
}) => {
  const toggleModal = () => {
    setIsOpen(!isOpen);
  };

  const handleOverlayClick = () => {
    if (isOpen) {
      toggleModal();
    }
  };

  useEffect(() => {
    if (isOpen) {
      document.body.classList.add("modal-active");
    } else {
      document.body.classList.remove("modal-active");
    }
  }, [isOpen]);

  return (
    <>
      {isOpen && (
        <div className="modal fixed w-full h-full top-0 left-0 flex items-center justify-center z-10 ">
          <div
            className="modal-overlay absolute w-full h-full bg-gray-900 opacity-90 border"
            onClick={handleOverlayClick}
          ></div>

          <div className={`${styles}  `}>
            {/*   CLOSE ICON */}
            <div className="flex justify-end pr-[10px] py-[5px] ">
              <IoClose
                className="text-[#ffffff] text-right text-[20px] z-10 cursor-pointer"
                onClick={() => setIsOpen(false)}
              />
            </div>
            <div className="bg-[#000000] py-[10px] z-10">{children}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Modal;
