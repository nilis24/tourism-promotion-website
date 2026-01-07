import React from "react";
import Header from "../components/home/Header";
import Footer from "../components/home/Footer";

export default function Layout({ children }) {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header always visible */}
      <Header />

      {/* Main content */}
      <main className="flex-1">{children}</main>

      {/* Footer always visible */}
      <Footer />
    </div>
  );
}
