import React from "react";
import { styled } from "../../stitches.config";
import Button from '../Button';
import Wrapper from "../Wrapper";
import { ArrowRightIcon } from "@radix-ui/react-icons";

export interface IBlurbProps {
  heading: string;
  body: string;
  link?: { label: string, href: string };
}

export default function Blurb({ heading, body, link }: IBlurbProps) {
  return (
    <Container id="about">
      <Wrapper>
        <Content>
          <h2>
            {heading}
          </h2>
          <div>
            <p>{body}</p>
            {link && link.href && 
              <Button as="a" type="link" href="https://creators.mirror.xyz/-lNPJRz2GLWIcsuMTZqklGNEWRrY7Nk0Y33Qn6Lw4q4"
              leftIcon={<ArrowRightIcon />}>
                {link.label || "Learn more"}
              </Button>
            }
          </div>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled('section', {
  pt: '$10',
  pb: '$20',
  '@md': {
    pt: '$20',
    pb: '$24',
  },
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  px: '$10',
  py: '$8',
  border: '1px solid $sprout',
  br: '$2',
  h2: {
    mt: '$1',
    mb: '$0',
    fontFamily: '$mono',
    fontSize: '$xl',
    fontWeight: 600,
    lineHeight: 1.6,
    maxWidth: '28rem',
    flex: '1',
  },
  a: {
    mt: '$2',
  },
  div: {
    flex: '2',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  '@md': {
    flexDirection: 'row',
    br: '$3',
    h2: {
      fontSize: '$xxl',
      maxWidth: '40rem',
    },
  },
});