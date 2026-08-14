export default function Dashboard() {
  return (
    <div className="flex flex-col gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-dark-surface border border-dark-border rounded-xl p-5 shadow-sm hover:border-primary/50 transition-colors">
          <p className="text-sm text-dark-text-muted font-medium mb-1">Total Transactions</p>
          <p className="text-3xl font-bold text-white">125,430</p>
          <p className="text-xs text-success mt-2 font-medium flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            12% from last week
          </p>
        </div>
        <div className="bg-dark-surface border border-danger/40 rounded-xl p-5 shadow-sm relative overflow-hidden group">
          <div className="absolute top-0 right-0 w-16 h-16 bg-danger/10 rounded-bl-full transition-transform group-hover:scale-110"></div>
          <p className="text-sm text-dark-text-muted font-medium mb-1">High-Risk Transactions</p>
          <p className="text-3xl font-bold text-danger">342</p>
          <p className="text-xs text-danger mt-2 font-medium flex items-center gap-1">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 19V5M5 12l7-7 7 7"/></svg>
            5% requires attention
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

      {/* Middle Section */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Left: Risk Trend Chart (Mock SVG) */}
        <div className="lg:col-span-2 bg-dark-surface border border-dark-border rounded-xl p-6 shadow-sm">
          <div className="flex justify-between items-center mb-6">
            <h3 className="text-lg font-medium text-white">Risk Trend (7 Days)</h3>
            <button className="text-xs font-medium text-dark-text-muted hover:text-white px-2 py-1 rounded bg-dark-bg border border-dark-border">Export</button>
          </div>
          <div className="h-48 w-full relative">
            <svg viewBox="0 0 100 40" className="w-full h-full overflow-visible" preserveAspectRatio="none">
              <defs>
                <linearGradient id="trend-gradient" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0%" stopColor="#3b82f6" />
                  <stop offset="70%" stopColor="#f59e0b" />
                  <stop offset="100%" stopColor="#ef4444" />
                </linearGradient>
                <linearGradient id="fill-gradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#ef4444" stopOpacity="0.3" />
                  <stop offset="100%" stopColor="#ef4444" stopOpacity="0" />
                </linearGradient>
              </defs>
              
              {/* Grid Lines */}
              <line x1="0" y1="10" x2="100" y2="10" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="0" y1="20" x2="100" y2="20" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />
              <line x1="0" y1="30" x2="100" y2="30" stroke="#334155" strokeWidth="0.5" strokeDasharray="2 2" />

              {/* Area Fill */}
              <path 
                d="M 0 40 L 0 35 Q 15 35, 25 32 T 50 28 T 75 20 T 100 5 L 100 40 Z" 
                fill="url(#fill-gradient)" 
              />
              
              {/* Line */}
              <path 
                d="M 0 35 Q 15 35, 25 32 T 50 28 T 75 20 T 100 5" 
                fill="none" 
                stroke="url(#trend-gradient)" 
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              
              {/* Plot Points for the spike */}
              <circle cx="75" cy="20" r="1.5" fill="#1e293b" stroke="#f59e0b" strokeWidth="1" />
              <circle cx="100" cy="5" r="2" fill="#ef4444" className="animate-pulse" />
            </svg>
            <div className="absolute inset-x-0 bottom-[-24px] flex justify-between text-xs text-dark-text-muted font-medium">
              <span>Mon</span>
              <span>Tue</span>
              <span>Wed</span>
              <span>Thu</span>
              <span>Fri</span>
              <span>Sat</span>
              <span>Sun</span>
            </div>
          </div>
        </div>

        {/* Right: AML Alerts */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6 shadow-sm flex flex-col">
          <h3 className="text-lg font-medium text-white mb-6">AML Alerts Summary</h3>
          <div className="flex-1 flex flex-col justify-center space-y-7">
            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-danger shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div>
                  <span className="text-white text-sm font-medium">High Severity</span>
                </div>
                <span className="text-lg font-bold text-danger">45</span>
              </div>
              <div className="w-full bg-dark-bg h-2 rounded-full overflow-hidden border border-dark-border/50">
                 <div className="bg-danger h-full rounded-full" style={{ width: '25%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-warning"></div>
                  <span className="text-white text-sm font-medium">Medium Severity</span>
                </div>
                <span className="text-lg font-bold text-warning">120</span>
              </div>
              <div className="w-full bg-dark-bg h-2 rounded-full overflow-hidden border border-dark-border/50">
                 <div className="bg-warning h-full rounded-full" style={{ width: '40%' }}></div>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-primary"></div>
                  <span className="text-white text-sm font-medium">Low Severity</span>
                </div>
                <span className="text-lg font-bold text-primary">850</span>
              </div>
              <div className="w-full bg-dark-bg h-2 rounded-full overflow-hidden border border-dark-border/50">
                 <div className="bg-primary h-full rounded-full" style={{ width: '85%' }}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Activity Table */}
      <div className="bg-dark-surface border border-dark-border rounded-xl shadow-sm overflow-hidden mt-4">
        <div className="px-6 py-5 border-b border-dark-border flex justify-between items-center bg-dark-surface/50">
          <h3 className="text-lg font-medium text-white">Recent Suspicious Transactions</h3>
          <button className="text-sm text-primary hover:text-blue-400 font-medium transition-colors">View All</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-dark-bg/50 border-b border-dark-border text-xs uppercase tracking-wider text-dark-text-muted">
                <th className="px-6 py-4 font-medium w-1/4">Account / TXN ID</th>
                <th className="px-6 py-4 font-medium w-1/4">Amount</th>
                <th className="px-6 py-4 font-medium w-1/4">Risk Assessment</th>
                <th className="px-6 py-4 font-medium w-1/4 text-right">Action</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-dark-border">
              <tr className="hover:bg-dark-border/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="font-medium text-white flex items-center gap-2">
                    TXN-1023
                    <span className="text-[10px] bg-dark-bg border border-dark-border px-1.5 py-0.5 rounded text-dark-text-muted">WIRE</span>
                  </div>
                  <div className="text-xs text-dark-text-muted font-mono mt-1">ACC-7749-3012</div>
                </td>
                <td className="px-6 py-4 text-white font-medium">$45,230.00</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-danger font-bold w-10">92%</span>
                    <span className="bg-danger/10 text-danger text-xs px-2.5 py-1 rounded-md border border-danger/20 font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-danger animate-pulse"></div>
                      FLAGGED
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-dark-bg border border-dark-border hover:border-danger hover:text-danger text-white text-sm px-4 py-1.5 rounded-md transition-all shadow-sm">Investigate</button>
                </td>
              </tr>
              <tr className="hover:bg-dark-border/20 transition-colors">
                <td className="px-6 py-4">
                  <div className="font-medium text-white flex items-center gap-2">
                    TXN-1024
                    <span className="text-[10px] bg-dark-bg border border-dark-border px-1.5 py-0.5 rounded text-dark-text-muted">ACH</span>
                  </div>
                  <div className="text-xs text-dark-text-muted font-mono mt-1">ACC-1193-8475</div>
                </td>
                <td className="px-6 py-4 text-white font-medium">$1,205.50</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-success font-bold w-10">18%</span>
                    <span className="bg-success/10 text-success text-xs px-2.5 py-1 rounded-md border border-success/20 font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-success"></div>
                      NORMAL
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <span className="text-dark-text-muted text-sm font-medium px-4 py-1.5 inline-block">No Action</span>
                </td>
              </tr>
              <tr className="hover:bg-dark-border/20 transition-colors group">
                <td className="px-6 py-4">
                  <div className="font-medium text-white flex items-center gap-2">
                    TXN-1025
                    <span className="text-[10px] bg-dark-bg border border-dark-border px-1.5 py-0.5 rounded text-dark-text-muted">SWIFT</span>
                  </div>
                  <div className="text-xs text-dark-text-muted font-mono mt-1">ACC-9923-1102</div>
                </td>
                <td className="px-6 py-4 text-white font-medium">$12,400.00</td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <span className="text-warning font-bold w-10">87%</span>
                    <span className="bg-warning/10 text-warning text-xs px-2.5 py-1 rounded-md border border-warning/20 font-medium flex items-center gap-1.5">
                      <div className="w-1.5 h-1.5 rounded-full bg-warning"></div>
                      REVIEW
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="bg-dark-bg border border-dark-border hover:border-warning hover:text-warning text-white text-sm px-4 py-1.5 rounded-md transition-all shadow-sm">Review</button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
