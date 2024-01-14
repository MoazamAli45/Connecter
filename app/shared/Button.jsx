export const PrimaryButton = ({ children, styles, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="text-[17px] md:text-[20px] font-medium text-white-main px-[30px] py-[7px] rounded-full border-[1px] border-solid border-[#F2DE97]
    "
    >
      {children}
    </button>
  );
};
