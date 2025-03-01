export default function ServerModal({ isOpen, onClose, serverData }) {
  if (!isOpen || !serverData) return null;

  const { server, day } = serverData;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50" onClick={onClose}>
      <div className="bg-white rounded-lg shadow-lg w-[500px] max-w-[90%] p-6" onClick={(e) => e.stopPropagation()}>
        <div className="flex justify-between items-center mb-5">
          <h2 className="text-xl font-semibold">{`${server.name} - ${day.date.toLocaleDateString()}`}</h2>
          <button className="text-2xl text-gray-500 hover:text-gray-700" onClick={onClose}>
            &times;
          </button>
        </div>
        <div className="grid grid-cols-2 gap-5 mb-4">
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="text-2xl font-semibold mb-1">{day.responseTime}</div>
            <div className="text-gray-500 text-sm">Response Time</div>
          </div>
          <div className="bg-gray-100 rounded-lg p-4">
            <div className="text-2xl font-semibold mb-1">{server.uptime}</div>
            <div className="text-gray-500 text-sm">Uptime</div>
          </div>
        </div>
        <div className="space-y-4">
          <div>
            <div className="font-medium mb-1">Server Name</div>
            <div>{server.name}</div>
          </div>
          <div>
            <div className="font-medium mb-1">IP Address</div>
            <div>{server.ip}</div>
          </div>
          <div>
            <div className="font-medium mb-1">Status</div>
            <div>{day.status}</div>
          </div>
          <div>
            <div className="font-medium mb-1">Incident Details</div>
            <div>{day.incident}</div>
          </div>
        </div>
        <div className="text-center text-gray-500 text-sm mt-4">
          {day.date.toLocaleDateString()}
        </div>
      </div>
    </div>
  );
} 