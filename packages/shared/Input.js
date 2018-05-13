import styled from 'styled-components';

const Input = styled.input`
  font-size: 1.2rem;
  padding: 10px;
  border: 2px solid;
  &:hover {
    outline: none;
    background-color: lightyellow;
  }
  &:focus::-webkit-input-placeholder {
    color: transparent;
  }
`;

export default Input;
