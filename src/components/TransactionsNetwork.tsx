import { useState } from 'react';

export default function TransactionsNetwork() {
  const [selectedTxn, setSelectedTxn] = useState<string | null>(null);

  const transactions = [
    { id: 'TXN-8842', timestamp: '2023-10-24 10:00:00', fromBank: 'Bank of America', toBank: 'Wells Fargo', amount: 9800.00, currency: 'USD', format: 'ACH', risk: '95%', status: 'FLAGGED' },
    { id: 'TXN-8843', timestamp: '2023-10-24 10:12:00', fromBank: 'Wells Fargo', toBank: 'Chase', amount: 9900.00, currency: 'USD', format: 'Wire', risk: '96%', status: 'FLAGGED' },
    { id: 'TXN-8844', timestamp: '2023-10-24 11:30:00', fromBank: 'Citibank', toBank: 'Capital One', amount: 2450.00, currency: 'USD', format: 'Credit Card', risk: '12%', status: 'CLEARED' },
    { id: 'TXN-8845', timestamp: '2023-10-24 14:45:00', fromBank: 'PNC', toBank: 'TD Bank', amount: 45000.00, currency: 'USD', format: 'Cheque', risk: '45%', status: 'REVIEW' },
    { id: 'TXN-8846', timestamp: '2023-10-24 16:20:00', fromBank: 'US Bank', toBank: 'Truist', amount: 150.00, currency: 'USD', format: 'Bitcoin', risk: '5%', status: 'CLEARED' },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Module A: Transactions Table */}
      <div className="bg-dark-surface border border-dark-border rounded-xl shadow-sm overflow-hidden relative">
        <div className="px-6 py-5 border-b border-dark-border bg-dark-surface/50">
          <h3 className="text-lg font-medium text-white">Transactions (Module A)</h3>
          <p className="text-sm text-dark-text-muted mt-1">Select a transaction to view alert details.</p>
        </div>
        <div className="overflow-x-auto w-full custom-scrollbar">
          <table className="w-full text-left border-collapse min-w-max">
            <thead>
              <tr className="bg-dark-bg/90 border-b border-dark-border text-xs uppercase tracking-wider text-dark-text-muted">
                <th className="px-6 py-4 font-medium sticky left-0 z-10 bg-dark-surface border-r border-dark-border/50 shadow-[1px_0_0_0_rgba(255,255,255,0.05)]">Transaction ID</th>
                <th className="px-6 py-4 font-medium">Timestamp</th>
                <th className="px-6 py-4 font-medium">From Bank</th>
                <th className="px-6 py-4 font-medium">To Bank</th>
                <th className="px-6 py-4 font-medium">Amount Paid</th>
                <th className="px-6 py-4 font-medium">Payment Currency</th>
                <th className="px-6 py-4 font-medium">Payment Format</th>
                <th className="px-6 py-4 font-medium">Risk/Status</th>
                <th className="px-6 py-4 font-medium text-right sticky right-0 z-10 bg-dark-surface border-l border-dark-border/50 shadow-[-1px_0_0_0_rgba(255,255,255,0.05)]">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border">
              {transactions.map((txn) => {
                const isSelected = selectedTxn === txn.id;
                
                return (
                <tr 
                  key={txn.id}
                  onClick={() => setSelectedTxn(txn.id)}
                  className={`cursor-pointer transition-colors group ${isSelected ? 'bg-primary/5' : 'hover:bg-dark-border/20'}`}
                >
                  <td className={`px-6 py-4 text-white font-medium sticky left-0 z-10 transition-colors border-r border-dark-border/50 shadow-[1px_0_0_0_rgba(255,255,255,0.05)] ${isSelected ? 'bg-[#0f172a] border-l-2 border-l-primary' : 'bg-dark-surface group-hover:bg-[#152033] border-l-2 border-l-transparent'}`}>
                    {txn.id}
                  </td>
                  <td className="px-6 py-4 text-dark-text-muted font-mono text-sm whitespace-nowrap">{txn.timestamp}</td>
                  <td className="px-6 py-4 text-dark-text-muted text-sm whitespace-nowrap">{txn.fromBank}</td>
                  <td className="px-6 py-4 text-dark-text-muted text-sm whitespace-nowrap">{txn.toBank}</td>
                  <td className="px-6 py-4 text-white font-medium whitespace-nowrap">${txn.amount.toLocaleString(undefined, {minimumFractionDigits: 2, maximumFractionDigits: 2})}</td>
                  <td className="px-6 py-4 text-dark-text-muted font-mono text-sm">{txn.currency}</td>
                  <td className="px-6 py-4">
                    <span className={`text-[10px] px-2.5 py-1 rounded-md font-bold uppercase tracking-wider whitespace-nowrap ${
                      txn.format === 'ACH' ? 'bg-blue-500/10 text-blue-400 border border-blue-500/20' :
                      txn.format === 'Wire' ? 'bg-purple-500/10 text-purple-400 border border-purple-500/20' :
                      txn.format === 'Credit Card' ? 'bg-pink-500/10 text-pink-400 border border-pink-500/20' :
                      txn.format === 'Bitcoin' ? 'bg-orange-500/10 text-orange-400 border border-orange-500/20' :
                      'bg-dark-bg text-dark-text-muted border border-dark-border'
                    }`}>
                      {txn.format}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3 whitespace-nowrap">
                      <span className={`font-bold w-10 ${parseInt(txn.risk) > 80 ? 'text-danger' : parseInt(txn.risk) > 30 ? 'text-warning' : 'text-success'}`}>{txn.risk}</span>
                      <span className={`text-xs px-2.5 py-1 rounded-md border font-medium flex items-center gap-1.5 ${
                        txn.status === 'FLAGGED' ? 'bg-danger/10 text-danger border-danger/20' : 
                        txn.status === 'REVIEW' ? 'bg-warning/10 text-warning border-warning/20' : 
                        'bg-success/10 text-success border-success/20'
                      }`}>
                        {txn.status === 'FLAGGED' && <div className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse"></div>}
                        {txn.status === 'REVIEW' && <div className="w-1.5 h-1.5 rounded-full bg-warning"></div>}
                        {txn.status === 'CLEARED' && <div className="w-1.5 h-1.5 rounded-full bg-success"></div>}
                        {txn.status}
                      </span>
                    </div>
                  </td>
                  <td className={`px-6 py-4 text-right sticky right-0 z-10 transition-colors border-l border-dark-border/50 shadow-[-1px_0_0_0_rgba(255,255,255,0.05)] ${isSelected ? 'bg-[#0f172a]' : 'bg-dark-surface group-hover:bg-[#152033]'}`}>
                    <button className="bg-dark-bg border border-dark-border hover:border-white text-white text-sm px-4 py-1.5 rounded-md transition-all shadow-sm whitespace-nowrap">
                       {txn.status === 'CLEARED' ? 'View' : txn.status === 'REVIEW' ? 'Review' : 'Investigate'}
                    </button>
                  </td>
                </tr>
              )})}
            </tbody>
          </table>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Alert Details Panel */}
        <div className={`bg-dark-surface border border-dark-border rounded-xl shadow-sm overflow-hidden flex flex-col transition-all duration-300 ${selectedTxn ? 'opacity-100' : 'opacity-50 pointer-events-none grayscale'}`}>
          <div className="px-6 py-5 border-b border-dark-border bg-dark-surface/50 flex justify-between items-center">
            <h3 className="text-lg font-medium text-white">Alert Details</h3>
            <span className="bg-danger/10 text-danger text-xs px-2.5 py-1 rounded-full border border-danger/20 font-bold flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse"></div>
              🔴 HIGH RISK
            </span>
          </div>
          <div className="p-6 flex-1 flex flex-col">
            <h4 className="text-xl font-bold text-white mb-2">ALERT #AML-204</h4>
            <p className="text-sm text-dark-text-muted mb-6">Suspicious structuring pattern detected. Multiple transactions just below the $10,000 reporting threshold.</p>
            
            <h5 className="text-sm font-medium text-white mb-4">Transaction Timeline</h5>
            <div className="relative pl-4 border-l border-dark-border space-y-6">
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-dark-surface"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-white">Transfer to ACC-3341</p>
                    <p className="text-xs text-dark-text-muted mt-0.5">TXN-8842</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-danger">$9,800.00</p>
                    <p className="text-xs text-dark-text-muted mt-0.5">10:00 AM</p>
                  </div>
                </div>
              </div>
              
              <div className="relative">
                <div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-primary ring-4 ring-dark-surface"></div>
                <div className="flex justify-between items-start">
                  <div>
                    <p className="text-sm font-medium text-white">Transfer to ACC-5512</p>
                    <p className="text-xs text-dark-text-muted mt-0.5">TXN-8843</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-danger">$9,900.00</p>
                    <p className="text-xs text-dark-text-muted mt-0.5">10:12 AM</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 bg-warning/10 border border-warning/20 rounded-lg p-4">
              <p className="text-sm text-warning flex gap-2">
                <span className="text-lg">⚠️</span>
                <span><strong>Structuring Warning:</strong> Total volume of $19,700 within 12 minutes circumvents CTR limits.</span>
              </p>
            </div>
          </div>
        </div>

        {/* Modules B & C: Network Visualizer */}
        <div className="bg-dark-surface border border-dark-border rounded-xl shadow-sm overflow-hidden flex flex-col">
          <div className="px-6 py-5 border-b border-dark-border bg-dark-surface/50">
            <h3 className="text-lg font-medium text-white">Transaction Network Visualizer</h3>
            <p className="text-sm text-dark-text-muted mt-1">Modules B & C</p>
          </div>
          <div className="p-6 flex-1 flex flex-col items-center justify-center relative">
            <div className="w-full max-w-sm aspect-square relative flex items-center justify-center">
              {/* SVG Network Graph */}
              <svg viewBox="0 0 200 200" className="w-full h-full overflow-visible">
                {/* Community Highlight (Red Circle) */}
                <circle cx="100" cy="100" r="70" fill="rgba(239, 68, 68, 0.05)" stroke="rgba(239, 68, 68, 0.3)" strokeWidth="1" strokeDasharray="4 4" className="animate-[spin_20s_linear_infinite]" />
                <circle cx="100" cy="100" r="70" fill="none" stroke="rgba(239, 68, 68, 0.1)" strokeWidth="8" />

                {/* Edges */}
                <line x1="100" y1="40" x2="160" y2="100" stroke="#334155" strokeWidth="2" />
                <line x1="160" y1="100" x2="100" y2="160" stroke="#334155" strokeWidth="2" />
                <line x1="100" y1="160" x2="40" y2="100" stroke="#334155" strokeWidth="2" />
                <line x1="40" y1="100" x2="100" y2="40" stroke="#334155" strokeWidth="2" />
                
                {/* Diagonal Edges */}
                <line x1="40" y1="100" x2="160" y2="100" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />
                <line x1="100" y1="40" x2="100" y2="160" stroke="#ef4444" strokeWidth="1.5" strokeDasharray="3 3" />

                {/* Nodes */}
                <g transform="translate(100, 40)">
                  <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                  <text x="0" y="4" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">A</text>
                </g>
                <g transform="translate(160, 100)">
                  <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                  <text x="0" y="4" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">B</text>
                </g>
                <g transform="translate(100, 160)">
                  <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
                  <text x="0" y="4" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">C</text>
                </g>
                <g transform="translate(40, 100)">
                  <circle cx="0" cy="0" r="16" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
                  <circle cx="0" cy="0" r="22" fill="none" stroke="#ef4444" strokeWidth="1" className="animate-ping opacity-75" />
                  <text x="0" y="4" textAnchor="middle" fill="#f8fafc" fontSize="10" fontWeight="bold">D</text>
                </g>
              </svg>
            </div>

            {/* Hardcoded text */}
            <div className="mt-4 bg-dark-bg border border-dark-border rounded-lg p-4 w-full text-center">
              <p className="text-white font-medium text-sm mb-1">Suspicious Community Detected</p>
              <div className="flex flex-wrap justify-center gap-3 text-xs text-dark-text-muted mt-2">
                <span className="bg-dark-surface border border-dark-border px-2 py-1 rounded">Community ID: <span className="text-white">#C-12</span></span>
                <span className="bg-dark-surface border border-dark-border px-2 py-1 rounded">Accounts: <span className="text-white">14</span></span>
                <span className="bg-dark-surface border border-dark-border px-2 py-1 rounded">Total Volume: <span className="text-danger font-bold">$145,000</span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
