"use client"
import useServerData from './hooks/useServerData';
import ServerList from './components/server/ServerList';
import ServerModal from './components/server/ServerModal';

export default function Home() {
  const {
    servers,
    modalData,
    isModalOpen,
    historyDays,
    handleDayClick,
    closeModal,
  } = useServerData();

  return (
    <div className="max-w-7xl mx-auto px-5">
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
