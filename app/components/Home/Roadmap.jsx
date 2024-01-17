import Typography from "@/app/shared/Typography";
import Wrapper from "@/app/shared/Wrapper";
import React from "react";
import Timeline from "../Timeline/Timeline";

const Roadmap = () => {
  return (
    <section className="custom-md:mt-[80px] custom-md:mb-[40px] my-[40px]">
      <Wrapper>
        <div>
          <Typography.H2>RADMAP</Typography.H2>
          <Timeline />
        </div>
      </Wrapper>
    </section>
  );
};

export default Roadmap;
