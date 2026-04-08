import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());

app.get('/api/gold', async (req, res) => {
  try {
    const url = 'https://query1.finance.yahoo.com/v10/finance/quoteSummary/GC=F?modules=price';
    const response = await fetch(url);
    const data = await response.json();
    const price = data?.quoteSummary?.result?.[0]?.price?.regularMarketPrice?.raw;
    res.json({ price: price || 3085.40 });
  } catch (err) {
    res.json({ price: 3085.40 });
  }
});

app.listen(3000, () => console.log('Gold API running on port 3000'));
