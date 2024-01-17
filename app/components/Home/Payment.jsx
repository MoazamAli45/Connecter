import { SecondaryButton } from "@/app/shared/Button";
import Typography from "@/app/shared/Typography";
import Wrapper from "@/app/shared/Wrapper";
import Image from "next/image";
import React from "react";

const Payment = () => {
  return (
    <section className="mt-[40px] custom-md:mt-[80px] mb-[40px] overflow-x-hidden ">
      <Wrapper>
        <div className="flex flex-col gap-[30px] items-center">
          <Typography.H2 styles="text-[20px] custom-md:text-[26px] font-medium text-center  custom-md:w-[50%] mx-auto">
            SEND PAYMENTS ANYWHERE, ANYTIME, AND HAVE IT ARRIVE IN SECONDS.
          </Typography.H2>
          <div className="relative w-[300px] max-w-[500px] h-[200px]  sm:w-[700px] sm:max-w-[800px] sm:h-[400px] custom-md:w-[1000px] xl:w-[1260px] custom-md:h-[500px] lg:h-[620px] custom-md:max-w-[1270px] ">
            <Image
              src={"/home/payment.png"}
              alt="payment"
              fill
              sizes=""
              priority
              className="w-full h-full"
            />
          </div>
          <SecondaryButton href="/subscribe">Get Started</SecondaryButton>
        </div>
      </Wrapper>
    </section>
  );
};

export default Payment;
