import { useState } from 'react';

function SarEditor({ reportText, role }: { reportText: string, role: string }) {
  return (
    <div className="animate-in fade-in zoom-in-95 duration-500 w-full h-full flex flex-col">
      <label className="block text-sm font-medium text-white mb-3 flex items-center gap-2">
        <span className="text-primary">✨</span> Generated Draft Output
      </label>
      <textarea 
        className="w-full h-64 bg-dark-bg border border-primary/50 shadow-[0_0_15px_rgba(59,130,246,0.1)] rounded-lg p-5 text-white text-sm focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary font-sans leading-relaxed resize-y custom-scrollbar"
        defaultValue={reportText}
      />
      
      {/* RBAC Logic Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row justify-end gap-4 border-t border-dark-border pt-6">
        <button className="min-h-[44px] bg-dark-bg border border-dark-border hover:border-white text-white px-5 py-2.5 rounded-md text-sm font-medium transition-colors flex items-center justify-center">
          Edit Draft
        </button>
        <div className="relative group flex items-center w-full sm:w-auto">
          <button 
            disabled={role === 'Analyst'}
            className={`w-full min-h-[44px] px-6 py-2.5 rounded-md text-sm font-medium transition-all flex items-center justify-center gap-2 ${
              role === 'Analyst' 
                ? 'bg-dark-bg border border-dark-border text-dark-text-muted cursor-not-allowed opacity-60'
                : 'bg-success hover:bg-green-600 text-white shadow-sm shadow-success/20'
            }`}
          >
            Submit for Review
            {role === 'Analyst' && <span>🔒</span>}
          </button>
          {role === 'Analyst' && (
            <div className="absolute bottom-full right-0 mb-2 opacity-0 group-hover:opacity-100 transition-opacity bg-danger/10 border border-danger/20 text-danger text-xs py-2 px-3 rounded-md pointer-events-none hidden sm:block whitespace-nowrap">
              Insufficient permissions: Analysts cannot submit SARs.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function GenerateSAR({ role }: { role: string }) {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isGenerated, setIsGenerated] = useState(false);

  const handleGenerate = () => {
    setIsGenerating(true);
    setTimeout(() => {
      setIsGenerating(false);
      setIsGenerated(true);
    }, 3000);
  };

  const dummyDraft = `Subject: Suspicious Transaction Activity – Case #102.

Summary: 
The system identified a pattern of potentially suspicious financial activity involving 14 interconnected accounts. 

Key Findings: 
87 transactions detected totaling $145,000, indicative of a structuring pattern.`;

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 animate-in fade-in slide-in-from-bottom-4 duration-500 pb-10">
      {/* Case Context (Spans 4 columns) */}
      <div className="lg:col-span-4 bg-dark-surface border border-dark-border rounded-xl shadow-sm overflow-hidden flex flex-col h-fit">
        <div className="px-6 py-5 border-b border-dark-border bg-dark-surface/50 flex justify-between items-center">
          <h3 className="text-lg font-medium text-white">Case Context</h3>
          <span className="bg-primary/10 text-primary px-3 py-1 rounded-md border border-primary/20 font-mono text-xs font-bold shadow-sm whitespace-nowrap">CASE-102</span>
        </div>
        
        <div className="p-5 flex flex-col gap-6">
          <div className="bg-dark-bg/50 rounded-lg p-4 border border-dark-border/50">
            <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
              <span className="text-lg">🔍</span> Entities
            </h4>
            <ul className="space-y-3 font-mono text-sm text-dark-text-muted">
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-danger shadow-[0_0_8px_rgba(239,68,68,0.6)]"></div> ACC-1092 <span className="text-xs bg-dark-border px-1.5 py-0.5 rounded ml-auto font-sans">Primary</span></li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-danger"></div> ACC-3341 <span className="text-xs bg-dark-border px-1.5 py-0.5 rounded ml-auto font-sans">Linked</span></li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-warning"></div> ACC-5512 <span className="text-xs bg-dark-border px-1.5 py-0.5 rounded ml-auto font-sans">Linked</span></li>
              <li className="flex items-center gap-3"><div className="w-2 h-2 rounded-full bg-warning"></div> ACC-7749 <span className="text-xs bg-dark-border px-1.5 py-0.5 rounded ml-auto font-sans">Linked</span></li>
            </ul>
          </div>
          <div className="bg-dark-bg/50 rounded-lg p-4 border border-dark-border/50">
            <h4 className="text-sm font-medium text-white mb-4 flex items-center gap-2">
              <span className="text-lg">🚩</span> Typologies
            </h4>
            <div className="space-y-4">
              <label className="flex items-start gap-3 cursor-not-allowed">
                <input type="checkbox" checked readOnly className="w-4 h-4 mt-0.5 rounded bg-dark-bg border-dark-border text-primary focus:ring-primary accent-primary" />
                <div>
                  <span className="text-white text-sm font-medium block">Structuring</span>
                  <span className="text-dark-text-muted text-xs leading-tight block mt-0.5">Rapid trans. below $10k</span>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-not-allowed">
                <input type="checkbox" checked readOnly className="w-4 h-4 mt-0.5 rounded bg-dark-bg border-dark-border text-primary focus:ring-primary accent-primary" />
                <div>
                  <span className="text-white text-sm font-medium block">Layering</span>
                  <span className="text-dark-text-muted text-xs leading-tight block mt-0.5">Complex web of transfers</span>
                </div>
              </label>
              <label className="flex items-start gap-3 cursor-not-allowed opacity-50">
                <input type="checkbox" disabled className="w-4 h-4 mt-0.5 rounded bg-dark-bg border-dark-border text-primary focus:ring-primary" />
                <span className="text-dark-text-muted text-sm font-medium block">Terrorist Financing</span>
              </label>
            </div>
          </div>
        </div>
      </div>

      {/* Generation Section (Spans 8 columns) */}
      <div className="lg:col-span-8 bg-dark-surface border border-dark-border rounded-xl shadow-sm overflow-hidden flex flex-col h-full min-h-[400px]">
        <div className="p-6 border-b border-dark-border flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4 bg-dark-surface/30">
          <h3 className="text-lg font-medium text-white">AI-Assisted SAR Generation</h3>
          {!isGenerating && !isGenerated && (
            <button 
              onClick={handleGenerate}
              className="min-h-[44px] bg-primary hover:bg-blue-600 text-white px-5 py-2.5 rounded-md text-sm font-medium transition-all shadow-sm shadow-primary/20 flex items-center justify-center gap-2"
            >
              <span>✨</span> Generate AI SAR Draft
            </button>
          )}
        </div>

        <div className="p-6 flex-1 flex flex-col justify-center">
          {isGenerating ? (
            <div className="py-12 flex flex-col items-center justify-center space-y-5 animate-in zoom-in-95 duration-300">
              <svg className="animate-spin h-10 w-10 text-primary" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              <p className="text-primary font-medium text-lg animate-pulse text-center">Gemini is analyzing transaction cluster...</p>
              <p className="text-dark-text-muted text-sm">Synthesizing findings across 14 accounts</p>
            </div>
          ) : isGenerated ? (
            <SarEditor reportText={dummyDraft} role={role} />
          ) : (
            <div className="py-16 flex flex-col items-center justify-center text-dark-text-muted border-2 border-dashed border-dark-border rounded-xl bg-dark-bg/30 w-full h-full">
              <span className="text-5xl mb-4 opacity-50 grayscale">🤖</span>
              <p className="text-lg font-medium text-white mb-2 text-center">Ready to compile report</p>
              <p className="text-sm text-center px-4">Click "Generate AI SAR Draft" to auto-compile findings from Case #102.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
