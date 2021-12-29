import { createGlobalStyle } from "styled-components";

const FontStyles = createGlobalStyle`
@font-face {
    font-family:'Quicksand';
    src: url('./Quicksand-Regular.ttf') format('ttf');
    font-weight: 400;
    font-display: fallback;
}

@font-face {
    font-family:'Quicksand';
    src: url('./Quicksand-Bold.ttf') format('ttf');
    font-weight: bold;
    font-display: fallback;
}

@font-face {
    font-family:'Quicksand';
    src: url('./Quicksand-Light.ttf') format('ttf');
    font-weight: 300;
    font-display: fallback;
}
`;
export default FontStyles;
