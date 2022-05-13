import CoinPage from './CoinPage';
import CoinsPage from './CoinsPage';
import { Route, Routes as ReactRouterRoutes, Navigate } from 'react-router-dom';
import Chart from '../components/Chart';
import Price from '../components/Price';

const Routes = () => {
  return (
    <ReactRouterRoutes>
      <Route path="/" element={<CoinsPage />} />
      <Route path="/:coinId" element={<CoinPage />}>
        <Route path="chart" element={<Chart />} />
        <Route path="price" element={<Price />} />
      </Route>
      <Route path="*" element={<Navigate replace to="/" />} />
    </ReactRouterRoutes>
  );
};

export default Routes;
