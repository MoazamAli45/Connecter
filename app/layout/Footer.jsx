import React from "react";
import Wrapper from "../shared/Wrapper";
import Image from "next/image";
import Link from "next/link";
import { NavLink } from "../shared/Typography";

const Footer = () => {
  return (
    <Wrapper styles={"px-4 sm:px-8 custom-md:px-14 my-[10px]"}>
      <div className="flex flex-col gap-[15px]">
        {/*   TOP FOOTER */}
        <div className="footer-top flex flex-col custom-md:flex-row items-center justify-between  gap-y-[20px]">
          {/*    LEFT */}
          <div className="flex flex-col sm:flex-row items-center gap-[20px] ">
            <Link className="w-[190px] h-[45px] relative my-auto " href={"/"}>
              <Image
                src="/logoFooter.png"
                alt="logo-Footer"
                className="max-w-full max-h-full"
                fill
                priority
              />
            </Link>
            <ul className="flex gap-[20px]">
              <li>
                <NavLink href="/" styles="text-[9px] sm:text-[11px]">
                  PRIVACY
                </NavLink>
              </li>
              <li>
                <NavLink href="/" styles="text-[9px] sm:text-[11px]">
                  TERMS & CONDITIONS
                </NavLink>
              </li>
              <li>
                <NavLink href="/" styles="text-[9px] sm:text-[11px]">
                  FAQS
                </NavLink>
              </li>
            </ul>
          </div>
          {/*   RIGHT */}
          <div>
            <ul className="flex gap-[20px]">
              <li>
                <Link href="">
                  <Image src="/yt.png" alt="yt" width={22} height={20} />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src={"/medium.svg"}
                    alt="medium"
                    width={22}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src={"/linkedin.svg"}
                    alt="linkedin"
                    width={22}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src={"/fb.svg"}
                    alt="facebook"
                    width={22}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image
                    src={"/instagram.svg"}
                    alt="instagram"
                    width={22}
                    height={20}
                  />
                </Link>
              </li>
              <li>
                <Link href="">
                  <Image src={"/x.svg"} alt="x" width={22} height={20} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
        {/*   BOTTOM FOOTER */}
        <footer className="flex justify-center">
          <p className="text-[9px] sm:text-[11px]  font-normal">
            THE CONNECTER 2023 - @ COPYRIGHT RESERVED
          </p>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Footer;