import React from 'react';
import Head from 'next/head';
import Navbar from './nav';
import Footer from './footer';
import Sidebar from './sidebar';

const pages = [
  'ricky.cat',
  ['Wall', '/app'],
  ['Bookmarks', '/app/bookmarks'],
  ['Notifications', '/app/notifications'],
  ['Profile', '/app/user/@me'],
  ['Settings', '/app/settings'],

  // Legal, Policies, etc.
  'Your Pages',
  ['Lorem Ipsum', '/app/page/@lorem-ipsum'],
  ['Dolor Sit Amet', '/app/page/@dolor-sit-amet'],
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
