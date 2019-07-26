import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import styled, { createGlobalStyle } from "styled-components";
import { Avatar } from "../components";
import { IHomePage } from "../interfaces";
import { fetchHomePage } from "../utils/sample-api";
interface IImageBackground {
  readonly backgroundImageUrl: string;
}

const lowOpacityLight = "rgba(241, 242, 246, 0.32)";
const highOpacityLight = "rgba(241, 242, 246, 0.76)";
// const highContrastLight = "#F1F2F6";
// const lowContrastLight = "#C5C6C9";
const highContrastDark = "#2F3542";

const subtitle1 = `
  font-family: 'Lato', sans-serif;
  font-size: 16px;
`;

const label = `
  font-family: 'Lato', sans-serif;
  font-size: 16px;
  text-transform: uppercase;
`;

const caption = `
  font-family: 'Lato', sans-serif;
  font-size: 12px;
`;

const GlobalStyle = createGlobalStyle<IImageBackground>`
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

const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Line = styled.hr`
  width: 90px;
  border-bottom: 1px solid ${highContrastDark};
  border-top: none;
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
`;

const Greeting = styled.span`
  ${subtitle1}
  color: ${highContrastDark};
`;
const Title = styled.div`
  font-family: 'Indie Flower', cursive;
  font-size: 49px;
  color: ${highContrastDark};
  margin-top: 6px;
`;

const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
`;

const Headline = (props: { data: IHomePage }) => {
  return (
    <HeadlineContainer>
      <div>
        <Line />
          <Greeting>Hey, I’m</Greeting>
        <Line />
      </div>
      <Title>{props.data.name}</Title>
    </HeadlineContainer>
  );
};

const IntroductionText = styled.span`
  ${subtitle1}
  color: ${highContrastDark};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.4px;
  max-width: 477px;
  margin: 12px 40px 0 40px;
`;

const ButtonGroup = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  align-self: stretch;
  margin: 40px 40px 0 40px;
  > button:not(:last-child) {
    border-bottom: none;
  }
  > button:first-child {
    border-top-left-radius: 22px;
    border-top-right-radius: 22px;
  }
  > button:last-child {
    border-bottom-left-radius: 22px;
    border-bottom-right-radius: 22px;
  }
`;

const Button = styled.button`
  ${label}
  border: 1px solid ${highContrastDark};
  height: 44px;
  background-color: transparent;
  outline: none;
  transition: 0.2s;
  :hover, :focus {
    background-color: ${lowOpacityLight};
  }
  :active {
    background-color: ${highOpacityLight};
  }
`;

const CopyrightNotice = styled.div`
  ${caption}
  color: ${highContrastDark};
  margin: 40px 0 20px 0;
`;

const IndexPage: NextPage = () => {
  const [data, setData] = useState<IHomePage | undefined>();

  useEffect(() => {
    (async () => {
      const homePage: IHomePage = await fetchHomePage();
      setData(homePage);
    })();
  });

  if (!data) { return <div>loading...</div>; }

  return (
    <Container>
      <Head>
        <title>Bailig</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      </Head>
      <GlobalStyle backgroundImageUrl={data.backgroundImageUrl}/>
      <Headline data={data}/>
      <IntroductionText>{data.introductionText}</IntroductionText>
      <Avatar avatarImageUrl={data.avatarImageUrl} />
      <ButtonGroup>
          <Button>Intro</Button>
          <Button>Work</Button>
          <Button>About</Button>
          <Button>Contact</Button>
      </ButtonGroup>
      <CopyrightNotice>© Bailig Abhanar {new Date().getFullYear()}</CopyrightNotice>
    </Container>
    // <Layout title="Home | Next.js + TypeScript Example">
    // </Layout>
  );
};

export default IndexPage;
