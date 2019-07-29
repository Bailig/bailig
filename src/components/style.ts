import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle<{ readonly backgroundImageUrl: string }>`
@import url('https://fonts.googleapis.com/css?family=Indie+Flower|Lato&display=swap');
body{
  background-image: url(${(props) => props.backgroundImageUrl});
  background-repeat: no-repeat;
  background-origin: center;
  background-attachment: fixed;
  background-position: center;
  background-size: cover;
  margin: 0;
}
`;

export const lowOpacityLight = "rgba(241, 242, 246, 0.32)";
export const highOpacityLight = "rgba(241, 242, 246, 0.76)";
export const highContrastLight = "#F1F2F6";
export const lowContrastLight = "#C5C6C9";
export const highContrastDark = "#2F3542";

export const h3 = `
  font-family: 'Indie Flower', cursive;
  font-size: 49px;
`;

export const h5 = `
  font-family: 'Indie Flower', cursive;
  font-size: 24px;
`;

export const subtitle1 = `
  font-family: 'Lato', sans-serif;
  font-size: 16px;
`;

export const label = `
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
`;

export const caption = `
  font-family: 'Lato', sans-serif;
  font-size: 12px;
`;
