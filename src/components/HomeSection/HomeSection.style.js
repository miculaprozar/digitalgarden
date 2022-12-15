import styled from "styled-components";


export const Container = styled.div`
    margin: auto;
    width: 1320px;
    height: 500px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(200, 255, 228, 0.7) 100%);
    display: flex;
    justify-content: center;
    margin-top: 8%;
`;

export const HomeTitle = styled.div`
    text-align: center;
    font-size: 54px;
    line-height: 73.66px;
  
    p {
        margin: 0;
    }
    .firstTitle {
        font-weight: 500;
        color:#3C3C3C;
        margin-top: 7px;
    }

    span {
        font-weight: 400;
        color :#4D4D4D;
    }

    .thirdTitle {
        font-weight: 800;
        color: #2EA15C;
    }
`;


export const LeafAndLine = styled.div`
    display: flex;
    flex-direction: column;

    .leaf {
        margin-right: 23px;
    }

    .line {
        height: 113px;
    }
`;

export const Description = styled.div`
    text-align: justify;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    margin-top: 20px;
`;



