
import styled from "styled-components";
import { caption, h3, highContrastDark, highOpacityLight, label, lowOpacityLight, subtitle1 } from "./style";
export { default as Dialog } from "./Dialog";

export const CopyrightNotice = styled.div`
${caption}
color: ${highContrastDark};
margin: 60px 0 20px 0;
`;

export const Avatar = styled.img`
margin-top: 40px;
`;

export const Container = styled.div`
  display: flex;
  height: 100vh;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Line = styled.hr`
  width: 90px;
  border-bottom: 1px solid ${highContrastDark};
  border-top: none;
  display: inline-block;
  margin-left: 20px;
  margin-right: 20px;
`;

export const Greeting = styled.span`
  ${subtitle1}
  color: ${highContrastDark};
`;
export const Title = styled.div`
  ${h3}
  color: ${highContrastDark};
  margin-top: 6px;
`;

export const HeadlineContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 80px;
`;

export const IntroductionText = styled.span`
  ${subtitle1}
  color: ${highContrastDark};
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 1.4px;
  max-width: 477px;
  margin: 12px 40px 0 40px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  margin: 40px 40px 0 40px;
  @media screen and (min-width: 601px) {
    width: 477px;
    > button {
      flex-grow: 1;
    }
    > button:not(:last-child) {
      border-right: none;
    }
    > button:first-child {
      border-top-left-radius: 22px;
      border-bottom-left-radius: 22px;
    }
    > button:last-child {
      border-top-right-radius: 22px;
      border-bottom-right-radius: 22px;
    }
  }

  @media screen and (max-width: 600px) {
    flex-direction: column;
    align-items: stretch;
    align-self: stretch;
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
  }
`;

export const Button = styled.button`
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
