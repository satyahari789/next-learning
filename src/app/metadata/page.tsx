export const metadata = {
  title: 'SEO Metadata Page',
  description: 'This page sets title and description for SEO and social sharing.',
  keywords: ['nextjs', 'metadata', 'SEO'],
  openGraph: {
    title: 'SEO Metadata Page',
    description: 'This page sets title and description for SEO and social sharing.',
    url: 'http://localhost:3000/metadata',
  },
};

export default function MetadataPage() {
  return (
    <div className="p-4">
      <h1 className="text-xl font-bold">Metadata Page</h1>
      <p>This page includes metadata for SEO and OpenGraph for social platforms.</p>
    </div>
  );
}