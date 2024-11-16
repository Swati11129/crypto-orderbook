// import { useEffect, useState } from 'react';
// import axios from 'axios';

// export const useOrderbookData = () => {
//   const [orderbook, setOrderbook] = useState({ bids: [], asks: [] });

//   useEffect(() => {
//     const fetchOrderbook = async () => {
//       const res = await axios.get("https://api.binance.com/api/v3/depth?symbol=BTCUSDT&limit=10");
//       setOrderbook(res.data);
//     };
//     fetchOrderbook();

//     const interval = setInterval(fetchOrderbook, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   return orderbook;
// };
