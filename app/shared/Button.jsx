import Link from "next/link";

export const PrimaryButton = ({ children, styles, onClick, style }) => {
  return (
    <button
      onClick={onClick}
      style={style}
      className="text-[17px] md:text-[20px] font-medium text-white-main px-[30px] py-[7px] rounded-full border-[1px] border-solid border-[#F2DE97] cursor-pointer"
    >
      {children}
    </button>
  );
};

export const SecondaryButton = ({ children, styles, href = "" }) => {
  return (
    <Link
      href={href}
      className={`text-[14px] font-medium text-white-main px-[15px] py-[10px] rounded-full bg-[#0c0c0c] border-[1px] border-solid border-[#0c0c0c] hover:border-[#F2DE97] cursor-pointer transition-all ${styles}`}
    >
      {children}
    </Link>
  );
};
