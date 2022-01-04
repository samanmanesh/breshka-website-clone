import React, { ReactElement } from "react";
import Sidebar from "./Sidebar";
import TopBar from "./TopBar";

interface Props {
  children: React.ReactElement;
}

export default function AppLayout({
  children,
}: Props): ReactElement {
  return (
    <div className="min-h-screen bg-green-200">
      
        <TopBar />
        {/* <Sidebar /> */}

        
            {/* <TopBar /> */}
            {children}
        
        {/* <Dashboard /> */}
      
    </div>
  );
}