
import styled from "styled-components";

export const Container = styled.div`
  margin :auto;
  width:100%;
  @media only screen and (min-width: 576px) {
    max-width:540px;
  }
  @media only screen and (min-width: 768px) {
    max-width:720px;
  }
  @media only screen and (min-width: 992px) {
    max-width:920px;
  }
  @media only screen and (min-width: 1200px) {
    max-width:1140px;
  }
`;