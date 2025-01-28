import Image from "next/image";
import React from "react";

const Chats = () => {
  return (
    <div className="text-center bg-success-subtle text-secondary mt-5 p-4 rounded-4">
      <div className="container d-flex justify-content-between align-items-center">
        <h3>Real-Time Chat between Customer and Service Provider</h3>
        <Image
          src="/svg/chat.svg"
          width={100}
          height={100}
          quality={2}
          alt="chat"
        />
      </div>

      <button className="btn btn-warning p-3 mt-5 text-center text-light fw-bold w-50 rounded-5">
        +Create A Chat
      </button>
    </div>
  );
};

export default Chats;
