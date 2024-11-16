# Crypto Orderbook Application

## Overview
This Next.js application displays a real-time BTC-USD orderbook with market indicators.

## Features
- Orderbook with top 10 bids and asks
- Real-time spread and orderbook imbalance indicators
- Market depth chart with live updates
- Responsive design for mobile and desktop

## Setup Instructions
1. Clone the repository.
2. Install dependencies: `npm install`
3. Run the application: `npm run dev`
4. Open [http://localhost:3000](http://localhost:3000) in a browser.

## Libraries Used
- Chart.js for charting
- Axios for API requests
- Binance API for real-time data

## Assumptions
- Free tier of Binance API provides adequate data for the demo purposes.

## Known Issues
- Market depth updates may have a slight delay due to API rate limits.
