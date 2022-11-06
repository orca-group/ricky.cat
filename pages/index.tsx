import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import Button from '../components/button';
import Layout from '../components/layout';

export default function Home() {
  return (
    <Layout title="Home">
      <div className="mx-auto grid gap-8 grid-cols-2 align-middle">
        <Image
          src="/iPhone.svg"
          alt="Image of the ricky.cat iPhone app"
          className="justify-self-end"
          width={341}
          height={802}
        />
        <div className="max-w-md self-center">
          <h1 className="text-4xl font-serif font-bold">ricky.cat</h1>
          <p className="mt-4">
            ricky.cat is an app designed for sharing pictures of your cats, dogs, or whatever else
            you want.
          </p>
          <p className="mt-2 mb-4">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed efficitur eros et massa
            tincidunt finibus. Pellentesque habitant.
          </p>
          <Button goto="/register">Get Started</Button>
          <Link href="/login" className="ml-5 font-mono hover:underline">Log In</Link>
        </div>
      </div>
    </Layout>
  );
}
