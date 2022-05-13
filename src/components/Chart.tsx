import ReactApexChart from 'react-apexcharts';
import { useQuery } from 'react-query';
import { useOutletContext } from 'react-router-dom';
import { RingLoader as Loader } from 'halogenium';
import styled, { ThemeContext } from 'styled-components';
import { fetchCoinHistory } from '../modules/api';
import { IHistorical } from '../Types';
import Title from './Title';
import { useContext } from 'react';

const Container = styled.div`
  padding: 4rem 0 1rem;
`;

const ChartBlock = styled.div``;

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

const Chart = () => {
  const { coinId } = useOutletContext<IOutletContext>();
  const { isLoading, data: histData } = useQuery<IHistorical[]>(['ohlcv', coinId], () => fetchCoinHistory(coinId));
  const { chartColor } = useContext(ThemeContext);

  return (
    <Container>
      {isLoading ? (
        <Spinner />
      ) : (
        <ChartBlock>
          <Title size="36px">{coinId}</Title>
          <ReactApexChart
            type="candlestick"
            options={{
              chart: { type: 'candlestick', height: 350 },
              xaxis: { type: 'datetime' },
              yaxis: { tooltip: { enabled: true } },
              theme: {
                mode: chartColor,
              },
            }}
            series={[
              {
                data: histData?.map((h) => ({
                  x: h.time_open,
                  y: [h.open.toFixed(2), h.low.toFixed(2), h.high.toFixed(2), h.close.toFixed(2)],
                })) as [],
              },
            ]}
            style={{ marginTop: '2rem' }}
          />
        </ChartBlock>
      )}
    </Container>
  );
};

export default Chart;
