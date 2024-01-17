import React from "react";

const Timeline = () => {
  return (
    <div className="w-full  mx-auto">
      {/* <!-- Vertical Timeline #1 --> */}
      <div className="-my-6">
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Purple label --> */}
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            The origin
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[92%]  before:mt-[6px] before:mb-0  before:px-[.5px] before:bg-[#1c1c1c] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-[12px] after:h-[12px]  after:border-[1px] after:box-content after:border-[#1c1c1c] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <div className="text-xl font-bold text-slate-900">
              Acme was founded in Milan, Italy
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        {/* <!-- Item #2 --> */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Purple label --> */}
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            The milestone
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[95%] before:mt-[3px] before:mb-0  before:px-px before:bg-[#1c1c1c] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-[1px] after:box-content after:border-[#1c1c1c] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <div className="text-xl font-bold text-slate-900">
              Reached 5K customers
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        {/* <!-- Item #3 --> */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Purple label --> */}
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            The acquisitions
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[95%] before:mt-[3px] before:mb-0  before:px-px before:bg-[#1c1c1c] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-[1px] after:box-content after:border-[#1c1c1c] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <div className="text-xl font-bold text-slate-900">
              Acquired various companies, inluding Technology Inc.
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>

        {/* <!-- Item #4 --> */}
        <div className="relative pl-8 sm:pl-32 py-6 group">
          {/* <!-- Purple label --> */}
          <div className="font-caveat font-medium text-2xl text-indigo-500 mb-1 sm:mb-0">
            The IPO
          </div>
          {/* <!-- Vertical line (::before) ~ Date ~ Title ~ Circle marker (::after) --> */}
          <div className="flex flex-col sm:flex-row items-start mb-1 group-last:before:hidden before:absolute before:left-2 sm:before:left-0 before:h-[95%] before:mt-[3px] before:mb-0  before:px-px before:bg-[#1c1c1c] sm:before:ml-[6.5rem] before:self-start before:-translate-x-1/2 before:translate-y-3 after:absolute after:left-2 sm:after:left-0 after:w-2 after:h-2  after:border-[1px] after:box-content after:border-[#1c1c1c] after:rounded-full sm:after:ml-[6.5rem] after:-translate-x-1/2 after:translate-y-1.5">
            <div className="text-xl font-bold text-slate-900">
              Acme went public at the New York Stock Exchange
            </div>
          </div>
          {/* <!-- Content --> */}
          <div className="text-slate-500">
            Pretium lectus quam id leo. Urna et pharetra pharetra massa massa.
            Adipiscing enim eu neque aliquam vestibulum morbi blandit cursus
            risus.
          </div>
        </div>
      </div>
    </div>
  );
};

export default Timeline;
