import styled from "styled-components";


export const ContainerHome = styled.div`
    margin: auto;
    width: 100%;
    height: 500px;
    background: linear-gradient(180deg, rgba(255, 255, 255, 0) 0%, rgba(200, 255, 228, 0.7) 100%);
    display: flex;
    justify-content: center;
    margin-top: 8%;

    .illustration {
        width: 321px;
        height: 332px;
        margin-left: 170px;
        @media (max-width:1200px) {
            display: none;
        }
    }
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
    @media (max-width:502px) {
        margin: 0 15%;
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

    @media (max-width:570px ){
        display: none;
    }
`;

export const Description = styled.div`
    text-align: justify;
    font-weight: 400;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
    margin-top: 20px;
    @media (max-width:500px ){
        text-align: justify;
        br {
            display: none;
        }
    }
`;

export const Button = styled.button`
    float: left;
    align-items: center;
    background: rgba(23, 102, 83, 0.79);
    filter: drop-shadow(0px 4px 12px rgba(107, 199, 160, 0.58));
    color: #FFFFFF;
    border-radius: 24px;
    margin-top: 45px;
    font-weight: 900;
    font-size: 18px;
    line-height: 25px;
    padding: 13px 30px;
    border: 0;

    .arrow{
        margin-left: 20px;
    }

    @media (max-width:502px) {
        float: initial;
    }
`;


