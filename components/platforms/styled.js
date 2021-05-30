import styled from "styled-components";

const PlatformsContainer = styled.div`
width: 100%;
border-bottom: 1.5px #6a615a solid;

p {
    width: 70%;
    margin: 0 auto;
    max-width: 1344px;
    text-align: center;
    padding: 112px 0px 77px 0px;
    font-style: normal;
    font-weight: 300;
    font-size: 18px;
    color: #141414;
    letter-spacing: 0.225em;
    font-family: "Pangea", sans-serif;
    text-rendering: optimizeLegibility;
}

div {
    width: 70%;
    max-width: 1344px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 0px 0px 112px 0px;
    align-items: center;
    align-content: center;
}

div a {
    transition: 0.2s all;
    cursor: pointer;
}

div a:hover {
    transform: scale(1.5deg all);
}

`;

export { PlatformsContainer };
