'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function RegisterPage() {
  const router = useRouter();
  const [form, setForm] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    const res = await fetch('/api/register', {
      method: 'POST',
      body: JSON.stringify(form),
    });

    if (res.ok) {
      router.push('/login');
    } else {
      const data = await res.json();
      setError(data.error || 'Failed to register');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 mt-20">
      <h1 className="text-2xl font-bold">Register</h1>
      <Input name="name" placeholder="Name" value={form.name} onChange={handleChange} />
      <Input name="email" type="email" placeholder="Email" value={form.email} onChange={handleChange} />
      <Input name="password" type="password" placeholder="Password" value={form.password} onChange={handleChange} />
      {error && <p className="text-red-500">{error}</p>}
      <Button type="submit">Register</Button>
    </form>
  );
}