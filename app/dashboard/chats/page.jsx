import Image from "next/image";
import React from "react";
import Register from "@/app/components/Register";

const Chats = () => {
  return (
    <div className="text-center bg-light p-5 rounded-4 shadow-sm mt-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 col-lg-6 text-md-start text-center">
            <h2 className="display-5 fw-bold text-dark mb-4">
              Real-Time Chat Between Customer and Service Provider
            </h2>
            <p className="lead text-secondary mb-4">
              Seamlessly communicate with your service provider or customer in
              real-time. Get instant responses and resolve issues faster.
            </p>
            <button className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill bg-gradient-chat">
              + Create A Chat
            </button>
          </div>
          <div className="col-md-4 col-lg-6 mt-4 mt-md-0 text-center">
            <Image
              src="/svg/chat.svg"
              width={150}
              height={150}
              quality={100}
              alt="chat"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
      <Register />
    </div>
  );
};

export default Chats;
