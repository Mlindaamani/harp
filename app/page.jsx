import React from "react";
import Image from "next/image";
import {
  LoginLink,
  RegisterLink,
} from "@kinde-oss/kinde-auth-nextjs/components";
import { getKindeServerSession } from "@kinde-oss/kinde-auth-nextjs/server";
import Link from "next/link";

const HarpLandingPage = async () => {
  const { isAuthenticated } = getKindeServerSession();
  const isLoggen = await isAuthenticated();
  return (
    <div className="container-fluid min-vh-100 p-0 bg-gradient">
      {/* Gradient Background */}
      <div className="bg-gradient-primary min-vh-100 d-flex flex-column justify-content-center align-items-center p-4">
        {/* Hero Section */}
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-8 text-center text-lg-start">
              <h1 className="display-3 fw-bold text-light mb-4">
                We Connect Households With Qualified Repair{" "}
                <span className="text-warning">Professionals</span>
              </h1>
              <p className="lead text-light mb-5 fs-4">
                Find trusted professionals for all your household repair needs.
                Fast, reliable, and hassle-free.
              </p>
              <div className="d-flex flex-column flex-lg-row justify-content-center justify-content-lg-start gap-3">
                {!isLoggen ? (
                  <>
                    <LoginLink className="btn btn-success btn-lg px-5 py-3">
                      Login
                    </LoginLink>
                    <RegisterLink className="btn btn-outline-light btn-lg px-5 py-3">
                      Create an Account
                    </RegisterLink>
                  </>
                ) : (
                  <>
                    {/* Go to dashboard */}
                    <Link
                      className="btn btn-success btn-lg px-5 py-3"
                      href={"/dashboard"}
                    >
                      Get Started
                    </Link>
                  </>
                )}
              </div>
            </div>
            <div className="col-lg-4 mt-5 mt-lg-0 text-center">
              <Image
                src="/svg/home.svg"
                width={400}
                height={400}
                alt="hero"
                className="img-fluid"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HarpLandingPage;
