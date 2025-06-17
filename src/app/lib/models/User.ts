export interface User {
  _id?: string; // MongoDB ObjectId as string
  email: string;
  password: string;
  name?: string;
  image?: string;
  createdAt?: Date;
}