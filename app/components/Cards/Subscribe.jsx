import Wrapper from "@/app/shared/Wrapper";
import Link from "next/link";
import React from "react";

const Subscribe = () => {
  return (
    <section className="my-[50px]">
      <Wrapper>
        <div className="subscribe-container flex flex-col custom-md:flex-row gap-[20px]">
          {/*  LEFT SIDE */}
          <div className="custom-md:w-2/5 subscribe-bg h-[400px]">
            <div className=" flex justify-start items-end h-[93%] pl-[20px]">
              <Link
                href={
                  "https://www.startupbootcamp.com.au/blog/discover-the-10-startups-leading-ai-driven-global-financial-transformation"
                }
              >
                <button className="read-more-button">Read More</button>
              </Link>
            </div>
          </div>
          {/*  RIGHT SIDE */}
          <div className="custom-md:w-3/5">
            <div className="flex flex-col gap-[30px] py-[40px] ">
              <h2 className="text-[20px] text-white font-bold leading-[25.2px]">
                SUBSCRIBE TODAY &hyphen; STEP INTO THE FUTURE OF FINANCE
                <br />
                <br />
                It Really is That Simple
              </h2>
              <p className="text-[12px] font-normal leading-[18px]">
                Living in different countries? Earning in various currencies?
                Managing your finances shouldn&lsquo;t be a burden. The
                Connecter is your simplified financial tools solution, bringing
                seamless transactions to your fingertips. Have complete
                ownership over your account, engage in easy peer-to-peer
                transactions, and revel in the simplicity that is The Connecter
                V1.
              </p>
              {/*   FORM  */}
              <div className="flex flex-col custom-md:mt-[10px]">
                <div className="flex gap-[30px]">
                  <input
                    type="text"
                    placeholder="Enter Your First Name"
                    className="subscribe-input-text"
                  />
                  <input
                    type="text"
                    placeholder="Enter Your Last Name"
                    className="subscribe-input-text"
                  />
                </div>
                {/*   DOWN INPUT  */}
                <div className="flex gap-[30px]"></div>
              </div>
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Subscribe;
