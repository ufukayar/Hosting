
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

interface Metric {
  cpu: number;
  memory: number;
  networkUp: number;
  networkDown: number;
}

const Dashboard = () => {
  const navigate = useNavigate();
  const [metrics, setMetrics] = useState<Metric>({
    cpu: 12.4,
    memory: 45.2,
    networkUp: 2.1,
    networkDown: 8.4
  });

  const [history, setHistory] = useState<number[]>(new Array(10).fill(0).map(() => Math.random() * 50));

  // Simulate real-time data updates
  useEffect(() => {
    const interval = setInterval(() => {
      setMetrics(prev => ({
        cpu: Math.max(5, Math.min(95, prev.cpu + (Math.random() - 0.5) * 4)),
        memory: Math.max(10, Math.min(90, prev.memory + (Math.random() - 0.5) * 1)),
        networkUp: Math.max(0.1, prev.networkUp + (Math.random() - 0.5) * 1),
        networkDown: Math.max(0.1, prev.networkDown + (Math.random() - 0.5) * 2)
      }));

      setHistory(prev => {
        const next = [...prev.slice(1), Math.random() * 80 + 10];
        return next;
      });
    }, 1500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen pb-24">
      <header className="p-4 flex items-center justify-between border-b border-slate-800 sticky top-0 bg-bg-dark/80 backdrop-blur-md z-20">
        <h1 className="text-xl font-bold tracking-tight">System Monitor</h1>
        <div className="flex items-center gap-2 px-3 py-1 bg-emerald-500/10 rounded-full border border-emerald-500/20">
          <span className="size-2 bg-emerald-500 rounded-full animate-pulse shadow-[0_0_8px_#10b981]"></span>
          <span className="text-[10px] font-black uppercase text-emerald-500 tracking-widest">Live</span>
        </div>
      </header>

      <main className="p-4 space-y-6">
        {/* Core Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="p-5 bg-surface-dark rounded-3xl border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 size-16 bg-blue-500/10 rounded-full blur-2xl -mr-4 -mt-4"></div>
            <div className="relative z-10 flex flex-col gap-3">
              <span className="material-symbols-outlined text-primary text-3xl">developer_board</span>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">CPU Usage</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black">{metrics.cpu.toFixed(1)}</span>
                  <span className="text-sm font-bold text-slate-500">%</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                <div 
                  className="h-full bg-primary transition-all duration-1000 ease-in-out" 
                  style={{ width: `${metrics.cpu}%` }}
                ></div>
              </div>
            </div>
          </div>

          <div className="p-5 bg-surface-dark rounded-3xl border border-slate-800 relative overflow-hidden group">
            <div className="absolute top-0 right-0 size-16 bg-purple-500/10 rounded-full blur-2xl -mr-4 -mt-4"></div>
            <div className="relative z-10 flex flex-col gap-3">
              <span className="material-symbols-outlined text-purple-500 text-3xl">memory</span>
              <div>
                <p className="text-[10px] font-black uppercase text-slate-500 tracking-widest">RAM Usage</p>
                <div className="flex items-baseline gap-1 mt-1">
                  <span className="text-3xl font-black">{metrics.memory.toFixed(1)}</span>
                  <span className="text-sm font-bold text-slate-500">%</span>
                </div>
              </div>
              <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden mt-1">
                <div 
                  className="h-full bg-purple-500 transition-all duration-1000 ease-in-out" 
                  style={{ width: `${metrics.memory}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>

        {/* Network Visualization */}
        <div className="p-6 bg-surface-dark rounded-3xl border border-slate-800 space-y-6">
          <div className="flex justify-between items-center">
            <h3 className="font-black text-sm uppercase tracking-widest text-slate-400">Network Traffic</h3>
            <div className="flex gap-4">
              <div className="flex items-center gap-2">
                <span className="size-2 bg-blue-500 rounded-full"></span>
                <span className="text-[10px] font-bold text-slate-500">RX</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="size-2 bg-emerald-500 rounded-full"></span>
                <span className="text-[10px] font-bold text-slate-500">TX</span>
              </div>
            </div>
          </div>

          <div className="h-24 flex items-end gap-1.5 px-2">
            {history.map((val, i) => (
              <div 
                key={i} 
                className="flex-1 bg-primary/20 rounded-t-sm transition-all duration-1000 relative group"
                style={{ height: `${val}%` }}
              >
                <div className="absolute inset-0 bg-primary/30 blur-sm opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-2 gap-8 pt-4 border-t border-slate-800/50">
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-blue-500">
                <span className="material-symbols-outlined text-sm">download</span>
                <span className="text-[10px] font-black uppercase tracking-widest">Download</span>
              </div>
              <p className="text-xl font-black">{metrics.networkDown.toFixed(2)} <span className="text-[10px] text-slate-500">MB/s</span></p>
            </div>
            <div className="space-y-1 text-right">
              <div className="flex items-center gap-2 text-emerald-500 justify-end">
                <span className="text-[10px] font-black uppercase tracking-widest">Upload</span>
                <span className="material-symbols-outlined text-sm">upload</span>
              </div>
              <p className="text-xl font-black">{metrics.networkUp.toFixed(2)} <span className="text-[10px] text-slate-500">MB/s</span></p>
            </div>
          </div>
        </div>

        {/* Active Instances */}
        <div className="space-y-4">
          <div className="flex items-center justify-between px-1">
            <h3 className="font-black text-sm uppercase tracking-widest text-slate-400">Nodes Status</h3>
            <button className="text-primary text-xs font-bold">Manage All</button>
          </div>
          <div className="space-y-3">
            {[
              { name: 'Primary Web-US1', status: 'Healthy', ip: '10.0.4.12', uptime: '42d 11h', color: 'text-emerald-500' },
              { name: 'Database Cluster-01', status: 'Healthy', ip: '10.0.4.99', uptime: '128d 4h', color: 'text-emerald-500' },
              { name: 'Edge Cache-JP3', status: 'Optimizing', ip: '10.0.4.5', uptime: '1d 22h', color: 'text-blue-400' },
            ].map((node) => (
              <div key={node.name} className="p-4 bg-surface-dark border border-slate-800 rounded-2xl flex items-center justify-between hover:border-primary/50 transition-colors cursor-pointer">
                <div className="flex items-center gap-4">
                  <div className="size-10 bg-slate-900 rounded-xl flex items-center justify-center border border-slate-800">
                    <span className="material-symbols-outlined text-slate-500">dns</span>
                  </div>
                  <div>
                    <p className="text-sm font-bold">{node.name}</p>
                    <p className="text-[10px] text-slate-500">{node.ip} • Uptime {node.uptime}</p>
                  </div>
                </div>
                <div className="text-right">
                  <span className={`text-[10px] font-black uppercase tracking-widest ${node.color}`}>{node.status}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Global Traffic Heatmap (Mock) */}
        <div className="p-5 bg-surface-dark rounded-3xl border border-slate-800 space-y-4">
          <h3 className="font-black text-sm uppercase tracking-widest text-slate-400">Global Heatmap</h3>
          <div className="h-32 bg-slate-900/50 rounded-2xl relative overflow-hidden">
             <img src="https://picsum.photos/seed/heatmap/400/200" className="w-full h-full object-cover opacity-20 grayscale" alt="Map" />
             <div className="absolute inset-0 bg-gradient-to-t from-surface-dark to-transparent opacity-60"></div>
             
             {/* Pulse points */}
             <div className="absolute top-1/4 left-1/3 size-3 bg-primary rounded-full animate-ping opacity-75"></div>
             <div className="absolute top-1/2 left-2/3 size-4 bg-emerald-500 rounded-full animate-ping opacity-50"></div>
             <div className="absolute top-2/3 left-1/4 size-2 bg-blue-400 rounded-full animate-ping opacity-90"></div>
          </div>
          <div className="flex justify-between items-center text-[10px] font-bold text-slate-500 uppercase tracking-widest pt-2">
            <span>Last 24h Activity</span>
            <span className="text-emerald-500">+12% vs yesterday</span>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
