import styled from "styled-components";

export const StyledSignUp = styled.div`
  min-height: 16vh;
  background-color: rgb(239, 0, 121);
`;
export const SignUpContainer = styled.div`
  height: 16vh;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 767.98px) {
    height: 20vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
  }
  @media (max-width: 575.98px) {
    height: 13vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    row-gap: 20px;
  }
`;
export const TextContainer = styled.div`
  h2 {
    color: white;
    font-weight: 200;
    font-size: 28px;

    @media (max-width: 991.98px) {
      font-size: 20px;
    }
    @media (max-width: 575.98px) {
      font-size: 17px;
      font-weight: 400;
      padding-top: 20px;
    }
  }
`;
export const ButtonCotainer = styled.div`
  Button {
    background-color: white !important;
    color: rgb(255, 0, 111);
    font-weight: 400;
    width: 130px;
    border: none;
    padding: 7px;

    @media (max-width: 991.98px) {
      width: 100px;
      font-weight: 600;
      font-size: 12px;
    }
    @media (max-width: 575.98px) {
      width: 100px;
      font-weight: 600;
      font-size: 10px;
    }

    a {
      text-decoration: none;
      color: rgb(255, 0, 111);
    }

    :hover {
      color: rgb(255, 0, 111);
      box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
    }
  }
  .btn:focus {
    outline: none;
    box-shadow: none;
  }
`;
