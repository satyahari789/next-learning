import Link from 'next/link';

const links = [
  { href: '/layouts-and-pages', label: 'Creating Layouts and Pages' },
  { href: '/navigation', label: 'Navigating Between Pages' },
  { href: '/Fetching', label: 'Fetching Data  ' },
 // { href: '/fetching-data/ssr', label: 'Fetching Data (SSR)' },
  //{ href: '/fetching-data/client', label: 'Fetching Data (Client)' },
  { href: '/partial-prerendering', label: 'Partial Prerendering' },
  { href: '/search-pagination', label: 'Search and Pagination' },
  { href: '/mutate-data', label: 'Mutating Data (Forms/API)' },
  { href: '/error-handling', label: 'Handling Errors' },
];

export default function HomePage() {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Next.js Concepts Demo</h1>
      <ul className="list-disc pl-6 space-y-2">
        {links.map((link) => (
          <li key={link.href}>
            <Link href={link.href} className="text-blue-600 hover:underline">
              {link.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
