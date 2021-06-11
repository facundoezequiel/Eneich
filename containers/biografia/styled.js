import styled from "styled-components";

const BioespengContainer = styled.div`
  width: 100%;
  background-color: #edeae2;

  @import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap');

  #bioContainer {
    border-top: 1.5px #6a615a solid;
    border-bottom: 1.5px #6a615a solid;
    width: 100%;
  }

  #bioContainer div {
    width: 30%;
    margin: 0 auto;
    max-width: 1344px;
    padding: 7% 0% 5% 0%;
  }

  #bioContainer div p {
      font-size: 1.2em;
      line-height: 32px;
      font-family: 'Lora', serif;
      text-align: left;
  }
`;

export { BioespengContainer };
