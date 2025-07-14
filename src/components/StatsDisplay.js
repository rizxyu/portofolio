'use client';
import { useEffect, useState } from 'react'

// Pindahkan fungsi utilitas ke luar komponen
// agar tidak dibuat ulang pada setiap render.
const toGB = (bytes) => (bytes / 1024 / 1024 / 1024).toFixed(2);

const formatUptime = (totalSeconds) => {
  totalSeconds = Math.floor(totalSeconds);
  const days = Math.floor(totalSeconds / (3600 * 24));
  totalSeconds %= (3600 * 24);
  const hours = Math.floor(totalSeconds / 3600);
  totalSeconds %= 3600;
  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const pad = (num) => String(num).padStart(2, '0');

  const dayString = days > 0 ? `${days}d ` : '';
  return `${dayString}${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
};

const StatsDisplay = () => {
  const [stats, setStats] = useState(null);
  const [initialStatsLoaded, setInitialStatsLoaded] = useState(false);

  useEffect(() => {
    const getStats = async () => {
      try {
        const res = await fetch('/api/stats');
        const data = await res.json();
        setStats(data);
        setInitialStatsLoaded(true); // Tandai bahwa data awal sudah dimuat
      } catch (error) {
        console.error("Failed to fetch stats:", error);
      }
    };
    getStats();
  }, []); // Array dependensi kosong memastikan ini hanya berjalan sekali

  useEffect(() => {
    if (!initialStatsLoaded) return;

    const intervalId = setInterval(() => {
      setStats(prevStats => prevStats ? { ...prevStats, uptime: prevStats.uptime + 1 } : null);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [initialStatsLoaded]);

  if (!stats) {
    return (
      <div className="card bg-base-100 shadow-xl w-full max-w-4xl">
        <div className="card-body">
          {/* Skeleton untuk judul dan garis bawah */}
          <div className="mb-2">
            <div className="skeleton h-10 w-3/4 mb-2"></div>
            <div className="skeleton h-[1px] w-48"></div>
          </div>
          {/* Skeleton untuk blok statistik */}
          <div className="skeleton h-24 w-full mb-4"></div>
          <div className="skeleton h-24 w-full mb-4"></div>
          <div className="skeleton h-24 w-full mb-4"></div>
          <div className="skeleton h-20 w-full"></div>
        </div>
      </div>
    );
  }

  // Tampilan Statistik
  return (
    <div id="server-stats" className="card bg-base-100 shadow-xl w-full max-w-4xl relative">
      <div className="card-body [font-family:var(--font-jetbrains-mono)] p-4 sm:p-5">
        <div className="mb-4">
          <div className="flex items-center gap-2">
            <i className="ri-server-line text-lg sm:text-xl text-success"></i>
            <h1 className="text-lg sm:text-xl [font-family:var(--font-poppins)] font-bold">SERVER STATS</h1>
          </div>
          <hr className="w-32 sm:w-48 h-[2px] bg-success border-0 rounded mt-2" />
        </div>
        <div className="stats stats-vertical lg:stats-horizontal shadow text-xs sm:text-sm md:text-base">
          <div className="stat min-w-[90px]">
            <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-time-line"></i></div>
            <div className="stat-title">Uptime</div>
            <div className="stat-value text-xs sm:text-base">{formatUptime(stats.uptime)}</div>
          </div>
          <div className="stat min-w-[90px]">
            <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-hard-drive-2-line"></i></div>
            <div className="stat-title">Total RAM</div>
            <div className="stat-value text-xs sm:text-base">{toGB(stats.totalMem)} GB</div>
          </div>
          <div className="stat min-w-[90px]">
            <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-sd-card-mini-line"></i></div>
            <div className="stat-title">Free RAM</div>
            <div className="stat-value text-xs sm:text-base">{toGB(stats.freeMem)} GB</div>
          </div>
        </div>
        <div className="stats stats-vertical lg:stats-horizontal shadow mt-2 text-xs sm:text-sm md:text-base">
          <div className="stat min-w-[90px]">
            <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-line-chart-line"></i></div>
            <div className="stat-title">Load Avg</div>
            <div className="stat-value text-xs sm:text-base">{stats.loadAvg.map(avg => avg.toFixed(2)).join(', ')}</div>
          </div>
          <div className="stat min-w-[90px]">
            <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-cpu-line"></i></div>
            <div className="stat-title">CPU Cores</div>
            <div className="stat-value text-xs sm:text-base">{stats.cpuCount}</div>
          </div>
          <div className="stat min-w-[90px]">
            <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-computer-line"></i></div>
            <div className="stat-title">Platform</div>
            <div className="stat-value text-xs sm:text-base">{stats.platform}</div>
          </div>
        </div>
        <div className="stats stats-vertical lg:stats-horizontal shadow mt-2 text-xs sm:text-sm md:text-base">
          <div className="stat min-w-[90px]">
            <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-architecture-line"></i></div>
            <div className="stat-title">Architecture</div>
            <div className="stat-value text-xs sm:text-base">{stats.arch}</div>
          </div>
          <div className="stat min-w-[90px]">
            <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-terminal-window-line"></i></div>
            <div className="stat-title">Kernel</div>
            <div className="stat-value text-xs sm:text-base">{stats.kernel}</div>
          </div>
          <div className="stat min-w-[90px]">
            <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-global-line"></i></div>
            <div className="stat-title">IP Address</div>
            <div className="stat-value text-xs sm:text-base">{stats.ip}</div>
          </div>
        </div>
        <div className="stats shadow mt-4 text-xs sm:text-sm md:text-base">
          <div className="stat min-w-[90px]">
              <div className="stat-figure text-primary text-2xl sm:text-3xl"><i className="ri-information-line"></i></div>
              <div className="stat-title">Version</div>
              <div className="stat-value text-xs sm:text-base">{stats.version}</div>
          </div>
        </div>
      </div>
      <div className="absolute bottom-2 right-4 text-xs text-base-content/50 font-sans">
        *Time is based on Jakarta (UTC+7)
      </div>
    </div>
  );
};

export default StatsDisplay;