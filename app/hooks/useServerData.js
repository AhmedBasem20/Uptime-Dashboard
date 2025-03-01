import { useState, useEffect } from 'react';
import { initialServers, generateStatusHistory } from '../utils/serverData';
import useResponsiveHistory from './useResponsiveHistory';

export default function useServerData() {
  const [servers, setServers] = useState([]);
  const [modalData, setModalData] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const { historyDays } = useResponsiveHistory();

  useEffect(() => {
    // Initialize servers with history data
    const serversWithHistory = initialServers.map((server) => ({
      ...server,
      history: generateStatusHistory(),
    }));
    setServers(serversWithHistory);
  }, []);

  const handleDayClick = (server, dayIndex) => {
    setModalData({
      server: server,
      day: server.history[dayIndex],
    });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return {
    servers,
    modalData,
    isModalOpen,
    historyDays,
    handleDayClick,
    closeModal,
  };
}
