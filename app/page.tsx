'use client';

import { useSession } from 'next-auth/react';
import { Button } from '../components/ui/button';
import Link from 'next/link';

export default function Home() {
  const { data: session, status } = useSession();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 space-y-8 text-center">
      <h1 className="text-4xl font-bold">Hi</h1>
      <p className="max-w-md text-lg text-gray-600">
        Auth Starter 
      </p>

      <div className="flex flex-col sm:flex-row space-y-3 sm:space-y-0 sm:space-x-4">
        {status === 'authenticated' ? (
          <Link href="/dashboard" passHref>
            <Button size="lg">Go to Dashboard</Button>
          </Link>
        ) : (
          <>
            <Link href="/auth/signin" passHref>
              <Button size="lg" variant="default">Sign In</Button>
            </Link>
            <Link href="/auth/signup" passHref>
              <Button size="lg" variant="outline">Sign Up</Button>
            </Link>
          </>
        )}
      </div>

      {status === 'authenticated' && (
        <div className="p-4 mt-4 bg-green-100 rounded-md text-green-800">
          Signed in as {session.user?.name || session.user?.email}
        </div>
      )}
    </div>
  );
}