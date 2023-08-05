import React from "react";

const BodyButton = ({ name }) => {
  return (
    <div className="bg-[#F0F0F0] hover:bg-[#E0E0E0] mx-[0.375rem] rounded-lg">
      <button className="px-3 py-[0.1875rem] pb-[5px]">{name}</button>
    </div>
  );
};

export default BodyButton;
