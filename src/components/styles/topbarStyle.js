import styled from "styled-components";

export const StyledTopbar = styled.div`
  .container {
    background-color: white;
    min-height: 10vh;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .navbar-brand {
      font-size: 40px !important;
      font-weight: 200;
      color: rgb(255, 0, 111) !important;
      letter-spacing: 1px;

      @media (max-width: 575.98px) {
        display: none;
      }
    }
  }
  .nav-link {
    color: black !important;

    :hover {
      color: rgb(255, 0, 111) !important;
    }

    @media (max-width: 575.98px) {
      height: 10vh;
      width: 45vw;
      color: rgb(255, 0, 111) !important;
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }
`;
