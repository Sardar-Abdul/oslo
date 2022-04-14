import styled from "styled-components";

export const StyledFeatures = styled.div``;

export const FeatureContainer = styled.div`
  height: 70vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media (max-width: 991.98px) {
    height: 130vh;
  }
`;
export const TextContainer = styled.div`
  p {
    font-size: 20px;
    text-align: center;
  }

  h2 {
    color: rgb(255, 0, 111);
    font-weight: 200;
    font-size: 36px;
    padding-bottom: 10px;
    text-align: center;
  }
`;
export const ItemContainer = styled.div`
  height: 300px;
  width: 80%;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 991.98px) {
    height: 130vh;
    width: 80%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
  }
`;
export const StayOrganized = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    color: rgb(255, 0, 111);
    font-weight: 200;
    font-size: 22px;
    text-align: center;
    padding-top: 10px;
    width: 80%;
  }

  p {
    width: 80%;
    font-size: 12px;
    text-align: justify;
    text-align-last: center;
    padding-top: 5px;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
export const Productive = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    color: rgb(255, 0, 111);
    font-weight: 200;
    font-size: 22px;
    text-align: center;
    padding-top: 10px;
    width: 80%;
  }
  p {
    width: 80%;
    font-size: 12px;
    text-align: justify;
    text-align-last: center;
    padding-top: 5px;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
export const Collaborate = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;

  h2 {
    color: rgb(255, 0, 111);
    font-weight: 200;
    font-size: 22px;
    text-align: center;
    padding-top: 10px;
    width: 80%;
  }
  p {
    width: 80%;
    font-size: 12px;
    text-align: justify;
    text-align-last: center;
    padding-top: 5px;
  }
  img {
    width: 30px;
    height: 30px;
  }
`;
