import styled from "styled-components";

const BiographyContainer = styled.div`
    width: 100%;
    background-color: #EDEAE2;

    #textImageContainer {
        width: 70%;
        display: flex;
        margin: 0 auto;
        max-width: 1344px;
        justify-content: space-between;
        padding-top: 3%;
    }

    #textContainer {
        width: 48% !important;
    }

    #textContainer {

    }

    #imageContainer {
        width: 48% !important;
        display: flex;
        justify-content: flex-end;
    }

    #imageContainer img {
        width: 70% !important;
        display: block;
    }
`;  

export { BiographyContainer };
