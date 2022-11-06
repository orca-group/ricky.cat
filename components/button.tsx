import React from 'react';
import Link from 'next/link';

export default function Button({ children, goto }: { children: string; goto: string }) {
  return (
    <Link href={goto}>
      <div className="inline-block text-white px-4 py-2 rounded ease-in duration-150 bg-slate-900 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
        {children}
      </div>
    </Link>
  );
}
