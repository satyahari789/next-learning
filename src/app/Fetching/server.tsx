// app/fetching-data/ssr/page.tsx

export const dynamic = 'force-dynamic'; // disables caching

export default async function SSRPage() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts/2', { cache: 'no-store' });
  const data = await res.json();
 console.log(data)
  return <pre>{JSON.stringify(data, null, 2)}</pre>;
}
