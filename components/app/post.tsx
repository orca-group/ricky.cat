import React from 'react';
import Image from 'next/image';
import {
  HeartIcon, ArrowRightCircleIcon,
} from '@heroicons/react/24/outline';

export default function Post() {
  return (
    <div className="p-3 bg-gray-100 rounded-md">
      <Image src="/cat.jpg" alt="Image of a cat" width={300} height={300} className="w-full rounded-md" />
      <div className="mt-3 flex justify-between">
        <span className="font-semibold">@lukewhrit</span>
        <div className="flex gap-1">
          <HeartIcon className="w-7 h-7" />
          <ArrowRightCircleIcon className="w-7 h-7" />
        </div>
      </div>
    </div>
  );
}
