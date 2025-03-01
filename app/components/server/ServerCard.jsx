import { statusColors, dayColors } from '../../utils/statusUtils';

export default function ServerCard({ server, onDayClick, historyDays }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-5">
      <div className="flex justify-between items-center mb-4">
        <div>
          <div className="text-lg font-semibold">{server.name}</div>
          <div className="text-gray-500 text-sm">{server.ip}</div>
        </div>
        <div className={`px-3 py-1 rounded-full text-sm font-medium ${statusColors[server.currentStatus]}`}>
          {server.currentStatus}
        </div>
      </div>
      <div className="mt-4">
        <div className="text-base font-medium mb-2">Uptime History (Last {historyDays} Days)</div>
        <div className="flex h-8 gap-0.5 rounded overflow-hidden">
          {server.history.slice(-historyDays).map((day, index) => (
            <div
              key={index}
              className={`flex-1 cursor-pointer hover:opacity-70 transition-opacity ${dayColors[day.status]}`}
              title={`${day.date.toLocaleDateString()}: ${day.status}`}
              onClick={() => onDayClick(server, index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
} 