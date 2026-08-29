import { useState } from 'react';

import Dashboard from './components/Dashboard';
import TransactionsNetwork from './components/TransactionsNetwork';
import GenerateSAR from './components/GenerateSAR';
import AuditLogs from './components/AuditLogs';

const navItems = [
  { id: 'dashboard', label: 'Dashboard', icon: '📊' },
  { id: 'transactions', label: 'Transactions', icon: '💳' },
  { id: 'alerts', label: 'Alerts & Investigations', icon: '🚨' },
  { id: 'network', label: 'Transaction Network', icon: '🕸' },
  { id: 'sar', label: 'SAR Reports', icon: '📄' },
  { id: 'audit', label: 'Audit Logs', icon: '📜' },
];

const roles = ['Analyst', 'Senior Analyst', 'Compliance Manager', 'Admin'];

export default function App() {
  const [activeView, setActiveView] = useState('dashboard');
  const [role, setRole] = useState('Analyst');
  const [searchQuery, setSearchQuery] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Conditional rendering based on view and role
  const renderContent = () => {
    if (activeView === 'dashboard') {
      return (
        <div className="h-full flex flex-col">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-semibold text-white tracking-tight">
                Dashboard Overview
              </h1>
              <p className="text-dark-text-muted mt-1 text-sm">
                System status and key metrics for {role.toLowerCase()}s.
              </p>
            </div>
            <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm shadow-primary/20">
              Generate Report
            </button>
          </div>
          <Dashboard />
        </div>
      );
    }

    if (activeView === 'transactions' || activeView === 'network') {
      return (
        <div className="h-full flex flex-col">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-semibold text-white tracking-tight">
                Transactions & Network
              </h1>
              <p className="text-dark-text-muted mt-1 text-sm">
                Consolidated view for transactions and community graph analysis.
              </p>
            </div>
            <div className="flex gap-3">
              <button className="bg-dark-surface border border-dark-border hover:bg-dark-border/50 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
                Export Data
              </button>
              <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm shadow-primary/20">
                New Query
              </button>
            </div>
          </div>
          <TransactionsNetwork />
        </div>
      );
    }

    if (activeView === 'sar') {
      return (
        <div className="h-full flex flex-col">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-semibold text-white tracking-tight">
                SAR Reports
              </h1>
              <p className="text-dark-text-muted mt-1 text-sm">
                Generate and review Suspicious Activity Reports.
              </p>
            </div>
            <button className="bg-dark-surface border border-dark-border hover:bg-dark-border/50 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors">
              View Past Reports
            </button>
          </div>
          <GenerateSAR role={role} />
        </div>
      );
    }

    if (activeView === 'audit') {
      return (
        <div className="h-full flex flex-col">
          <div className="mb-6 flex justify-between items-end">
            <div>
              <h1 className="text-2xl font-semibold text-white tracking-tight">
                Audit Logs
              </h1>
              <p className="text-dark-text-muted mt-1 text-sm">
                Comprehensive record of system and user activities.
              </p>
            </div>
          </div>
          <AuditLogs />
        </div>
      );
    }

    return (
      <div className="h-full flex flex-col">

        <div className="mb-6 flex justify-between items-end">
          <div>
            <h1 className="text-2xl font-semibold text-white tracking-tight">
              {navItems.find((n) => n.id === activeView)?.label || 'Page Not Found'}
            </h1>
            <p className="text-dark-text-muted mt-1 text-sm">
              Overview and statistics for {role.toLowerCase()}s.
            </p>
          </div>
          <button className="bg-primary hover:bg-blue-600 text-white px-4 py-2 rounded-md text-sm font-medium transition-colors shadow-sm shadow-primary/20">
            Generate Report
          </button>
        </div>

        <div className="flex-1 border border-dark-border border-dashed rounded-xl flex items-center justify-center bg-dark-surface/30">
          <div className="text-center">
            <div className="text-4xl mb-4 opacity-50">
              {navItems.find((n) => n.id === activeView)?.icon}
            </div>
            <h2 className="text-lg font-medium text-dark-text-muted">
              {navItems.find((n) => n.id === activeView)?.label} Component Placeholder
            </h2>
            <p className="text-sm text-dark-border mt-2">
              Viewing as <span className="font-semibold text-white">{role}</span>
            </p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="flex h-screen w-full bg-dark-bg text-dark-text font-sans overflow-hidden selection:bg-primary/30">
      {/* Mobile Overlay */}
      {isMobileMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 z-40 lg:hidden backdrop-blur-sm" 
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      )}

      {/* Sidebar */}
      <aside className={`fixed inset-y-0 left-0 z-50 w-64 bg-dark-surface border-r border-dark-border flex flex-col shrink-0 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0 ${isMobileMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="h-16 flex items-center px-6 border-b border-dark-border bg-dark-surface/50 justify-between lg:justify-start">
          <span className="text-lg font-bold tracking-wider text-white">🛡 AML GUARD</span>
          <button className="lg:hidden text-dark-text-muted hover:text-white p-1" onClick={() => setIsMobileMenuOpen(false)}>✕</button>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1 custom-scrollbar">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveView(item.id);
                  setIsMobileMenuOpen(false);
                }}
                className={`w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive
                    ? 'bg-primary/10 text-primary'
                    : 'text-dark-text-muted hover:bg-dark-border/50 hover:text-white'
                }`}
              >
                <span className="text-lg">{item.icon}</span>
                <span>{item.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="p-4 border-t border-dark-border">
          <div className="flex flex-col gap-1">
            <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-dark-text-muted hover:bg-dark-border/50 hover:text-white transition-colors">
              <span className="text-lg">⚙</span>
              <span>User Management</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-lg text-sm font-medium text-danger hover:bg-danger/10 transition-colors">
              <span className="text-lg">🚪</span>
              <span>Logout</span>
            </button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden relative w-full">
        {/* Header */}
        <header className="h-16 bg-dark-surface/80 backdrop-blur-md border-b border-dark-border flex items-center justify-between px-4 sm:px-6 lg:px-8 sticky top-0 z-20 shrink-0">
          <div className="flex items-center">
            <button className="lg:hidden text-dark-text-muted hover:text-white transition-colors mr-4" onClick={() => setIsMobileMenuOpen(true)}>
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
            </button>
            <div className="hidden md:flex items-center w-64 lg:w-96 relative">
              <span className="absolute left-3 text-dark-text-muted opacity-70">🔍</span>
              <input
                type="text"
                placeholder="Search transactions, entities, alerts..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-dark-bg border border-dark-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-dark-text-muted/70 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-shadow"
              />
            </div>
            <button className="md:hidden text-dark-text-muted hover:text-white p-2">🔍</button>
          </div>

          <div className="flex items-center space-x-3 sm:space-x-6">
            <button className="relative text-dark-text-muted hover:text-white transition-colors p-1">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full ring-2 ring-dark-surface"></span>
            </button>

            <div className="hidden sm:block h-6 w-px bg-dark-border"></div>

            <div className="flex items-center space-x-2 sm:space-x-3">
              <span className="hidden sm:inline text-sm font-medium text-dark-text-muted">Role Simulator:</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-dark-bg border border-dark-border rounded-lg px-2 sm:px-3 py-1.5 text-xs sm:text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none cursor-pointer pr-6 sm:pr-8 relative max-w-[100px] sm:max-w-none truncate"
                style={{
                  backgroundImage: `url("data:image/svg+xml;charset=UTF-8,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3e%3cpolyline points='6 9 12 15 18 9'%3e%3c/polyline%3e%3c/svg%3e")`,
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'right 0.5rem center',
                  backgroundSize: '1em 1em',
                }}
              >
                {roles.map((r) => (
                  <option key={r} value={r}>
                    {r}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 bg-dark-bg">
          <div className="max-w-7xl mx-auto h-full">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
