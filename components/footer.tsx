import Link from 'next/link';

const footerLinks = [
  { name: 'Home', href: '/', local: true },
  { name: 'Privacy Policy', href: 'https://txt.ricky.cat/legal/privacy', local: false },
  { name: 'Terms of Service', href: 'https://txt.ricky.cat/legal/tos', local: false },
  { name: 'Content Guidelines', href: 'https://txt.ricky.cat/legal/content', local: false },
  { name: 'About', href: 'https://txt.ricky.cat/about', local: false },
  { name: 'Source Code', href: 'https://github.com/orca-group/www.ricky.cat', local: false },
  { name: 'Contact', href: 'mailto:hello@ricky.cat', local: false },
  { name: 'Frequently Asked Questions', href: 'https://txt.ricky.cat/faq', local: false },
  { name: 'Web App', href: '/app', local: true },
  { name: 'Status', href: 'https://status.ricky.cat', local: false }
];

export default function Footer() {
  return (
    <div className="border-t py-4 border-black">
      <footer className="grid grid-cols-2 justify-items-stretch">
        <div>
          <Link className="justify-self-start font-serif text-xl font-bold hover:underline" href="/">ricky.cat</Link>

          <p className="max-w-sm mt-3">
            ricky.cat is an app designed for sharing pictures of your cats, dogs, or whatever else
            you want. Lorem ipsum dolor sit amet, consectetur adipiscing.
          </p>

          <p className="mt-3">
            Copyright © {new Date().getFullYear()} ricky.cat Team
          </p>
        </div>
        <div className="justify-self-end grid grid-cols-2 grid-rows-5">
          {footerLinks.map(e => e.local ? (
            <Link
              key={e.name}
              className="text-blue-500 hover:underline hover:cursor-pointer"
              href={e.href}
            >
              {e.name}
            </Link>
          ) : (
            <a
              key={e.name}
              className="text-blue-500 hover:underline hover:cursor-pointer"
              href={e.href}
              rel="noreferrer"
              target="_blank"
            >
              {e.name}
            </a>
          ))}
        </div>
      </footer>
    </div>
  )
};
