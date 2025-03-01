import ServerCard from './ServerCard';

export default function ServerList({ servers, onDayClick, historyDays }) {
  return (
    <div className="space-y-4">
      {servers.map((server) => (
        <ServerCard
          key={server.id}
          server={server}
          onDayClick={onDayClick}
          historyDays={historyDays}
        />
      ))}
    </div>
  );
}
