import React, { ReactElement } from "react";
import { Footer } from "./Footer";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface Props {
  children: React.ReactElement;
}

export default function AppLayout({
  children,
}: Props): ReactElement {
  return (
    <div className="min-h-screen flex flex-col justify-between">
      
        <TopBar />
        {/* <Sidebar /> */}
        <Sidebar />
        
            {/* <TopBar /> */}
            {children}
        
        {/* <Dashboard /> */}
      <Footer />
    </div>
  );
}