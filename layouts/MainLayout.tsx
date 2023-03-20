import { Footer } from "@/components/Footer";
import Header from "@/components/Header";
import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Header />
      <div style={{ padding: "50px 0" }}>{children}</div>
      <Footer />
    </>
  );
};

export default MainLayout;
