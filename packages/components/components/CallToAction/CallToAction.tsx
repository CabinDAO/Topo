import React from "react";
import { styled } from "../../stitches.config";
import Button from '../Button';
import Wrapper from "../Wrapper";

export interface ICallToActionProps {
  heading: string;
  primaryLink: { label: string, href: string };
  secondaryLink?: { label: string, href: string };
}

export default function CallToAction({ heading, primaryLink, secondaryLink }: ICallToActionProps) {

  return (
    <Wrapper>
      <Container>
        <h2>{heading}</h2>
        <Actions>
          <Button 
            tone="wheat" 
            as="a" 
            href={primaryLink.href}
          >
            {primaryLink.label}
          </Button>
          {secondaryLink && 
            <Button 
              tone="forest" 
              type="link"
              as="a" 
              href={secondaryLink.href}
            >
              {secondaryLink.label}
            </Button>
          }
        </Actions>
      </Container>
    </Wrapper>
  )
}

const Container = styled('div', {
  mb: '$24',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  textAlign: 'center',
  px: '$10',
  pt: '$10',
  pb: '$1',
  border: '1px solid $sprout',
  br: '$2',
  h2: {
    fontFamily: '$mono',
    fontSize: '$xxl',
    fontWeight: 600,
    lineHeight: 1.6,
    mt: '0',
  },
  '@md': {
    br: '$3',
    mb: '$32',
    py: '$12',
    h2: {
      fontSize: '$xxxl',
      maxWidth: '40rem',
    },
  },
});

const Actions = styled('div', {
  mt: '$2',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  '> *': {
    mb: '$6',
  },
  '@md': {
    flexDirection: 'row',
    '> *': {
      mb: '$0',
      ml: '$6', 
      '&:first-child': {
        ml: '$0',
      },
    },
  },
});

