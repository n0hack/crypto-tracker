const END_POINT = `https://api.coinpaprika.com/v1`;

export function fetchCoins() {
  return fetch(`${END_POINT}/coins`).then((res) => res.json());
}

export function fetchCoinInfo(coinId: string) {
  return fetch(`${END_POINT}/coins/${coinId}`).then((res) => res.json());
}

export function fetchCoinTickers(coinId: string) {
  return fetch(`${END_POINT}/tickers/${coinId}`).then((res) => res.json());
}

export function fetchCoinHistory(coinId: string) {
  const endDate = Math.floor(Date.now() / 1000);
  const startDate = endDate - 60 * 60 * 24 * 7 * 2;

  return fetch(`${END_POINT}/coins/${coinId}/ohlcv/historical?start=${startDate}&end=${endDate}`).then((res) =>
    res.json()
  );
}
