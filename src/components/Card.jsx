import React from "react";

const Card = ({ name, img, role }) => {
  return (
    <div className="mt-6 mx-3 flex flex-col text-gray-700 bg-white shadow-2xl bg-clip-border rounded-xl w-80">
      <div className="relative mx-4 mt-4 overflow-hidden text-gray-700 shadow-lg bg-clip-border rounded-xl h-80">
        <img src={img} alt="profile" className="object-cover w-full h-full" />
      </div>
      <div className="p-6 text-center">
        <h4 className="block mb-2 font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
          {name}
        </h4>
        <p className="block text-zinc-500 font-sans text-base antialiased font-medium leading-relaxed text-transparent bg-clip-text bg-gradient-to-tr from-blue-gray-600 to-blue-gray-400">
          {role}
        </p>
      </div>
    </div>
  );
};

export default Card;
