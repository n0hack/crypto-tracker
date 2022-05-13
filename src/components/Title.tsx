import styled from 'styled-components';

const Title = styled.h1<{ size?: string }>`
  display: flex;
  align-items: center;
  font-size: ${(props) => props.size || '48px'};
  color: ${(props) => props.theme.accentColor};

  svg {
    width: 42px;
    height: 42px;
    color: #f1c40f;
    margin-right: 1.2rem;
  }

  @media (max-width: 768px) {
    font-size: 36px;

    svg {
      width: 28px;
      height: 28px;
    }
  }
`;

export default Title;
