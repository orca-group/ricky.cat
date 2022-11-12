import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import {
  BellIcon, BookmarkIcon, Cog6ToothIcon, HomeIcon, UserCircleIcon,
} from '@heroicons/react/24/outline';
import Navbar from '../nav';
import Footer from '../footer';

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
            <ul className="block py-2 mr-10 rounded-md bg-gray-100 text-black shadow-sm">
              <li className="px-5 py-2 text-sm font-regular uppercase tracking-wide">
                ricky.cat
              </li>
              <li className="my-1 mx-3 font-semibold">
                <Link
                  href="/app/"
                  className="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
                >
                  <HomeIcon className="w-6 h-6" />
                  <span>Home</span>
                </Link>
              </li>
              <li className="my-1 mx-3 font-semibold">
                <Link
                  href="/app/notifications"
                  className="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
                >
                  <BellIcon className="w-6 h-6" />
                  <span>Notifications</span>
                </Link>
              </li>
              <li className="my-1 mx-3 font-semibold">
                <Link
                  href="/app/bookmarks"
                  className="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
                >
                  <BookmarkIcon className="w-6 h-6" />
                  <span>Bookmarks</span>
                </Link>
              </li>
              <li className="my-1 mx-3 font-semibold">
                <Link
                  href="/app/profile"
                  className="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
                >
                  <UserCircleIcon className="w-6 h-6" />
                  <span>Profile</span>
                </Link>
              </li>
              <li className="my-1 mx-3 font-semibold">
                <Link
                  href="/app/settings"
                  className="py-2 px-4 flex gap-3 hover:bg-gray-300 rounded-md"
                >
                  <Cog6ToothIcon className="w-6 h-6" />
                  <span>Settings</span>
                </Link>
              </li>
            </ul>
          </div>
          <div className="col-span-6 max-w-4xl">{children}</div>
        </main>
        <Footer />
      </div>
    </>
  );
}
