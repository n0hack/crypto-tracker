import { useQuery } from 'react-query';
import { fetchCoins } from '../modules/api';
import { ICoins } from '../Types';
import { RingLoader as Loader } from 'halogenium';
import styled from 'styled-components';
import Coin from '../components/Coin';

const CoinsList = styled.ul`
  margin-top: 2rem;
`;

const Spinner = styled(Loader)`
  margin: 0 auto;
  width: 72px;
  height: 72px;
  div {
    div {
      border: 7.2px solid ${(props) => props.theme.spinnerColor};
      transition: border 0.2s ease-in-out;
    }
  }
`;

const CoinsPage = () => {
  const { isLoading, data: coins } = useQuery<ICoins[]>('coins', fetchCoins);

  return (
    <CoinsList>
      {isLoading ? <Spinner /> : coins?.slice(0, 10).map((coin) => <Coin key={coin.id} coinId={coin.id} />)}
    </CoinsList>
  );
};

export default CoinsPage;
