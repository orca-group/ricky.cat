import React from 'react';
import Head from 'next/head';
import Navbar from './nav';
import Footer from './footer';

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <>
      <Head>
        <title>{`ricky.cat - ${title}`}</title>
        <meta property="name" content={`ricky.cat - ${title}`} key="title" />
      </Head>
      <div className="mx-auto px-40 py-6">
        <Navbar />
        <main className="py-12" id={title.toLowerCase()}>{children}</main>
        <Footer />
      </div>
    </>
  );
}
