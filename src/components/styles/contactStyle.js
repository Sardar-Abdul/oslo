import styled from "styled-components";
import menworking from "../../assets/images/menworking.jpg";

export const StyledContact = styled.div`
  background-image: url(${menworking});
  background-position: center;
  background-size: cover;
  background-repeat: no-repeat;
  overflow: hidden;
  width: 100%;
  height: 70vh;
`;

export const HeaderOverlay = styled.div`
  width: 100%;
  height: 100%;
  background: rgb(50, 54, 52, 0.85);

  .container {
    height: 70vh;
    display: flex;
    justify-content: space-around;
    align-items: center;

    @media (max-width: 767.98px) {
      height: 80vh;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
`;
export const SignUpContainer = styled.div`
  height: 100%;
  width: 50%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;

  @media (max-width: 767.98px) {
    width: 100%;
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding-top: 10px;
  }

  p {
    color: white;
    font-size: 20px;
    font-weight: 300;
    @media (max-width: 767.98px) {
      width: 100%;
      text-align: center;
      padding-top: 20px;
    }
  }
  h2 {
    color: white;
    text-align: start;
    width: 80%;
    font-size: 36px;
    font-weight: 200;

    @media (max-width: 767.98px) {
      width: 100%;
      font-size: 28px;
      text-align: center;
    }
    @media (max-width: 575.98px) {
      width: 80%;
      font-size: 22px;
      text-align: center;
    }
  }
  h6 {
    color: white;
    width: 60%;
    text-align: start;
    font-size: 15px;
    font-weight: 200;
    padding-top: 7px;

    @media (max-width: 767.98px) {
      width: 100%;
      text-align: center;
    }
    @media (max-width: 575.98px) {
      width: 80%;
      font-size: 12px;
      text-align: center;
    }
  }
`;
export const FormContainer = styled.div`
  @media (max-width: 767.98px) {
    height: 110vh;
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: start;
  }
  .form-label {
    color: rgb(214, 210, 183);
  }
  .form-control {
    background-color: rgb(177, 178, 177);
    border: none;
    width: 120%;
  }
  .form-control:focus {
    border: none;
    box-shadow: none;
  }

  Button {
    background-color: rgb(255, 0, 111) !important;
    color: white;
    font-weight: 600;
    border: none;
    width: 120%;
  }
  .btn:focus {
    outline: none;
    box-shadow: none;
  }
`;
