'use client'
import { useState, useEffect } from 'react';

const OrderbookImbalance = () => {
  const [imbalance, setImbalance] = useState(0);

  useEffect(() => {
    const interval = setInterval(fetchImbalance, 1000);
    return () => clearInterval(interval);
  }, []);

  const fetchImbalance = async () => {
    const res = await fetch("https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10");
    const data = await res.json();
    const bidVolume = data.bids.reduce((sum, [price, volume]) => sum + parseFloat(volume), 0);
    const askVolume = data.asks.reduce((sum, [price, volume]) => sum + parseFloat(volume), 0);
    setImbalance((bidVolume - askVolume) / (bidVolume + askVolume));
  };

  return (
    <div>
      <h3>Orderbook Imbalance: {imbalance.toFixed(2)}</h3>
    </div>
  );
};

export default OrderbookImbalance;
