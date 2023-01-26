import React from "react";
import { Navbar } from "../Navbar/Navbar";

export function Layout({ children }: any) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
    </>
  );
}
