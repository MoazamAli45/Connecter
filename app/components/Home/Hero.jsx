import { PrimaryButton } from "@/app/shared/Button";
import Typography from "@/app/shared/Typography";
import Wrapper from "@/app/shared/Wrapper";
import Image from "next/image";
import React from "react";

const Hero = () => {
  return (
    <section className="mt-[30px] custom-md:mt-[60px] mb-[40px] relative">
      <Wrapper styles="px-0 sm:px-8 custom-md:px-14 ">
        {/*   BG IMAGE  ===========> */}

        <div className="hero-bg -z-0 w-[250px] h-[250px]  sm:w-[340px] sm:h-[340px] max-w-[400px]">
          <Image
            src={"/home/hero-bg.png"}
            alt="hero-bg"
            fill
            sizes=""
            priority
            className="w-full h-full"
          />
        </div>
        <div className="flex flex-col justify-center items-center gap-8">
          <Typography.H1 styles="text-[20px] custom-md:text-[37px] font-medium text-center">
            Connecting you to financial tools that you control, anywhere, at
            anytime- it&rsquo;s never been easier.
          </Typography.H1>
          <div className=" flex flex-col gap-6 items-center">
            {" "}
            <PrimaryButton>Get Started</PrimaryButton>
            <div className="custom-md:w-[530px]  custom-md:h-[450px] w-[250px] h-[200px]   sm:w-[400px] sm:h-[340px]  sm:max-w-[400px] custom-md:max-w-full relative">
              <Image
                src={"/home/hero.png"}
                alt="hero"
                fill
                sizes=""
                priority
                className="w-full h-full"
              />
            </div>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default Hero;
