import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="text-center bg-success-subtle text-secondary mt-5 p-4 rounded-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h3>Meet Your Potential Client in Here. We got you covered!</h3>
        <Image
          src="/svg/support.svg"
          width={100}
          height={100}
          quality={2}
          alt="chat"
        />
      </div>

      <button className="btn btn-warning p-3 mt-5 text-center text-light fw-bold w-50 rounded-5">
        +Chat
      </button>
    </div>
  );
};

export default Clients;
