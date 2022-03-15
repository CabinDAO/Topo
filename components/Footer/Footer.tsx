import React from "react";
import {styled} from "../../stitches.config";
import Logo from "../Logo";
import Nav, {NavLink} from "../Nav";
import Wrapper from "../Wrapper";

export interface IFooterProps {
  links?: {label: string; href: string}[];
  children?: React.ReactNode;
}

export default function Footer({links, children}: IFooterProps) {
  return (
    <Container>
      <Wrapper>
        <Content>
          <Logo size="md" color="sprout" />
          {children ? <ChildrenWrapper>{children}</ChildrenWrapper> : null}
          {links && (
            <NavContainer>
              <Nav>
                {links.map(({label, href}, i) => (
                  <NavLink href={href} key={i}>
                    {label}
                  </NavLink>
                ))}
              </Nav>
            </NavContainer>
          )}
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

const NavContainer = styled("div", {
  marginTop: "$6",
  display: "flex",
  alignItems: "center",
  flex: 2,
});
