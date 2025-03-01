"use client";

import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import { useRouter } from 'next/navigation';

export default function Header() {
  const router = useRouter();
  
  return (
    <header className="bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-5 flex justify-between items-center h-16">
        <h1 className="text-xl font-bold text-gray-800">Service Uptime Dashboard</h1>
        <div className="flex items-center gap-4">
          <SignedOut>
            <button 
              onClick={() => router.push('/sign-in')} 
              className="px-4 py-2 text-sm font-medium text-gray-700 hover:text-gray-900"
            >
              Sign In
            </button>
            <button 
              onClick={() => router.push('/sign-up')} 
              className="px-4 py-2 text-sm font-medium bg-primary text-white rounded-md hover:bg-primary/90"
            >
              Sign Up
            </button>
          </SignedOut>
          <SignedIn>
            <div className="flex items-center gap-4">
              <UserButton afterSignOutUrl="/" />
            </div>
          </SignedIn>
        </div>
      </div>
    </header>
  );
} 