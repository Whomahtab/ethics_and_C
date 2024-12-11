import React from "react";

const EthicsIntro = () => {
  return (
    <div className="ethicsIntro pb-4  lg:h-[60vh]">
      <div className="text-content text-center">
        <h2
          className="inter font-medium text-[32px] text-[#1d1d1f pt-12 lg:pt-28 pb-4
        lg:text-5xl"
        >
          Ethics and Compliance
        </h2>
        <p
          className="inter
      font-normal mx-12 tracking-[.012em] leading-[1.21053] lg:w-[900px] lg:mx-auto lg:pt-8 text-neutral-600"
        >
          Apple conducts business ethically, honestly, and in full compliance
          with the law. We believe that how we conduct ourselves is as critical
          to Apple’s success as making the best products in the world. Our
          Compliance and Business Conduct policies are foundational to how we do
          business and how we put our values into practice every day.
        </p>
        <div className="quote-wrapper">
          <p className="text-2xl mt-7 px-5 lg:text-3xl">
            “We do the right thing, even when it’s not easy.”
          </p>
        </div>
        <div className="quote-refs text-[21px] inter  font-normal">
          <span className="mt-1 block font-bold lg:mt-8">Divyam</span>
        </div>
      </div>
    </div>
  );
};

export default EthicsIntro;
