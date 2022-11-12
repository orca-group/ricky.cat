import React from 'react';
import Link from 'next/link';

export default function Sidebar({ pages }: { pages: (string | string[])[] }) {
  return (
    <ul className="block py-2 mr-10 rounded-md bg-gray-100 text-black shadow-sm">
      {pages.map((x) => {
        if (typeof x === 'string') {
          return (
            <li className="px-5 py-2 text-sm font-regular uppercase tracking-wide">
              {x}
            </li>
          );
        }

        return (
          <li className="my-1 mx-3 font-semibold">
            <Link
              href={x[1]}
              className="block py-2 px-4 hover:bg-gray-300 rounded-md"
            >
              {x[0]}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
