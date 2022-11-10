import React from 'react';
import Head from 'next/head';
import Navbar from './nav';
import Footer from './footer';
import Sidebar from './sidebar';

const pages = [
  // Documentation
  'Documentation',
  ['Home', '/txt'],
  ['Frequently Asked Questions', '/txt/faq'],
  ['About Us', '/txt/about-us'],

  // Legal, Policies, etc.
  'Legal',
  ['Terms of Service', '/txt/legal/tos'],
  ['Privacy Policy', '/txt/legal/privacy'],
  ['Content Guidelines', '/txt/legal/content-guidelines'],
  ['Security', '/txt/legal/security'],

  'Developers',
  ['Getting Started', '/txt/developers/getting-started'],
  ['API Reference', '/txt/developers/api-reference'],
];

export default function Layout({ children, title }: { children: React.ReactNode, title: string }) {
  return (
    <>
      <Head>
        <title>{`ricky.cat - ${title}`}</title>
        <meta property="name" content={`ricky.cat - ${title}`} key="title" />
      </Head>
      <div className="mx-auto px-40 py-6">
        <Navbar />
        <main className="py-12 grid grid-cols-8 gap-3" id={title.toLowerCase()}>
          <div className="col-span-2">
            <Sidebar pages={pages} />
          </div>
          <div className="prose col-span-6">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
