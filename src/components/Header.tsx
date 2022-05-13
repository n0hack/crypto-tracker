import { faCoins, faSun, faMoon, faCaretLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useMatch } from 'react-router-dom';
import styled from 'styled-components';
import { useInternalRouter } from '../pages/routing';
import { ThemeType } from '../Types';
import Title from './Title';

const HeaderBlock = styled.div`
  padding-top: 1rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Button = styled.button`
  width: 48px;
  height: 48px;
  background: transparent;
  color: ${(props) => props.theme.buttonLabelColor};
  border: 2px solid ${(props) => props.theme.buttonBorderColor};
  border-radius: 50%;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
  }
`;

const BackButton = styled(Button)<{ isActive: boolean }>`
  visibility: ${(props) => (props.isActive ? 'hidden' : 'visible')};
  svg {
    width: 22px;
    height: 22px;
  }
`;

const ToggleButton = styled(Button)`
  svg {
    width: 22px;
    height: 22px;
  }
`;

interface IHeaderProps {
  theme: ThemeType;
  onToggle: () => void;
}

interface IMatch {
  params: object;
  pathname: string;
  pathnameBase: string;
  pattern: object;
}

const Header = ({ theme, onToggle }: IHeaderProps) => {
  const match = useMatch('/') as IMatch;
  const router = useInternalRouter();

  return (
    <HeaderBlock>
      <BackButton isActive={match && match.pathname === '/'} onClick={() => router.push('/')}>
        <FontAwesomeIcon icon={faCaretLeft} />
      </BackButton>
      <Title>
        <FontAwesomeIcon icon={faCoins} />
        Coin Tracker
      </Title>
      <ToggleButton onClick={onToggle}>
        {theme === 'light' ? <FontAwesomeIcon icon={faMoon} /> : <FontAwesomeIcon icon={faSun} />}
      </ToggleButton>
    </HeaderBlock>
  );
};

export default Header;
