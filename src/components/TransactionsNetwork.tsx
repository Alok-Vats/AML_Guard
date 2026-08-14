import { useState } from 'react';

export default function TransactionsNetwork() {
  const [selectedTxn, setSelectedTxn] = useState<string | null>(null);

  const transactions = [
    { id: 'TXN-8842', from: 'ACC-1092', to: 'ACC-3341', amount: '$9,800.00', risk: '95%', status: 'FLAGGED' },
    { id: 'TXN-8843', from: 'ACC-1092', to: 'ACC-5512', amount: '$9,900.00', risk: '96%', status: 'FLAGGED' },
    { id: 'TXN-8844', from: 'ACC-7749', to: 'ACC-1123', amount: '$2,450.00', risk: '12%', status: 'CLEARED' },
    { id: 'TXN-8845', from: 'ACC-9923', to: 'ACC-4411', amount: '$45,000.00', risk: '45%', status: 'REVIEW' },
    { id: 'TXN-8846', from: 'ACC-2211', to: 'ACC-8833', amount: '$150.00', risk: '5%', status: 'CLEARED' },
  ];

  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Module A: Transactions Table */}
      <div className="bg-dark-surface border border-dark-border rounded-xl shadow-sm overflow-hidden">
        <div className="px-6 py-5 border-b border-dark-border bg-dark-surface/50">
          <h3 className="text-lg font-medium text-white">Transactions (Module A)</h3>
          <p className="text-sm text-dark-text-muted mt-1">Select a transaction to view alert details.</p>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-dark-bg/50 border-b border-dark-border text-xs uppercase tracking-wider text-dark-text-muted">
                <th className="px-6 py-4 font-medium">Transaction ID</th>
                <th className="px-6 py-4 font-medium">From</th>
                <th className="px-6 py-4 font-medium">To</th>
                <th className="px-6 py-4 font-medium">Amount</th>
                <th className="px-6 py-4 font-medium">Risk Score</th>
                <th className="px-6 py-4 font-medium">Status</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border">
              {transactions.map((txn) => (
                <tr 
                  key={txn.id}
                  onClick={() => setSelectedTxn(txn.id)}
                  className={`cursor-pointer transition-colors ${selectedTxn === txn.id ? 'bg-primary/10 border-l-2 border-primary' : 'hover:bg-dark-border/20 border-l-2 border-transparent'}`}
                >
                  <td className="px-6 py-4 text-white font-medium">{txn.id}</td>
                  <td className="px-6 py-4 text-dark-text-muted font-mono">{txn.from}</td>
                  <td className="px-6 py-4 text-dark-text-muted font-mono">{txn.to}</td>
                  <td className="px-6 py-4 text-white font-medium">{txn.amount}</td>
                  <td className="px-6 py-4">
                    <span className={`font-bold ${parseInt(txn.risk) > 80 ? 'text-danger' : parseInt(txn.risk) > 30 ? 'text-warning' : 'text-success'}`}>{txn.risk}</span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`text-xs px-2.5 py-1 rounded-md border font-medium ${
                      txn.status === 'FLAGGED' ? 'bg-danger/10 text-danger border-danger/20' : 
                      txn.status === 'REVIEW' ? 'bg-warning/10 text-warning border-warning/20' : 
                      'bg-success/10 text-success border-success/20'
                    }`}>
                      {txn.status}
                    </span>
                  </td>
                </tr>
              ))}
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
