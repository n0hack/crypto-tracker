# Crypto Tracker

다양한 암호화폐(비트코인, 이더리움 등)의 시세를 확인할 수 있는 간단한 트래킹 사이트입니다. 디자인적으로 많은 투자는 하지 않았으며, 리액트와 타입스크립트를 맛보기 위해 진행한 프로젝트입니다.

## 계획

- [x] 프로젝트 구성 (Set-up, Architecture)
- [x] Header 컴포넌트
- [x] Header 다크모드 토글
- [x] 다크모드 관련 Hook 만들기
- [x] CoinsList 컴포넌트
- [x] CoinDetail 컴포넌트
- [x] CoinDetail 차트 그래프
- [x] Github pages 배포

> 작업 기간: 2022.05.11(수) ~ 2022.05.12(목) -- 2일

## 사용 기술

- React.js + Typescript
- Styled-Components
- React Router / ApexChart / Halogenium (Loading Spinner)

> Halogenium은 Halogen repo를 fork해 이슈를 해결한 라이브러리입니다.

## 이슈

- ApexChart의 차트의 테마 변경 시 실시간으로 반영되지 않는 문제 (라이브러리 문제
  😡)
- Github Pages 배포 시 리액트 라우터 베이스 주소 문제 (해결)

```javascript
// process.env.PUBLIC_URL은 package.json의 homepage 값을 가리킴
<BrowserRouter basename={process.env.PUBLIC_URL}>{/* ... */}</BrowserRouter>
```

## License

MIT &copy; 2022.05 NoHack
