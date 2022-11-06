import Link from 'next/link';

export default function Button({ children, goto }: { children: string, goto: string }) {
  return (
    <Link href={goto}>
      <div className="inline-block px-5 py-2 bg-slate-800 hover:bg-slate-900 hover:cursor-pointer text-white font-mono">
          {children}
      </div>
    </Link>
  );
}
