import React from 'react';
import Navbar from './nav';
import Footer from './footer';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <div className="mx-auto px-40 py-6">
      <Navbar />
      <main className="py-12">{children}</main>
      <Footer />
    </div>
  )
};
