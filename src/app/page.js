import Orderbook from '@/components/Orderbook';
import SpreadIndicator from '@/components/SpreadIndicator';
import OrderbookImbalance from '@/components/OrderbookImbalance';
import MarketDepthChart from '@/components/MarketDepthChart';
import styles from './styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <h1>BTC-USD Orderbook</h1>
      <SpreadIndicator />
      <OrderbookImbalance />
      <Orderbook />
      <MarketDepthChart />
    </div>
  );
}
