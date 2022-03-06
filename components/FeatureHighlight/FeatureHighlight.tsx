import React from "react";
import { styled } from "../../stitches.config";
import Button from '../Button';
import { ArrowRightIcon } from "@radix-ui/react-icons";
import Wrapper from "../Wrapper";

export interface IFeatureHighlightProps {
  heading: string;
  body: string;
  link?: { label: string, href: string };
  BackgroundImageComponent?: (
    props: React.ImgHTMLAttributes<HTMLImageElement>
  ) => React.ReactElement;
  ImageComponent: (
    props: React.ImgHTMLAttributes<HTMLImageElement>
  ) => React.ReactElement;
  reversed?: boolean;
}

export default function FeatureHighlight({ 
  heading,
  body,
  link,
  BackgroundImageComponent,
  ImageComponent,
  reversed = false,
}: IFeatureHighlightProps) 
{
  return (
    <Container>
      {BackgroundImageComponent && <BackgroundImageComponent className="background-image" />}
      <Wrapper>
        <Content reversed={reversed}>
          <Text reversed={reversed}>
            <h2>{heading}</h2>
            <p>{body}</p>
            {link && link.href && 
              <Button as="a" type="link" href="https://creators.mirror.xyz/-lNPJRz2GLWIcsuMTZqklGNEWRrY7Nk0Y33Qn6Lw4q4"
              leftIcon={<ArrowRightIcon />}>
                {link.label || "Learn more"}
              </Button>
            }
          </Text>
          <Frame>
            <ImageComponent className="image" />
          </Frame>
        </Content>
      </Wrapper>
    </Container>
  )
}

const Container = styled('section', {
  position: 'relative',
  bc: '$forest',
  '& > span > img': {
    filter: 'grayscale(0.75) contrast(0.75) brightness(0.25)',
  },
  '&:after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    background: '$forest',
    opacity: '0.50',
  },
  '& img.background-image': {
    position: "absolute",
    inset: "0px",
    boxSizing: "border-box",
    padding: "0px",
    border: "none",
    margin: "auto",
    display: "block",
    width: "0px",
    height: "0px",
    minWidth: "100%",
    maxWidth: "100%",
    minHeight: "100%",
    maxHeight: "100%",
    objectFit: "cover"
  },
});

const Content = styled('div', {
  position: 'relative',
  zIndex: '$1',
  color: '$sand',
  py: '$20',
  display: 'flex',
  flexDirection: 'column-reverse',
  h2: {
    fontSize: '$xxl',
    fontFamily: '$mono',
    fontWeight: '$600',
  },
  p: {
    lineHeight: 1.6,
    marginBottom: 0,
  },
  a: {
    mt: '$2',
  },
  '@md': {
    py: '$32',
    flexDirection: 'row',
    alignItems: 'center',
    '> div': {
      width: '50%',
    },
    h2: {
      fontSize: '$xxxl',
    },
  },
  variants: { 
    reversed: {
      true : {
        '@md': {
          flexDirection: 'row-reverse',
        },
      },
    },
  },
});

const Text = styled('div', {
  mt: '$12',
  textAlign: 'center',
  '@md': {
    mt: '0',
    pr: '$20',
    textAlign: 'start',
  },
  variants: { 
    reversed: {
      true : {
        '@md': {
          pr: '0',
          pl: '$20',
        },
      },
    },
  },
});

const Frame = styled('div', {
  br: '$2',
  boxShadow: '0 0 0 $sizes$px $colors$sprout',
  overflow: 'hidden',
  lineHeight: '0',
  bc: '$forest',
  '@md': {
    br: '$3',
  },
  '& img.image': {
    objectFit: 'cover',
  },
});

