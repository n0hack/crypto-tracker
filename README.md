# Crypto Tracker ๐ฐ

๋ค์ํ ์ํธํํ(๋นํธ์ฝ์ธ, ์ด๋๋ฆฌ์ ๋ฑ)์ ์์ธ๋ฅผ ํ์ธํ  ์ ์๋ ๊ฐ๋จํ ํธ๋ํน ์ฌ์ดํธ์๋๋ค. ์ค์  ์๋น์ค๋ฅผ ํ๊ธฐ ์ํจ๋ณด๋ค๋ ๋ฆฌ์กํธ์ ํ์์คํฌ๋ฆฝํธ๊ฐ ์ด๋ค ๊ฒ์ธ์ง ๋ง๋ณด๊ธฐ ์ํด ์งํํ ํ ์ด ํ๋ก์ ํธ์๋๋ค.

## ์คํ ๋ฐฉ๋ฒ

```
# ์์กด ๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ค์น ๋ฐ ์คํ
yarn
yarn start
```

์ ๋ช๋ น์ด ์ํ ํ https://localhost:3000 ์ผ๋ก ์ ์ํด์ ํ์ธํ๋ฉด ๋ฉ๋๋ค.

## ๊ณํ

- [x] ํ๋ก์ ํธ ๊ตฌ์ฑ (Set-up, Architecture)
- [x] Header ์ปดํฌ๋ํธ
- [x] Header ๋คํฌ๋ชจ๋ ํ ๊ธ
- [x] ๋คํฌ๋ชจ๋ ๊ด๋ จ Hook ๋ง๋ค๊ธฐ
- [x] CoinsList ์ปดํฌ๋ํธ
- [x] CoinDetail ์ปดํฌ๋ํธ
- [x] CoinDetail ์ฐจํธ ๊ทธ๋ํ
- [x] Github pages ๋ฐฐํฌ

> ์์ ๊ธฐ๊ฐ: 2022.05.11(์) ~ 2022.05.12(๋ชฉ) -- 2์ผ

## ์ฌ์ฉ ๊ธฐ์ 

- React.js + Typescript
- Styled-Components
- React Router / ApexChart / Halogenium (Loading Spinner)

> Halogenium์ Halogen repo๋ฅผ forkํด ์ด์๋ฅผ ํด๊ฒฐํ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์๋๋ค.

## ์ด์

- ApexChart์ ์ฐจํธ์ ํ๋ง ๋ณ๊ฒฝ ์ ์ค์๊ฐ์ผ๋ก ๋ฐ์๋์ง ์๋ ๋ฌธ์  (๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ฌธ์ 
  ๐ก)

```javascript
// ๋ผ์ด๋ธ๋ฌ๋ฆฌ ๋ฌธ์ ์ด๋ฏ๋ก ํด๊ฒฐ ๋ชป ํจ
const { chartColor } = useContext(ThemeContext);

// ...

<ReactApexChart
  type="candlestick"
  options={{
    theme: { mode: chartColor },
  }}
/>;
```

- Github Pages ๋ฐฐํฌ ์ ๋ฆฌ์กํธ ๋ผ์ฐํฐ ๋ฒ ์ด์ค ์ฃผ์ ๋ฌธ์  (ํด๊ฒฐ)

```javascript
// process.env.PUBLIC_URL์ package.json์ homepage ๊ฐ์ ๊ฐ๋ฆฌํด
<BrowserRouter basename={process.env.PUBLIC_URL}>{/* ... */}</BrowserRouter>
```

## License

MIT &copy; 2022.05 NoHack
