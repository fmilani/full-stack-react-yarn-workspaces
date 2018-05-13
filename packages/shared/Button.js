import styled from 'styled-components';

const Button = styled.button`
  background-color: white;
  border: 2px solid;
  font-size: 1.2rem;
  padding: 10px;
  min-width: 10rem;
  &:disabled {
    color: gainsboro;
  }
`;

export default Button;
