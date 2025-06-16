// app/mutate-data/page.tsx
'use client';
import { useState } from 'react';

export default function MutatePage() {
  const [title, setTitle] = useState('');

  const handleSubmit = async () => {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts', {
      method: 'POST',
      body: JSON.stringify({ title, body: 'test', userId: 1 }),
      headers: { 'Content-type': 'application/json; charset=UTF-8' },
    });

    const data = await res.json();
    alert(`Created Post ID: ${data.id}`);
  };

  return (
    <div>
      <input placeholder="Title" onChange={(e) => setTitle(e.target.value)} />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  );
}
