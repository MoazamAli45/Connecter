import Wrapper from "@/app/shared/Wrapper";
import Image from "next/image";
import React from "react";

const Accessible = () => {
  return (
    <section className="my-[40px]">
      <div className="w-full max-w-[1400px] mx-auto px-8">
        {/*  HEADING */}
        <h1 className="text-[30px] font-bold text-center text-white leading-[36px] ">
          YOUR MONEY.
          <br /> ANYWHERE &ndash; AS ACCESSIBLE AS THE INTERNET
        </h1>
        <div className="flex  gap-[30px]  custom-md:mt-[60px] custom-md:mb-[30px]">
          {/*  LEFT SIDE */}
          <div className="flex flex-col gap-[30px] w-1/3">
            <div className="accessible-bg min-h-[220px] flex flex-col gap-[20px] p-[10px]">
              <h4 className="text-[20px] leading-[30px] text-white font-medium">
                Send and Receive in Resilient and Stable Currencies
              </h4>
              <p className="text-[16px] leading-[24px] font-normal">
                Transfer funds using the stable currency of your preference and
                convert it to your local currency whenever needed.
              </p>
            </div>
            {/*   2nd  */}
            <div className="accessible-bg min-h-[220px] flex flex-col gap-[20px] p-[10px]">
              <h4 className="text-[20px] leading-[30px] text-white font-medium">
                Mastering a World of Multiple Currencies: Transfer With Ease
              </h4>
              <p className="text-[16px] leading-[24px] font-normal">
                Exchange back and forth between a variety of currencies
                including BTC, ETH, EURO, and USD.
              </p>
            </div>
            {/*  3rd  */}
            <div className="accessible-bg min-h-[220px] flex flex-col gap-[20px] p-[10px]">
              <h4 className="text-[20px] leading-[30px] text-white font-medium">
                Paper Trail Freedom: Effortless Cash Withdrawals
              </h4>
              <p className="text-[16px] leading-[24px] font-normal">
                Withdraw cash through BTC ATMs and more options coming soon.
              </p>
            </div>
          </div>
          {/*  MIDDLE */}
          <div className="w-1/3 relative custom-md:w-[500px]  custom-md:max-w-[600px] custom-xl:max-w-[500px] h-[900px]">
            <Image
              src={"/feature/mob-1.png"}
              alt="Mobile Image"
              priority
              fill
              className="w-full h-full"
            />
          </div>
          {/*  RIGHT */}
          <div className="flex flex-col gap-[30px] w-1/3">
            <div className="accessible-bg min-h-[220px] flex flex-col gap-[20px] p-[10px]">
              <h4 className="text-[20px] leading-[30px] text-white font-medium">
                Retail Ready: Seamless In-Store Payments
              </h4>
              <p className="text-[16px] leading-[24px] font-normal">
                Retail Ready: Seamless In-Store Payments
              </p>
            </div>
            {/*   5th  */}
            <div className="accessible-bg min-h-[220px] flex flex-col gap-[20px] p-[10px]">
              <h4 className="text-[20px] leading-[30px] text-white font-medium">
                Easy Transfer To and From Your Bank Account
              </h4>
              <p className="text-[16px] leading-[24px] font-normal">
                Initiate quick withdrawals and deposits from your bank account,
                ensuring fast and secure transactions.
              </p>
            </div>
            {/*  6th  */}
            <div className="accessible-bg min-h-[220px] flex flex-col gap-[20px] p-[10px]">
              <h4 className="text-[20px] leading-[30px] text-white font-medium">
                An Account That&lsquo;s Truly Yours
              </h4>
              <p className="text-[16px] leading-[24px] font-normal">
                Always have access to your funds. The Connecter offers direct
                peer-to-peer transactions, cutting out the middleman. Funds are
                always under the control of the sender or recipient.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Accessible;
