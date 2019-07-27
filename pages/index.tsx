import { NextPage } from "next";
import Head from "next/head";
import { useEffect, useState } from "react";
import { Avatar, Button, ButtonGroup, Container, CopyrightNotice, Dialog, Greeting, HeadlineContainer, IntroductionText, Line, Title } from "../components";
import { GlobalStyle } from "../components/style";
import { IDialogContent, IHomePage, INormalizedData } from "../interfaces";
import { fetchDialogContents, fetchHomePage } from "../utils/sample-api";

export const Headline: React.FunctionComponent<{ data: IHomePage }> = (props) => {
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

const IndexPage: NextPage = () => {
  const [homePage, setHomePage] = useState<IHomePage | undefined>();
  const [dialogContents, setDialogContents] = useState<INormalizedData<IDialogContent> | undefined>();
  const [openingDialogId, setOpeningDialogId] = useState<string | undefined>();
  const [open, setOpen] = useState<boolean>(false);

  useEffect(() => {
    (async () => {
      const [homePageData, dialogContentsData] = await Promise.all([fetchHomePage(), fetchDialogContents()]);
      setHomePage(homePageData);
      setDialogContents(dialogContentsData);
    })();
  });

  if (!homePage || !dialogContents) { return <div>loading...</div>; }

  const renderButtons = () => {
    const handleOpen = (d: IDialogContent) => {
      setOpeningDialogId(d.id);
      setOpen(true);
    };
    return Object.values(dialogContents)
      .sort((a, b) => (a.number > b.number) ? 1 : -1)
      .map((d) => <Button key={d.id} onClick={() => handleOpen(d)}>{d.name}</Button>);
  };

  const renderDialog = () => {
    if (!openingDialogId) { return; }
    const handleClose = () => {
      setOpeningDialogId(undefined);
      setOpen(false);
    };
    return <Dialog dialogContent={dialogContents[openingDialogId]} open={open} handleClose={handleClose}/>;
  };

  return (
    <Container>
      <Head>
        <title>Bailig</title>
        <meta charSet="UTF-8"/>
        <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
        <meta http-equiv="X-UA-Compatible" content="ie=edge"/>
      </Head>
      <GlobalStyle backgroundImageUrl={homePage.backgroundImageUrl}/>

      <Headline data={homePage}/>
      <IntroductionText>{homePage.introductionText}</IntroductionText>
      <Avatar src={homePage.avatarImageUrl} />
      <ButtonGroup>
          {renderButtons()}
      </ButtonGroup>
      <CopyrightNotice>© Bailig Abhanar {new Date().getFullYear()}</CopyrightNotice>

      {renderDialog()}
    </Container>
  );
};

export default IndexPage;
