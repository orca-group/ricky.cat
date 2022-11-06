import React from 'react';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="grid grid-cols-2 justify-items-stretch">
      <Link className="justify-self-start font-serif text-xl font-bold hover:underline" href="/">
        ricky.cat
      </Link>
      <div className="justify-self-end flex gap-2 font-mono text-md">
        <Link href="/" className="text-blue-400 hover:underline">
          /home
        </Link>
        ・
        <Link href="/txt" className="text-blue-400 hover:underline">
          /txt
        </Link>
        ・
        <Link href="/app" className="text-blue-400 hover:underline">
          /app
        </Link>
      </div>
    </nav>
  );
}
