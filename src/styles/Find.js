import styled from '@emotion/styled/macro';

export const Find = styled.div`
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 0 auto;
    margin-bottom: 20px;
    max-width: 500px;
  }

  h4 {
    text-align: center;
    color: #353b3a;
    margin-bottom: 10px;
    font-weight: 900;
  }
  input {
    padding: 10px 5px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid;
    border-color: #69c2be;
    display: block;
    width: 150px;
    &::placeholder {
      color: #999;
    }
  }
  button {
    padding: 10px 10px;
    border-radius: 6px;
    border: none;
    display: block;
    color: #fff;
    background-color: #69c2be;
    font-weight: 600;
    transition: all 200ms linear;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      cursor: pointer;
    }
  }
`;
