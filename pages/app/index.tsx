import React from 'react';
import Layout from '../../components/app/layout';
import Post from '../../components/app/post';

export default function App() {
  return (
    <Layout title="App">
      <h1 className="text-4xl font-bold">Hey dude, ready to post some cats?</h1>
      <p className="mt-5">
        This is your wall, it&apos;s a catalogue of everything posted on ricky.cat in the last few
        days that&apos;s received a lot of attention. If you want to make a post, just click
        <button type="button" className="ml-1 text-blue-400 hover:underline">here</button>
        .
      </p>

      <div className="grid grid-cols-3 gap-3 border-t pt-10 border-gray-400 mt-10">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((i) => (
          <Post key={i} />
        ))}
      </div>
    </Layout>
  );
}
