import { useEffect } from 'react';
import { Link, Outlet, useMatch, useParams } from 'react-router-dom';
import styled from 'styled-components';
import { useInternalRouter } from './routing';

const NavBar = styled.div`
  padding-top: 1rem;
  text-align: center;
`;

const NavLink = styled(Link)`
  padding: 0.875rem 2rem;
  color: ${(props) => props.theme.buttonLabelColor};
  border: 1px solid ${(props) => props.theme.buttonBorderColor};
  border-radius: 10px;

  & + & {
    margin-left: 10px;
  }
`;

interface IParams {
  coinId: string;
}

const CoinPage = () => {
  const router = useInternalRouter();
  const { coinId } = useParams<keyof IParams>();
  const matchRoot = useMatch(`/${coinId}`);

  useEffect(() => {
    if (matchRoot) router.push(`/${coinId}/chart`);
  }, [matchRoot, coinId, router]);

  return (
    <>
      <Outlet context={{ coinId }} />
      <NavBar>
        <NavLink to={`/${coinId}/chart`}>Chart</NavLink>
        <NavLink to={`/${coinId}/price`}>Price</NavLink>
      </NavBar>
    </>
  );
};

export default CoinPage;
