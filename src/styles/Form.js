import styled from '@emotion/styled/macro';

export const Form = styled.form`
  padding: 5px;
  margin: 0 auto;
  margin-bottom: 10px;
  @media (min-width: 768px) {
    display: grid;
    grid-template-columns: 1fr 1fr 0.7fr;
    width: 500px;
    gap: 10px;
  }
  input {
    padding: 5px 5px;
    box-sizing: border-box;
    border-radius: 4px;
    border: 1px solid;
    border-color: #69c2be;
    display: block;
    width: 100%;
    margin-bottom: 3px;
    &::placeholder {
      color: #999;
    }
    &:focus {
      box-shadow: 0 0 2pt 1pt #69c2be;
      outline: none;
    }
    @media (min-width: 768px) {
      display: block;
      padding: 2px 5px;
      margin-bottom: 0;
    }
  }
  button {
    padding: 10px 0;
    margin-top: 15px;
    border-radius: 6px;
    border: none;
    display: block;
    width: 100%;
    color: #fff;
    background-color: #69c2be;
    font-weight: 600;
    transition: all 200ms linear;
    &:hover {
      transform: scale(1.1);
      box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
      cursor: pointer;
    }
    @media (min-width: 768px) {
      margin-top: 0;
    }
  }
`;
