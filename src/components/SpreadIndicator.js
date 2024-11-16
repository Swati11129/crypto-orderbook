'use client';
import { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';

const SpreadIndicator = () => {
  const [spreadData, setSpreadData] = useState([]);
  const [labels, setLabels] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      fetchSpread();
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  const fetchSpread = async () => {
    try {
      // Fetch best bid and ask prices to calculate spread
      const res = await fetch("https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=5");

      if (!res.ok) {
        throw new Error(`API error: ${res.status}`);
      }

      const data = await res.json();

      if (data.bids.length && data.asks.length) {
        const spread = parseFloat(data.asks[0][0]) - parseFloat(data.bids[0][0]);
        setSpreadData((prev) => [...prev.slice(-59), spread]);
        setLabels((prev) => [...prev.slice(-59), new Date().toLocaleTimeString()]);
      }
    } catch (error) {
      console.error("Error fetching spread data:", error);
    }
  };

  return (
    <div>
      <h3>Spread Indicator</h3>
      <Line
        data={{
          labels: labels,
          datasets: [{
            label: 'Spread',
            data: spreadData,
            fill: false,
            borderColor: 'red',
          }]
        }}
      />
    </div>
  );
};

export default SpreadIndicator;
