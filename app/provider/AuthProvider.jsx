"use client";
import React from "react";
import { KindeProvider } from "@kinde-oss/kinde-auth-nextjs";

export const AuthProvider = ({ children }) => {
  return <KindeProvider>{children}</KindeProvider>;
};


//NO need of includdi a providr on this age
