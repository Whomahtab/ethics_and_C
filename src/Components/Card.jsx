import React, { useState } from "react";

const SvgIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlSpace="preserve"
    id="Layer_1"
    width="800"
    height="800"
    fill="#000"
    version="1.1"
    viewBox="0 0 512 512"
    className="size-9"
  >
    <path d="M491.841 156.427c-19.471-45.946-51.936-85.013-92.786-112.637C358.217 16.166 308.893-.007 256 0c-35.254-.002-68.946 7.18-99.571 20.158-45.945 19.472-85.013 51.935-112.638 92.785C16.167 153.779-.007 203.104 0 256c-.002 35.255 7.181 68.948 20.159 99.573 19.471 45.946 51.937 85.013 92.786 112.637C153.783 495.834 203.107 512.007 256 512c35.253.002 68.946-7.18 99.571-20.158 45.945-19.471 85.013-51.935 112.638-92.785C495.834 358.22 512.007 308.894 512 256c.002-35.256-7.181-68.948-20.159-99.573m-31.428 185.83c-16.851 39.781-45.045 73.723-80.476 97.676-35.443 23.953-78.02 37.926-123.936 37.933-30.619-.002-59.729-6.218-86.255-17.454-39.781-16.851-73.724-45.044-97.677-80.475C48.114 344.495 34.14 301.917 34.133 256c.002-30.62 6.219-59.731 17.454-86.257 16.851-39.781 45.045-73.724 80.476-97.676C167.506 48.113 210.084 34.14 256 34.133c30.619.002 59.729 6.218 86.255 17.454 39.781 16.85 73.724 45.044 97.677 80.475 23.953 35.443 37.927 78.02 37.934 123.939-.002 30.619-6.218 59.73-17.453 86.256"></path>
    <path d="M389.594 239.301H272.699V122.406c0-9.222-7.477-16.699-16.699-16.699s-16.699 7.477-16.699 16.699v116.895H122.406c-9.222 0-16.699 7.477-16.699 16.699s7.477 16.699 16.699 16.699h116.895v116.895c0 9.222 7.477 16.699 16.699 16.699s16.699-7.477 16.699-16.699V272.699h116.895c9.222 0 16.699-7.477 16.699-16.699s-7.476-16.699-16.699-16.699"></path>
  </svg>
);

const Card = ({ item }) => {
  const [cardText, setCardText] = useState(true);
  const handleClick = () => {
    setCardText(!cardText);
  };
  return (
    <div className="cardWrapper mx-4 lg:mx-auto lg:pb-20 ">
      <div className=" rounded-2xl overflow-hidden cardDetails lg:flex lg:flex-row">
        <div className="imgContent lg:w-[490px]  lg:order-2 relative">
          {cardText ? (
            <img src={item.image} className=" fade h-[361px] lg:absolute" />
          ) : (
            <div className="fade py-8 lg:py-0 bg-[#e8e8ed] h-full flex justify-center items-center px-10">
              A number of compliance functions are deeply integrated into our
              business organization. Apple’s Compliance and Business Conduct
              team focuses on Business Conduct, Political Compliance, Export and
              Sanctions Compliance, Health Compliance, Antitrust Compliance, and
              Anti-Corruption Compliance.
            </div>
          )}
        </div>
        <div className="text-Content bg-[#e8e8ed] py-7 px-5  lg:w-[500px]  lg:p-12">
          <h3
            className="text-3xl font-medium py-5 inter
          lg:text-4xl lg:font-semibold
          "
          >
            {item.title}
          </h3>
          <p className="inter lg:text-[20px]">{item.content}</p>
          <button
            className="flex justify-between items-center gap-5 mt-8 lg:relative lg:top-[20px]"
            onClick={handleClick}
          >
            <SvgIcon />
            <span className="text-[17px] font-light">More</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
