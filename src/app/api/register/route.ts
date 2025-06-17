
import { connectToDB } from '@/app/lib/mongodb';
import bcrypt from 'bcrypt';
import { User } from '@/types/user';

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!email || !password || !name) {
      return new Response(JSON.stringify({ error: 'All fields required' }), { status: 400 });
    }

    const db = await connectToDB();
    const users = db.collection<User>('users');

    const existing = await users.findOne({ email });
    if (existing) {
      return new Response(JSON.stringify({ error: 'User already exists' }), { status: 400 });
    }

    const hashed = await bcrypt.hash(password, 10);
    const user: User = { name, email, password: hashed, createdAt: new Date() };

    await users.insertOne(user);

    return new Response(JSON.stringify({ message: 'User created' }), { status: 201 });
  } catch (error) {
    console.log(error)
    return new Response(JSON.stringify({ error: 'Server error' }), { status: 500 });
  }
}
