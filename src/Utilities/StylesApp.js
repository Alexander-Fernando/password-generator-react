import styled from 'styled-components';

export const Fila = styled.div`
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px;
`;

export const Controles = styled.div`
  display: flex;
  justify-content: space-between;
  text-align: center;
  align-items: center;
  & > * {
    flex: 1;
  }
  span {
    line-height: 40px;
    background-color: #33257e;
  }
`;

export const Input = styled.input`
  width: 100%;
  background: none;
  border-radius: 4px;
  border: 1px solid rgba(255, 255, 255, 0.25);
  color: #fff;
  height: 40px;
  line-height: 40px;
  cursor: pointer;
  transition: all 0.4 ease;
  &:hover {
    border: 1px solid rgba(255, 255, 255, 0.5);
  }

  &::selection {
    background: #212139;
  }

  &::-moz-selection {
    background: #212139;
  }
`;
