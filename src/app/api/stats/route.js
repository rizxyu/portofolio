// app/api/stats/route.js
import os from 'os'
import { NextResponse } from 'next/server'

export async function GET() {
  const uptime = os.uptime()
  const totalMem = os.totalmem()
  const freeMem = os.freemem()
  const loadAvg = os.loadavg()
  const cpus = os.cpus()
  const networkInterfaces = os.networkInterfaces()

  // Cari alamat IP non-internal (bukan 127.0.0.1)
  let ip = 'N/A';
  for (const name of Object.keys(networkInterfaces)) {
    for (const net of networkInterfaces[name]) {
      // Lewati alamat internal dan non-IPv4
      if (net.family === 'IPv4' && !net.internal) {
        ip = net.address;
        break;
      }
    }
    if (ip !== 'N/A') break;
  }

  return NextResponse.json({
    uptime,
    totalMem,
    freeMem,
    loadAvg,
    cpuCount: cpus.length,
    platform: os.platform(),
    version: os.version(),
    arch: os.arch(),
    kernel: os.release(),
    ip,
  })
}
