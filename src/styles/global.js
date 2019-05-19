import { createGlobalStyle } from "styled-components";

// import 'font-awesome/css/font-awesome.css';

const GlobalStyle = createGlobalStyle`
	* {
		margin: 0;
		padding: 0;
		box-sizing: border-box;
		outline: 0;
	}

	body {
		/* background: #9b65e6; */
		text-rendering: optimizeLegibility !important;
		-webkit-font-smoothing: antialiased !important;
    font-family: sans-serif;
    font-size: 14px;
	}

  .flex-container {
    display: flex;
    justify-content: space-between;
    align-items: stretch;
  }

  .flex-column {
    flex-grow: 1;
    flex-basis: 0;
  }
`;

export default GlobalStyle;
