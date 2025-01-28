"use client";

import Image from "next/image";
import React from "react";

const Clients = () => {
  return (
    <div className="text-center bg-light p-5 rounded-4 shadow-lg mt-3">
      <div className="container">
        <div className="row justify-content-center align-items-center">
          <div className="col-md-8 col-lg-6 text-md-start text-center">
            <h2 className="display-5 fw-bold text-dark mb-4">
              Meet Your Potential Clients Here. We’ve Got You Covered!
            </h2>
            <p className="lead text-secondary mb-4">
              Connect with clients who need your services. Grow your business
              and build lasting relationships with ease.
            </p>
            <button className="btn btn-primary btn-lg px-5 py-3 fw-bold rounded-pill bg-gradient-client">
              + Chat
            </button>
          </div>
          <div className="col-md-4 col-lg-6 mt-4 mt-md-0 text-center">
            <Image
              src="/svg/support.svg"
              width={150}
              height={150}
              quality={100}
              alt="support"
              className="img-fluid"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Clients;
