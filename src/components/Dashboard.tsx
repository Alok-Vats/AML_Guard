// @ts-nocheck
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, LineChart, Line, CartesianGrid } from 'recharts';

export default function Dashboard() {
  const medianTxData = [
    { name: 'Normal', amount: 1411 },
    { name: 'Laundering', amount: 8667 }
  ];

  const hourlyRiskData = [
    { hour: '0:00', rate: 0.001 },
    { hour: '2:00', rate: 0.001 },
    { hour: '4:00', rate: 0.001 },
    { hour: '6:00', rate: 0.002 },
    { hour: '8:00', rate: 0.015 },
    { hour: '10:00', rate: 0.120 },
    { hour: '11:00', rate: 0.350 },
    { hour: '12:00', rate: 0.580 },
    { hour: '13:00', rate: 0.450 },
    { hour: '14:00', rate: 0.380 },
    { hour: '15:00', rate: 0.250 },
    { hour: '16:00', rate: 0.150 },
    { hour: '18:00', rate: 0.040 },
    { hour: '20:00', rate: 0.010 },
    { hour: '22:00', rate: 0.002 },
  ];

  const formatRiskData = [
    { format: 'ACH', rate: 0.746 },
    { format: 'Bitcoin', rate: 0.038 },
    { format: 'Cash', rate: 0.022 },
    { format: 'Cheque', rate: 0.017 }
  ];

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-dark-surface border border-dark-border p-3 rounded-md shadow-lg">
          <p className="text-white text-sm font-medium">{label}</p>
          <p className="text-primary text-sm font-bold mt-1">
            {payload[0].name === 'amount' ? '$' + payload[0].value.toLocaleString() : payload[0].value + '%'}
          </p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        <div className="bg-dark-surface border border-dark-border rounded-xl p-5 shadow-sm hover:border-primary/50 transition-colors">
          <p className="text-sm text-dark-text-muted font-medium mb-1">Total Transactions</p>
          <p className="text-3xl font-bold text-white">5,078,345</p>
          <p className="text-xs text-dark-text-muted mt-2 font-medium">IBM AML Dataset Size</p>
        </div>
        <div className="bg-dark-surface border border-danger/40 rounded-xl p-5 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-danger/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <p className="text-sm text-dark-text-muted font-medium mb-1">Base Laundering Rate</p>
          <p className="text-3xl font-bold text-danger">0.102%</p>
          <p className="text-xs text-danger mt-2 font-medium flex items-center gap-1">
            Global average baseline
          </p>
        </div>
        <div className="bg-dark-surface border border-dark-border rounded-xl p-5 shadow-sm hover:border-primary/50 transition-colors">
          <p className="text-sm text-dark-text-muted font-medium mb-1">Suspicious Clusters</p>
          <p className="text-3xl font-bold text-white">12</p>
          <p className="text-xs text-dark-text-muted mt-2 font-medium">3 new detected today</p>
        </div>
        <div className="bg-dark-surface border border-dark-border rounded-xl p-5 shadow-sm hover:border-warning/50 transition-colors">
          <p className="text-sm text-dark-text-muted font-medium mb-1">SARs Pending Review</p>
          <p className="text-3xl font-bold text-warning">5</p>
          <p className="text-xs text-dark-text-muted mt-2 font-medium">Awaiting Compliance Manager</p>
        </div>
      </div>

      {/* Middle Section: Recharts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1: Median Transaction Amount */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6 shadow-sm flex flex-col h-[350px]">
          <h3 className="text-lg font-medium text-white mb-6">Median Transaction Amount</h3>
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={medianTxData} margin={{ top: 10, right: 10, left: 0, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="name" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} axisLine={false} tickLine={false} dy={10} />
                <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(val) => '$' + val} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: '#1e293b'}} />
                <Bar dataKey="amount" fill="#3b82f6" radius={[4, 4, 0, 0]} maxBarSize={60} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 2: Laundering Rate by Hour */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6 shadow-sm flex flex-col h-[350px]">
          <h3 className="text-lg font-medium text-white mb-6">Laundering Rate by Hour</h3>
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={hourlyRiskData} margin={{ top: 10, right: 10, left: -20, bottom: 20 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" vertical={false} />
                <XAxis dataKey="hour" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} axisLine={false} tickLine={false} dy={10} minTickGap={20} />
                <YAxis stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(val) => val + '%'} />
                <Tooltip content={<CustomTooltip />} />
                <Line type="monotone" dataKey="rate" stroke="#ef4444" strokeWidth={3} dot={{r: 3, fill: '#1e293b', stroke: '#ef4444'}} activeDot={{r: 6, fill: '#ef4444'}} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Chart 3: Risk by Payment Format */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6 shadow-sm flex flex-col h-[350px] lg:col-span-2">
          <h3 className="text-lg font-medium text-white mb-6">Risk by Payment Format</h3>
          <div className="flex-1 w-full min-h-0">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart layout="vertical" data={formatRiskData} margin={{ top: 10, right: 30, left: 20, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#334155" horizontal={false} />
                <XAxis type="number" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 12}} axisLine={false} tickLine={false} tickFormatter={(val) => val + '%'} />
                <YAxis type="category" dataKey="format" stroke="#94a3b8" tick={{fill: '#94a3b8', fontSize: 13, fontWeight: 500}} axisLine={false} tickLine={false} width={80} />
                <Tooltip content={<CustomTooltip />} cursor={{fill: '#1e293b'}} />
                <Bar dataKey="rate" fill="#f59e0b" radius={[0, 4, 4, 0]} barSize={32} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

      </div>
    </div>
  );
}
