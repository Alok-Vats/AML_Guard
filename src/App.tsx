import { useState } from 'react';

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

  // Conditional rendering based on view and role
  const renderContent = () => {
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
      {/* Sidebar */}
      <aside className="w-64 bg-dark-surface border-r border-dark-border flex flex-col z-10 shrink-0">
        <div className="h-16 flex items-center px-6 border-b border-dark-border bg-dark-surface/50">
          <span className="text-lg font-bold tracking-wider text-white">🛡 AML GUARD</span>
        </div>

        <nav className="flex-1 overflow-y-auto py-6 px-3 flex flex-col gap-1 custom-scrollbar">
          {navItems.map((item) => {
            const isActive = activeView === item.id;
            return (
              <button
                key={item.id}
                onClick={() => setActiveView(item.id)}
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
      <main className="flex-1 flex flex-col overflow-hidden relative">
        {/* Header */}
        <header className="h-16 bg-dark-surface/80 backdrop-blur-md border-b border-dark-border flex items-center justify-between px-8 sticky top-0 z-20 shrink-0">
          <div className="flex items-center w-96 relative">
            <span className="absolute left-3 text-dark-text-muted opacity-70">🔍</span>
            <input
              type="text"
              placeholder="Search transactions, entities, alerts..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-dark-bg border border-dark-border rounded-lg pl-10 pr-4 py-2 text-sm text-white placeholder:text-dark-text-muted/70 focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary transition-shadow"
            />
          </div>

          <div className="flex items-center space-x-6">
            <button className="relative text-dark-text-muted hover:text-white transition-colors p-1">
              <span className="text-xl">🔔</span>
              <span className="absolute top-1 right-1 w-2 h-2 bg-danger rounded-full ring-2 ring-dark-surface"></span>
            </button>

            <div className="h-6 w-px bg-dark-border"></div>

            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-dark-text-muted">Role Simulator:</span>
              <select
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="bg-dark-bg border border-dark-border rounded-lg px-3 py-1.5 text-sm font-medium text-white focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary appearance-none cursor-pointer pr-8 relative"
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
        <div className="flex-1 overflow-y-auto p-8 bg-dark-bg">
          <div className="max-w-7xl mx-auto h-full">
            {renderContent()}
          </div>
        </div>
      </main>
    </div>
  );
}
