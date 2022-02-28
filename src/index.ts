import { createGlobalStyle } from "styled-components";

const CssBaseline = createGlobalStyle`
    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
        font-family: 'Heebo', sans-serif;
    }

    html, body, #root {
        height: 100%;
    }
`;

export default CssBaseline;
