import styled from "styled-components";

// Iframe Container
const IframeContainer = styled.div`
  padding-bottom: 56.25%; /* 16:9 */
  overflow: hidden;
  height: 0;
  position: relative;

  iframe,
  embed,
  object {
    height: 100%;
	left: 0;
	position: absolute;
	top: 0;
	width: 100%;
  }
`;

export { IframeContainer };
