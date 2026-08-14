export default function AuditLogs() {
  const logs = [
    { time: '10:24 AM', user: 'analyst_01', role: 'Analyst', action: 'Viewed TXN-1023' },
    { time: '10:26 AM', user: 'analyst_01', role: 'Analyst', action: 'Marked case suspicious' },
    { time: '10:30 AM', user: 'senior_02', role: 'Senior Analyst', action: 'Generated SAR' },
    { time: '10:35 AM', user: 'manager_01', role: 'Manager', action: 'Approved SAR' },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      <div className="bg-dark-surface border border-dark-border rounded-xl shadow-sm overflow-hidden flex flex-col">
        <div className="px-6 py-5 border-b border-dark-border bg-dark-surface/50 flex justify-between items-center">
          <div>
            <h3 className="text-lg font-medium text-white">System Audit Logs</h3>
            <p className="text-sm text-dark-text-muted mt-1">Immutable record of system and user actions</p>
          </div>
          <button 
            disabled 
            className="bg-dark-bg border border-dark-border text-dark-text-muted px-4 py-2 rounded-md text-sm font-medium opacity-50 cursor-not-allowed flex items-center gap-2"
            title="Export functionality disabled in prototype"
          >
            <span>⬇️</span> Export CSV
          </button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-dark-bg/50 border-b border-dark-border text-xs uppercase tracking-wider text-dark-text-muted">
                <th className="px-6 py-4 font-medium w-48">Timestamp</th>
                <th className="px-6 py-4 font-medium w-48">User</th>
                <th className="px-6 py-4 font-medium w-48">Role</th>
                <th className="px-6 py-4 font-medium">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border">
              {logs.map((log, i) => (
                <tr key={i} className="hover:bg-dark-border/20 transition-colors">
                  <td className="px-6 py-4 text-dark-text-muted font-mono text-sm">{log.time}</td>
                  <td className="px-6 py-4 text-white font-medium">{log.user}</td>
                  <td className="px-6 py-4">
                    <span className="bg-dark-bg border border-dark-border text-dark-text-muted text-xs px-2.5 py-1 rounded-md font-medium">
                      {log.role}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-white text-sm">{log.action}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="px-6 py-4 border-t border-dark-border bg-dark-bg/50 flex items-center justify-between text-xs text-dark-text-muted">
          <span>Showing 4 entries</span>
          <div className="flex items-center gap-2">
            <button disabled className="px-2 py-1 rounded border border-dark-border opacity-50 cursor-not-allowed">Previous</button>
            <button disabled className="px-2 py-1 rounded border border-dark-border bg-dark-surface opacity-50 cursor-not-allowed">Next</button>
          </div>
        </div>
      </div>
    </div>
  );
}
