import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { connectToDB } from '@/app/lib/mongodb';
import { compare } from 'bcrypt';
//import type { AuthOptions } from 'next-auth';
import type { AuthOptions } from 'next-auth';
import { User } from '@/types/user';

export const authOptions: AuthOptions = {
  session: {
    strategy: 'jwt',
  },
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        const { email, password } = credentials ?? {};
        if (!email || !password) throw new Error('Missing credentials');

        const db = await connectToDB();
        const user = await db.collection<User>('users').findOne({ email });

        if (!user || !user.password) throw new Error('User not found');

        const isPasswordValid = await compare(password, user.password);
        if (!isPasswordValid) throw new Error('Invalid password');

        // ✅ Return user with `id` instead of `_id`
        return {
          id: user._id.toString(),
          name: user.name,
          email: user.email,
        };
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.email = user.email ?? undefined;
        token.name = user.name ?? undefined;
      }
      return token;
    },
    async session({ session, token }) {
      if (token && session.user) {
        session.user.id = token.id as string;
        session.user.email = token.email!;
        session.user.name = token.name;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login',
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };