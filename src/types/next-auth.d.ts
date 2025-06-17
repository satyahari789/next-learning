//import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      name?: string;
      email: string;
    };
  }

  declare module 'next-auth' {
  interface User {
    id?: string;
    _id: string | ObjectId;
    name?: string;
    email: string;
    password?: string;
  }
}

}

declare module 'next-auth/jwt' {
  interface JWT {
    id?: string;
    email?: string;
    name?: string;
  }
}