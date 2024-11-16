'use client'
import { useEffect, useState } from 'react';
import axios from 'axios';
import styles from './styles/Orderbook.module.css';

const Orderbook = () => {
  const [orderbook, setOrderbook] = useState({ bids: [], asks: [] });

  useEffect(() => {
    const fetchOrderbook = async () => {
      const res = await axios.get("https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10");
      setOrderbook(res.data);
    };

    fetchOrderbook();
    const interval = setInterval(fetchOrderbook, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.orderbook}>
      <h2>Orderbook</h2>
      <div className={styles.bids}>
        <h3>Bids</h3>
        {orderbook.bids.map((bid, index) => (
          <div key={index}>{bid[0]} @ {bid[1]}</div>
        ))}
      </div>
      <div className={styles.asks}>
        <h3>Asks</h3>
        {orderbook.asks.map((ask, index) => (
          <div key={index}>{ask[0]} @ {ask[1]}</div>
        ))}
      </div>
    </div>
  );
};

export default Orderbook;
