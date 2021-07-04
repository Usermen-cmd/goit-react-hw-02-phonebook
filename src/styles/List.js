import styled from '@emotion/styled/macro';

export const List = styled.ul`
  margin: 0 auto;
  max-width: 500px;
  color: #353b3a;
  li {
    margin-bottom: 10px;
    padding: 5px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 768px) {
      flex-direction: column;
    }
    &:hover span {
      transition: all 200ms linear;
      transform: scale(1.02);
    }
  }
  button {
    padding: 3px 10px;
    border-radius: 6px;
    border: none;
    color: #fff;
    background-color: #69c2be;
    font-weight: 600;
    transition: all 200ms linear;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      cursor: pointer;
    }
    @media (max-width: 768px) {
      margin-top: 5px;
    }
  }
`;
