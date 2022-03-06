import React from "react";
import { styled } from "../../stitches.config";
import Logo from "../Logo";
import Wrapper from "../Wrapper";

export interface IFooterProps {
  links?: { label: string; href: string }[];
  children?: React.ReactNode;
}

export default function Footer({ links, children }: IFooterProps) {
  const nav = (
    <Nav>
      {links &&
        links.map(
          ({ label, href }, i) =>
            label &&
            href && (
              <a href={href} key={i}>
                {label}
              </a>
            )
        )}
    </Nav>
  );

  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo size="md" color="sprout" />
          {children ? <ChildrenWrapper>{children}</ChildrenWrapper> : null}
          <Links>{nav}</Links>
        </Content>
      </Wrapper>
    </Container>
  );
}

const Container = styled("footer", {
  bc: "$forest",
  color: "$sand",
  pt: "$12",
  pb: "$6",
  "@md": {
    pb: "$8",
  },
});

const Content = styled("div", {
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

const ChildrenWrapper = styled("div", {
  marginTop: "$8",
  marginBottom: "$4",
});

const Nav = styled("div", {
  mt: "$6",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  fontFamily: "$mono",
  fontSize: "$sm",
  textTransform: "uppercase",
  a: {
    display: "flex",
    height: "$10",
    px: "$4",
    alignItems: "center",
    justifyContent: "center",
    "&:hover": {
      textDecoration: "underline",
    },
  },
  "@md": {
    flexDirection: "row",
  },
});

const Links = styled("div", {
  display: "flex",
  alignItems: "center",
  flex: 2,
});
