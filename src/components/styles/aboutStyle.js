import styled from "styled-components";

export const StyledAbout = styled.div`
  min-height: 100vh;
  @media (max-width: 767.98px) {
    min-height: 130vh;
  }
`;

export const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 767.98px) {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const TextContainer = styled.div`
  width: 35%;
  text-align: start;

  @media (max-width: 991.98px) {
    width: 50%;
  }

  @media (max-width: 767.98px) {
    width: 90%;
  }

  p {
    font-size: 20px;
  }
  h2 {
    text-align: start;
    font-size: 40px;
    font-weight: 200;
    color: rgb(255, 0, 111);
    letter-spacing: 1px;
    line-height: 1.2em;

    @media (max-width: 575.98px) {
      font-size: 30px;
    }
  }
  h4 {
    padding-top: 10px;
    font-size: 16px;
    text-align: justify;
    text-align-last: start;
    font-weight: 200;
    line-height: 1.4em;
    padding-bottom: 20px;

    @media (max-width: 575.98px) {
      font-size: 14px;
    }
  }

  Button {
    background-color: rgb(255, 0, 111);
    color: white;
    border: none !important;
    width: 120px;
    font-weight: 500;

    a {
      text-decoration: none;
      color: white;
    }
    :hover {
      background-color: rgb(255, 0, 111);
      color: white;
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
    }
    :focus {
      background-color: rgb(255, 0, 111);
      color: white;
      border: none !important;
      box-shadow: none;
    }
  }
`;
export const ImageContainer = styled.div`
  img {
    height: 400px;
    width: 400px;
    border-radius: 100px 250px 250px 100px;
    border: 3px solid rgb(255, 0, 111);

    @media (max-width: 991.98px) {
      height: 300px;
      width: 300px;
    }
    @media (max-width: 767.98px) {
      height: 200px;
      width: 200px;
    }
  }
`;
