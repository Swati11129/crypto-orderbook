'use client';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register the components you need
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

import { useState, useEffect } from 'react';

const MarketDepthChart = () => {
  const [depthData, setDepthData] = useState({ bids: [], asks: [] });

  useEffect(() => {
    const interval = setInterval(fetchDepth, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchDepth = async () => {
    try {
      const res = await fetch("https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10");
      
      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();
      setDepthData(data);
    } catch (error) {
      console.error("Error fetching market depth data:", error);
    }
  };

  const chartData = {
    labels: [...depthData.bids.map(bid => bid[0]), ...depthData.asks.map(ask => ask[0])],
    datasets: [
      {
        label: 'Bids',
        data: depthData.bids.map(bid => bid[1]),
        borderColor: 'green',
      },
      {
        label: 'Asks',
        data: depthData.asks.map(ask => ask[1]),
        borderColor: 'red',
      }
    ]
  };

  return (
    <div>
      <h3>Market Depth</h3>
      <Line data={chartData} />
    </div>
  );
};

export default MarketDepthChart;
