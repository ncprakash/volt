'use client';
import { SignUp } from '@clerk/nextjs';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold mb-6 text-center text-gray-800">Create an Account</h2>
        <SignUp />
        <p className="mt-4 text-sm text-gray-600 text-center">
          Already have an account? <Link href="/sign-in" className="text-blue-500 hover:underline">Sign in</Link>
        </p>
      </div>
    </div>
  );
}