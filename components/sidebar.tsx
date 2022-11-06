import React from 'react';
import Link from 'next/link';

export default function Sidebar({ pages }: { pages: (string | string[])[] }) {
  return (
    <ul className="inline-block border-x bg-white border-b border-black fixed">
      {pages.map((x) => {
        if (typeof x === 'string') {
          return (
            <li className="px-4 py-2 bg-gray-100 text-lg font-bold font-serif border-y border-black">
              {x}
            </li>
          );
        }

        return (
          <li className="my-3 mx-4">
            <Link
              href={x[1]}
              className="text-blue-500 hover:underline"
            >
              {x[0]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
