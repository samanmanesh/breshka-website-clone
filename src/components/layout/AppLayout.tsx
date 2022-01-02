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
      <div>
        <TopBar />
        <Sidebar />

        <div className="md:pl-64">
          <div className="mx-auto max-w-4xl">
            {/* <TopBar /> */}
            {children}
          </div>
        </div>
        {/* <Dashboard /> */}
      </div>
    </div>
  );
}