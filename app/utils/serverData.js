// Mock server data
export const initialServers = [
  {
    id: 1,
    name: 'Web Server',
    ip: '192.168.1.100',
    currentStatus: 'Up',
    responseTime: '42ms',
    uptime: '99.8%',
  },
  {
    id: 2,
    name: 'Database Server',
    ip: '192.168.1.101',
    currentStatus: 'Degraded',
    responseTime: '156ms',
    uptime: '98.2%',
  },
  {
    id: 3,
    name: 'Application Server',
    ip: '192.168.1.102',
    currentStatus: 'Up',
    responseTime: '67ms',
    uptime: '99.5%',
  },
  {
    id: 4,
    name: 'File Server',
    ip: '192.168.1.103',
    currentStatus: 'Down',
    responseTime: '0ms',
    uptime: '95.7%',
  },
  {
    id: 5,
    name: 'Email Server',
    ip: '192.168.1.104',
    currentStatus: 'Up',
    responseTime: '38ms',
    uptime: '99.9%',
  },
];



// Function to generate random status history for the specified number of days
export const generateStatusHistory = (days = 90) => {
  const STATUS_WEIGHTS = {
    Up: 0.8,
    Degraded: 0.15,
    Down: 0.05
  };
  
  const RESPONSE_TIMES = {
    Up: [20, 80],
    Degraded: [100, 300],
    Down: [0, 0]
  };
  
  const INCIDENTS = {
    Up: 'No incidents reported',
    Degraded: 'Performance degradation detected',
    Down: 'Service unavailable'
  };

  const history = [];

  for (let i = 0; i < days; i++) {
    const date = new Date();
    date.setDate(date.getDate() - days + i);

    // Generate random status based on weights
    const rand = Math.random();
    let status;
    if (rand < STATUS_WEIGHTS.Up) {
      status = 'Up';
    } else if (rand < STATUS_WEIGHTS.Up + STATUS_WEIGHTS.Degraded) {
      status = 'Degraded'; 
    } else {
      status = 'Down';
    }

    // Generate response time based on status
    const [min, max] = RESPONSE_TIMES[status];
    const responseTime = status === 'Down' ? 0 : 
      Math.floor(Math.random() * (max - min + 1)) + min;

    history.push({
      date: date,
      status: status,
      responseTime: `${responseTime}ms`,
      incident: INCIDENTS[status]
    });
  }

  return history;
};
