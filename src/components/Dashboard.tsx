export default function Dashboard() {
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

      {/* Middle Section: Native SVG Recharts Alternative */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        
        {/* Chart 1: Median Transaction Amount */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6 shadow-sm flex flex-col h-[350px]">
          <h3 className="text-lg font-medium text-white mb-6">Median Transaction Amount</h3>
          <div className="flex-1 w-full min-h-0 relative flex items-end justify-around pb-8 pt-4 border-l border-b border-dark-border ml-10">
            {/* Y-Axis Labels */}
            <div className="absolute left-0 top-0 bottom-8 -ml-12 flex flex-col justify-between text-xs text-dark-text-muted text-right h-full">
              <span>$10,000</span>
              <span>$7,500</span>
              <span>$5,000</span>
              <span>$2,500</span>
              <span>$0</span>
            </div>
            
            {/* Grid Lines */}
            <div className="absolute inset-0 border-b-0 border-l-0 flex flex-col justify-between pointer-events-none mb-8">
              <div className="w-full border-b border-dark-border/30 border-dashed"></div>
              <div className="w-full border-b border-dark-border/30 border-dashed"></div>
              <div className="w-full border-b border-dark-border/30 border-dashed"></div>
              <div className="w-full border-b border-dark-border/30 border-dashed"></div>
              <div className="w-full"></div>
            </div>

            {/* Normal Bar */}
            <div className="relative group w-16 md:w-24 flex flex-col items-center justify-end h-full z-10">
               <div className="w-full bg-primary rounded-t-md transition-all duration-300 cursor-pointer hover:opacity-80" style={{height: `${(1411/10000)*100}%`}}></div>
               <span className="absolute -bottom-7 text-sm text-dark-text-muted">Normal</span>
               <div className="absolute -top-12 opacity-0 group-hover:opacity-100 bg-dark-surface border border-dark-border px-3 py-1.5 rounded shadow-xl text-xs whitespace-nowrap transition-opacity text-white pointer-events-none">
                 <span className="text-dark-text-muted">Normal:</span> <span className="font-bold text-primary">$1,411</span>
               </div>
            </div>

            {/* Laundering Bar */}
            <div className="relative group w-16 md:w-24 flex flex-col items-center justify-end h-full z-10">
               <div className="w-full bg-primary rounded-t-md transition-all duration-300 cursor-pointer hover:opacity-80" style={{height: `${(8667/10000)*100}%`}}></div>
               <span className="absolute -bottom-7 text-sm text-dark-text-muted">Laundering</span>
               <div className="absolute -top-12 opacity-0 group-hover:opacity-100 bg-dark-surface border border-dark-border px-3 py-1.5 rounded shadow-xl text-xs whitespace-nowrap transition-opacity text-white pointer-events-none">
                 <span className="text-dark-text-muted">Laundering:</span> <span className="font-bold text-primary">$8,667</span>
               </div>
            </div>
          </div>
        </div>

        {/* Chart 2: Laundering Rate by Hour */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6 shadow-sm flex flex-col h-[350px]">
          <h3 className="text-lg font-medium text-white mb-6">Laundering Rate by Hour</h3>
          <div className="flex-1 w-full min-h-0 relative pb-8 pt-4 border-l border-b border-dark-border ml-10">
             {/* Y-Axis Labels */}
             <div className="absolute left-0 top-0 bottom-8 -ml-10 flex flex-col justify-between text-xs text-dark-text-muted text-right h-full">
              <span>0.6%</span>
              <span>0.4%</span>
              <span>0.2%</span>
              <span>0%</span>
            </div>
            
            {/* Grid Lines */}
            <div className="absolute inset-0 border-b-0 border-l-0 flex flex-col justify-between pointer-events-none mb-8">
              <div className="w-full border-b border-dark-border/30 border-dashed"></div>
              <div className="w-full border-b border-dark-border/30 border-dashed"></div>
              <div className="w-full border-b border-dark-border/30 border-dashed"></div>
              <div className="w-full"></div>
            </div>

            <div className="w-full h-full relative group">
               <svg viewBox="0 0 100 100" className="w-full h-full overflow-visible" preserveAspectRatio="none">
                 {/* Plotted exact points to match the data: 0:00 to 22:00 */}
                 <path d="M 0 99 L 10 99 L 20 99 L 30 98 L 40 95 L 45 80 L 50 40 L 54.5 3 L 59 25 L 63 36 L 68 58 L 72 75 L 81 93 L 90 98 L 100 99.6" fill="none" stroke="#ef4444" strokeWidth="2.5" vectorEffect="non-scaling-stroke" />
                 {/* Max Point Dot */}
                 <circle cx="54.5" cy="3" r="3" fill="#1e293b" stroke="#ef4444" strokeWidth="2" vectorEffect="non-scaling-stroke" className="cursor-pointer hover:r-[5px] transition-all" />
               </svg>
               <div className="absolute top-[2%] left-[54.5%] -translate-x-1/2 -translate-y-[120%] opacity-0 group-hover:opacity-100 bg-dark-surface border border-dark-border px-3 py-1.5 rounded shadow-xl text-xs whitespace-nowrap transition-opacity text-white pointer-events-none z-10">
                 <span className="text-dark-text-muted">12:00:</span> <span className="font-bold text-danger">0.580%</span>
               </div>
            </div>

             {/* X-Axis Labels */}
             <div className="absolute inset-x-0 bottom-0 h-8 flex justify-between items-end text-xs text-dark-text-muted -mb-2">
               <span>0:00</span>
               <span>6:00</span>
               <span>12:00</span>
               <span>18:00</span>
               <span>24:00</span>
             </div>
          </div>
        </div>

        {/* Chart 3: Risk by Payment Format */}
        <div className="bg-dark-surface border border-dark-border rounded-xl p-6 shadow-sm flex flex-col h-[350px] lg:col-span-2">
          <h3 className="text-lg font-medium text-white mb-6">Risk by Payment Format</h3>
          <div className="flex-1 w-full min-h-0 flex flex-col justify-between py-4 pl-4 pr-10 border-l border-b border-dark-border relative ml-14">
             {/* X-Axis Vertical Grid Lines */}
             <div className="absolute inset-0 flex justify-between pointer-events-none ml-14 mb-4">
               <div className="h-full border-l border-dark-border/30 border-dashed"></div>
               <div className="h-full border-l border-dark-border/30 border-dashed"></div>
               <div className="h-full border-l border-dark-border/30 border-dashed"></div>
               <div className="h-full border-l border-dark-border/30 border-dashed"></div>
               <div className="h-full border-l border-dark-border/30 border-dashed"></div>
             </div>

             {[
               { format: 'ACH', rate: 0.746 },
               { format: 'Bitcoin', rate: 0.038 },
               { format: 'Cash', rate: 0.022 },
               { format: 'Cheque', rate: 0.017 }
             ].map(item => (
               <div key={item.format} className="flex items-center gap-4 group z-10 cursor-pointer">
                 <div className="absolute left-0 -ml-16 w-14 text-right text-sm font-medium text-dark-text-muted">{item.format}</div>
                 <div className="flex-1 h-8 overflow-hidden relative border-l border-transparent">
                   <div className="h-full bg-warning rounded-r-md transition-all group-hover:opacity-80" style={{width: `${(item.rate / 0.8) * 100}%`}}></div>
                 </div>
                 <div className="absolute right-0 -mr-12 w-10 text-sm font-bold text-white group-hover:text-warning transition-colors">{item.rate}%</div>
               </div>
             ))}

             {/* X-Axis Labels */}
             <div className="absolute bottom-0 left-14 right-10 flex justify-between translate-y-6 text-xs text-dark-text-muted">
               <span>0%</span>
               <span>0.2%</span>
               <span>0.4%</span>
               <span>0.6%</span>
               <span>0.8%</span>
             </div>
          </div>
        </div>

      </div>
    </div>
  );
}
