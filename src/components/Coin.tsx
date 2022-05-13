import styled from 'styled-components';
import { useQuery } from 'react-query';
import { fetchCoinTickers } from '../modules/api';
import { IPriceInfo } from '../Types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faCaretUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

interface ICoin {
  coinId: string;
}

const CoinBlock = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 1.125rem;
  border-radius: 12px;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
  background: ${(props) => props.theme.listBgColor};
  color: ${(props) => props.theme.listTextColor};

  & + & {
    margin-top: 1rem;
  }
`;

const CoinImg = styled.img`
  width: 48px;
  height: 48px;
`;

const Text = styled.span<{ isDown?: boolean }>`
  flex-basis: 25%;
  color: ${(props) => (props.isDown ? 'red' : '#000')};

  svg {
    margin-right: 0.5rem;
  }
`;

const Coin = ({ coinId }: ICoin) => {
  const { data: coinData } = useQuery<IPriceInfo>(['coins', coinId], () => fetchCoinTickers(coinId));

  return (
    <CoinBlock to={`/${coinId}`}>
      <CoinImg src={`https://cryptocurrencyliveprices.com/img/${coinId}.png`} alt="Coin" />
      <Text>{coinData?.name}</Text>
      <Text>${coinData?.quotes?.USD.price.toFixed(2)}</Text>
      <Text isDown={(coinData?.quotes?.USD.percent_from_price_ath as number) < 0}>
        {(coinData?.quotes?.USD.percent_from_price_ath as number) < 0 ? (
          <>
            <FontAwesomeIcon icon={faCaretDown} />
            {coinData?.quotes?.USD.percent_from_price_ath}%
          </>
        ) : (
          <>
            <FontAwesomeIcon icon={faCaretUp} />
            {coinData?.quotes?.USD.percent_from_price_ath}%
          </>
        )}
      </Text>
    </CoinBlock>
  );
};

export default Coin;
