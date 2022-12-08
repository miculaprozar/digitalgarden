import styled from "styled-components";

export const UpFooter = styled.div`
    background: #191D1B;
`;

export const Row = styled.div`
    margin-left:10%;
    display: inline-flex;
    gap : 40px;
    @media (max-width:1100px) {
        display:initial;
        justify-content: center;

    }
`;

export const Col = styled.ul`
    
`;

export const Heading = styled.h4`
    font-weight: 900;
    font-size: 16px;
    color: #F2F2F2;
`;

export const Text = styled.p`
    max-width: 340px;
    font-weight: 400;
    font-size: 14px;
    color: #CACACA;
`;

export const Copyright = styled.div`
    height: 80px;
    background: #040404;
    padding: 20px;
`;

export const CopyrightText = styled.p`
    text-align: center;
    font-weight: 700;
    font-size: 16px;
    color: #848484;
`; 