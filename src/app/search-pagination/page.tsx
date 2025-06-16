// app/search-pagination/page.tsx
'use client';
import { useState, useEffect } from 'react';

export default function SearchPaginationPage() {
  const [posts, setPosts] = useState([]);
  const [term, setTerm] = useState('');

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.json())
      .then(setPosts);
  }, []);

  const filtered = posts.filter((p: any) =>
    p.title.toLowerCase().includes(term.toLowerCase())
  );

  return (
    <div>
      <input placeholder="Search title..." onChange={(e) => setTerm(e.target.value)} />
      <ul>
        {filtered.slice(0, 10).map((post: any) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </div>
  );
}
