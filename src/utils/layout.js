import Footer from "@/components/footer";
import Header from "@/components/header";
import Head from "next/head";
import React from "react";

function Layout({ title, children }) {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <main className="max-w-[1920px] bg-white mx-auto relative overflow-hidden">
        <Header />
        {children}
        <Footer />
      </main>
    </>
  );
}

export default Layout;
