"use client"
import { useUser } from "@clerk/nextjs";
import { useRouter } from "next/navigation";
import { useEffect } from "react";
import useServerData from './hooks/useServerData';
import ServerList from './components/server/ServerList';
import ServerModal from './components/server/ServerModal';

export default function Home() {
  const { user, isLoaded } = useUser();
  const router = useRouter();
  
  useEffect(() => {
    if (isLoaded && !user) {
      router.push('/sign-in');
    }
  }, [isLoaded, user, router]);

  const {
    servers,
    modalData,
    isModalOpen,
    historyDays,
    handleDayClick,
    closeModal,
    refreshData,
  } = useServerData();

  // If auth is still loading or user is not authenticated, show loading state
  if (!isLoaded || !user) {
    return (
      <div className="flex justify-center items-center h-[calc(100vh-8rem)]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-5">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-lg font-medium">Welcome, {user?.firstName || 'User'}</h2>
      </div>
      <ServerList 
        servers={servers} 
        onDayClick={handleDayClick} 
        historyDays={historyDays}
      />
      <ServerModal
        isOpen={isModalOpen}
        onClose={closeModal}
        serverData={modalData}
      />
    </div>
  );
}
