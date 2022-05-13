import styled from 'styled-components';
import { RingLoader as Loader } from 'halogenium';
import { IPriceInfo } from '../Types';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { fetchCoinTickers } from '../modules/api';
import Title from './Title';

const Container = styled.div`
  padding: 4rem 0 1rem;
`;

const PriceBlock = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const PriceBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 2rem 0;
  color: ${(props) => props.theme.listTextColor};
  background-color: ${(props) => props.theme.listBgColor};
  border: 1px solid ${(props) => props.theme.buttonBorderColor};
  border-radius: 14px;
`;

const PriceCol = styled.div`
  padding: 1rem;
  flex: 1;
`;

const PriceInfo = styled.p`
  text-align: center;
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

interface IOutletContext {
  coinId: string;
}

const Price = () => {
  const { coinId } = useOutletContext<IOutletContext>();
  const { isLoading, data: priceData } = useQuery<IPriceInfo>(['price', coinId], () => fetchCoinTickers(coinId));

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <PriceBlock>
          <Title>{coinId}</Title>
          <PriceBox>
            <PriceCol>
              <PriceInfo>
                Total Supply
                <br />${priceData?.total_supply}
              </PriceInfo>
              <hr />
              <PriceInfo>
                Circulating Supply
                <br />${priceData?.circulating_supply}
              </PriceInfo>
            </PriceCol>
            <PriceCol>
              <PriceInfo>
                Market Cap
                <br />${priceData?.quotes?.USD.market_cap}
              </PriceInfo>
              <hr />
              <PriceInfo>
                Volume (24h)
                <br />${priceData?.quotes?.USD.volume_24h}
              </PriceInfo>
            </PriceCol>
            <PriceCol>
              <PriceInfo>
                ATH Price
                <br />${priceData?.quotes?.USD.ath_price}
              </PriceInfo>
              <hr />
              <PriceInfo>
                Price
                <br />${priceData?.quotes?.USD.price}
              </PriceInfo>
            </PriceCol>
          </PriceBox>
        </PriceBlock>
      )}
    </Container>
  );
};

export default Price;
