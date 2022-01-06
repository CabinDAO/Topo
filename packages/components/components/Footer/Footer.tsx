import React from "react";
import { styled } from "../../stitches.config";
import Wrapper from "../Wrapper";

export default function Footer() {
  const nav = (
    <Nav>
      <a target="_blank" rel="noreferrer" href="https://app.clarity.so/%E2%82%A1ABIN">
        Wiki
      </a>
      <a target="_blank" rel="noreferrer" href="https://creators.mirror.xyz/">
        Mirror
      </a>
      <a target="_blank" rel="noreferrer" href="https://discord.gg/N6hVmFygjR">
        Discord
      </a>
      <a target="_blank" rel="noreferrer" href="https://snapshot.org/#/cabindao.eth">
        Snapshot
      </a>
      <a target="_blank" rel="noreferrer" href="https://github.com/CabinDAO">
        Github
      </a>
      <a target="_blank" rel="noreferrer" href="https://twitter.com/creatorcabins">
        Twitter
      </a>  
      <a target="_blank" rel="noreferrer" href="https://www.instagram.com/creatorcabins/">
        Instagram
      </a>  
    </Nav>
  ); 

  return (
    <Container>
      <Wrapper>
        <Content>
          <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fillRule="evenodd" clipRule="evenodd" d="M0 17.4L24 0L48 17.4V48H26.933V40.7965H37.1997L23.9997 10.8001L10.7997 40.7965H21.0663V48H0V17.4ZM21.0663 48V48.0001H26.933V48H21.0663Z" fill="#00FF47"/>
          </svg>
          <Links>
            {nav}
          </Links>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled('footer', {
  bc: '$forest',
  color: '$sand',
  pt: '$12',
  pb: '$6',
  '@md': {
    pb: '$8',
  },
});

const Content = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
});

const Nav = styled('div', {
  mt: '$6',
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  fontFamily: '$mono',
  fontSize: '$sm',
  textTransform: 'uppercase',
  a: {
    display: 'flex',
    height: '$10',
    px: '$4',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': { 
      textDecoration: 'underline',
    },
  },
  '@md': {
    flexDirection: 'row',
  },
});

const Links = styled('div', {
  display: 'flex',
  alignItems: 'center',
  flex: 2,
});