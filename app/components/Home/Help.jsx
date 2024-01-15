import Typography from "@/app/shared/Typography";
import Wrapper from "@/app/shared/Wrapper";
import Image from "next/image";
import React from "react";

const helpContent = [
  {
    id: 1,
    image: "/home/help1.svg",
    title: "So simple, anyone can use it",
  },
  {
    id: 2,
    image: "/home/help2.svg",
    title: "Global transactions in seconds",
  },
  {
    id: 3,
    image: "/home/help3.svg",
    title: "Borderless payments with low fees",
  },
  {
    id: 4,
    image: "/home/help4.svg",
    title: "Complete ownership, privacy & security",
  },
];

const Help = () => {
  return (
    <section className="my-[20px] mb-[40px]">
      <Wrapper>
        <Typography.H2>HOW THE CONNECTER CAN HELP YOU</Typography.H2>
        <div className="grid grid-cols-2 custom-md:grid-cols-4 gap-x-[15px] gap-y-[20px] mt-[40px] custom-md:mt-[20px]">
          {helpContent.map((item) => (
            <div key={item.id} className=" help-bg sm:min-h-[190px]">
              <div className="custom-md:w-[40px] custom-md:h-[40px] w-[30px] h-[30px] relative">
                <Image
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full"
                  fill
                  priority
                />
              </div>
              <Typography.PSmall styles="">{item.title}</Typography.PSmall>
            </div>
          ))}
        </div>
      </Wrapper>
    </section>
  );
};

export default Help;
