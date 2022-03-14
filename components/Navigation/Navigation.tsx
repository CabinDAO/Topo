import React, {useState} from "react";
import {styled} from "../../stitches.config";
import {HamburgerMenuIcon, Cross1Icon} from "@radix-ui/react-icons";
import Button from "../Button";
import Wrapper from "../Wrapper";
import Nav, {NavLink} from "../Nav";

export interface INavigationProps {
  links?: {label: string; href: string}[];
}

export default function Navigation({links}: INavigationProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const nav = links ? (
    <Nav>
      {links.map(({label, href}, i) => (
        <NavLink href={href} key={i}>
          {label}
        </NavLink>
      ))}
    </Nav>
  ) : null;

  const joinButton = (
    <Button tone="wheat" as="a" href="https://discord.gg/N6hVmFygjR">
      Join the community
    </Button>
  );

  const toggle = (
    <MenuToggle onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
      {mobileMenuOpen ? <Cross1Icon /> : <HamburgerMenuIcon />}
    </MenuToggle>
  );

  const mobileNav = (
    <MobileNav>
      <Container>
        <Wordmark>
          <a href="/">Cabin</a>
        </Wordmark>
        {toggle}
      </Container>
      <MobileMenu open={mobileMenuOpen}>
        {nav}
        {joinButton}
      </MobileMenu>
    </MobileNav>
  );

  const desktopNav = (
    <DesktopNav>
      <Container>
        <Wordmark>
          <a href="/">Cabin</a>
        </Wordmark>
        {links && <Links>{nav}</Links>}
        {joinButton}
      </Container>
    </DesktopNav>
  );

  return (
    <Bar>
      <Wrapper>
        {mobileNav}
        {desktopNav}
      </Wrapper>
    </Bar>
  );
}

const Bar = styled("header", {
  display: "flex",
  alignItems: "center",
  backgroundColor: "$sand",
  borderBottom: "1px solid $sprout",
  "@md": {
    border: "none",
  },
});

const MobileNav = styled("nav", {
  display: "flex",
  flexDirection: "column",
  "@md": {
    display: "none",
  },
});

const DesktopNav = styled("div", {
  display: "none",
  "@md": {
    display: "flex",
  },
});

const Container = styled("div", {
  height: "4rem",
  width: "100%",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  "@md": {
    height: "$20",
  },
});

const Wordmark = styled("div", {
  fontSize: "$xxl",
  m: "0",
  a: {
    color: "inherit",
    textDecoration: "none",
    fontFamily: "$sans",
    fontWeight: 600,
  },
  "@md": {
    fontSize: "$xxxl",
    justifyContent: "center",
  },
});

const Links = styled("div", {
  display: "flex",
  alignItems: "center",
});

const MenuToggle = styled("button", {
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "$10",
  width: "$10",
  border: "none",
  background: "none",
  svg: {
    height: "$6",
    width: "$6",
    color: "$forest",
  },
  "@md": {
    display: "none",
  },
});

const MobileMenu = styled("div", {
  display: "none",
  flexDirection: "column",
  alignItems: "center",
  mb: "$6",
  variants: {
    open: {
      true: {
        display: "flex",
      },
    },
  },
});
