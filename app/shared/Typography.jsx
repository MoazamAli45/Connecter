import Link from "next/link";
import React from "react";

export const Heading1 = ({ children, styles = "text-[45px] font-medium " }) => {
  return (
    <h1
      className={`  ${styles} text-gradient leading-[30px] sm:leading-[44px] `}
    >
      {children}
    </h1>
  );
};
export const Heading2 = ({
  children,
  styles = "text-[20px] custom-md:text-[26px] font-medium text-center",
}) => {
  return (
    <h2
      className={`${styles} text-gradient leading-[25px] sm:leading-[31.4px]  `}
    >
      {children}
    </h2>
  );
};
export const Heading3 = ({
  children,
  styles = "text-light-black font-semibold",
}) => {
  return (
    <h3
      className={` text-[20px] sm:text-[24px] leading-[25px] sm:leading-[33.6px]  ${styles}`}
    >
      {children}
    </h3>
  );
};
export const PLarge = ({
  children,
  styles = "text-light-black font-medium",
}) => {
  return (
    <p className={` text-[14px] sm:text-[16px] leading-[22.4px]  ${styles}`}>
      {children}
    </p>
  );
};

export const PSmall = ({ children, styles = "" }) => {
  return (
    <p
      className={`${styles} text-[10px] custom-md:text-[12px] font-normal text-center custom-md:text-start`}
    >
      {children}
    </p>
  );
};

export const NavLink = ({
  children,
  styles = "text-[14px] custom-md:text-[16px] ",
  href,
}) => {
  return (
    <Link
      href={href}
      className={`${styles} font-normal text-white-main hover:text-primary`}
    >
      {children}
    </Link>
  );
};

const Typography = {
  H1: Heading1,
  H2: Heading2,
  H3: Heading3,
  PLarge,
  PSmall,
  NavLink,
};

export default Typography;
