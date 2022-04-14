import styled from "styled-components";

export const StyledReviews = styled.div`
  min-height: 100vh;
  background-color: rgb(255, 255, 255);

  @media (max-width: 991.98px) {
    min-height: 200vh;
  }
`;

export const ReviewsContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 991.98px) {
    height: 200vh;
  }
`;
export const TextContainer = styled.div`
  p {
    padding-top: 20px;
    font-size: 20px;
    text-align: center;
  }
  h2 {
    font-weight: 200;
    font-size: 36px;
    padding-bottom: 10px;
    text-align: center;

    @media (max-width: 991.98px) {
      font-size: 28px;
    }

    @media (max-width: 575.98px) {
      font-size: 25px;
    }
  }

  span {
    color: rgb(255, 0, 111);
  }
`;
export const CardContainer = styled.div`
  height: inherit;
  width: 100%;
  display: flex;
  justify-content: space-around;
  align-items: center;

  @media (max-width: 991.98px) {
    height: 200vh;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const FirstCard = styled.div`
  .card {
    border: none;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;

    @media (max-width: 575.98px) {
      height: 45vh;
    }
  }
  .card-title {
    font-weight: 500;
    color: rgb(77, 115, 145);
    text-align: center;
    padding-top: 15px;
  }
  .card-text {
    font-size: 15px;
    font-weight: 300;
    padding-top: 15px;
    text-align: justify;
    text-align-last: center;
  }
  .card-img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
`;
export const SecondCard = styled.div`
  .card {
    border: none;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;

    @media (max-width: 575.98px) {
      height: 45vh;
    }
  }
  .card-title {
    font-weight: 500;
    color: rgb(77, 115, 145);
    text-align: center;
    padding-top: 15px;
  }
  .card-text {
    font-size: 15px;
    font-weight: 300;
    padding-top: 15px;
    text-align: justify;
    text-align-last: center;
  }
  .card-img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
`;
export const ThirdCard = styled.div`
  .card {
    border: none;
    box-shadow: 0 12px 16px 0 rgba(0, 0, 0, 0.24);
    display: flex;
    justify-content: center;
    align-items: center;
    height: 50vh;

    @media (max-width: 575.98px) {
      height: 45vh;
    }
  }
  .card-title {
    font-weight: 500;
    color: rgb(77, 115, 145);
    text-align: center;
    padding-top: 15px;
  }
  .card-text {
    font-size: 15px;
    font-weight: 300;
    padding-top: 15px;
    text-align: justify;
    text-align-last: center;
  }
  .card-img {
    height: 100px;
    width: 100px;
    border-radius: 50%;
  }
`;
