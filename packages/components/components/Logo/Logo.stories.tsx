import React from "react";
import { Meta } from "@storybook/react/types-6-0";

import Logo, { BrandLogo } from "./";
import { styled } from "../../stitches.config";

const Container = styled("div", {
  padding: 40,
  display: "flex",
  flexDirection: "row",
  gap: 30,
  alignItems: "center",
  justifyContent: "center",
  flexWrap: "wrap",
  "& > *": {
    flex: "1 0 30%",
    minWidth: "max-content",
  },
});

const LightContainer = styled(Container, {
  color: "$forest",
});

const DarkContainer = styled(Container, {
  backgroundColor: "$forest",
  color: "$sand",
});

export default {
  title: "Components/Logo",
  component: Logo,
  argTypes: {},
  args: {},
} as Meta;

export const CabinBrandLogo = () => (
  <div>
    <DarkContainer css={{ "& > *": { flex: "1 0 40%" } }}>
      <BrandLogo color="sand" />
      <BrandLogo color="sand" direction="vertical" />
    </DarkContainer>
    <LightContainer css={{ "& > *": { flex: "1 0 49%" } }}>
      <BrandLogo color="forest" size="xl" />
      <BrandLogo color="forest" direction="vertical" size="xl" />

      <BrandLogo color="forest" size="lg" />
      <BrandLogo color="forest" direction="vertical" size="lg" />

      <BrandLogo color="forest" size="md" />
      <BrandLogo color="forest" direction="vertical" size="md" />

      <BrandLogo color="forest" size="sm" />
      <BrandLogo color="forest" direction="vertical" size="sm" />
    </LightContainer>
  </div>
);

export const Logomark = () => (
  <div>
    <DarkContainer>
      <Logo variant="logomark" size="xl" color="sand" />
      <Logo variant="logomark" size="xl" color="sprout" />
      <Logo variant="logomark" size="xl" color="wheat" />

      <Logo box variant="logomark" size="xl" color="sand" />
      <Logo box variant="logomark" size="xl" color="sprout" />
      <Logo box variant="logomark" size="xl" color="wheat" />
    </DarkContainer>
    <LightContainer>
      <Logo variant="logomark" size="xl" />
      <Logo variant="logomark" size="xl" color="sprout" />
      <Logo variant="logomark" size="xl" color="wheat" />

      <Logo box variant="logomark" size="xl" />
      <Logo box variant="logomark" size="xl" color="sprout" />
      <Logo box variant="logomark" size="xl" color="wheat" />

      <Logo variant="logomark" />
      <Logo variant="logomark" color="sprout" />
      <Logo variant="logomark" color="wheat" />

      <Logo box variant="logomark" />
      <Logo box variant="logomark" color="sprout" />
      <Logo box variant="logomark" color="wheat" />

      <Logo variant="logomark" size="md" />
      <Logo variant="logomark" size="md" color="sprout" />
      <Logo variant="logomark" size="md" color="wheat" />

      <Logo box variant="logomark" size="md" />
      <Logo box variant="logomark" size="md" color="sprout" />
      <Logo box variant="logomark" size="md" color="wheat" />

      <Logo variant="logomark" size="sm" />
      <Logo variant="logomark" size="sm" color="sprout" />
      <Logo variant="logomark" size="sm" color="wheat" />

      <Logo box variant="logomark" size="sm" />
      <Logo box variant="logomark" size="sm" color="sprout" />
      <Logo box variant="logomark" size="sm" color="wheat" />
    </LightContainer>
  </div>
);

export const Wordmark = () => (
  <div>
    <DarkContainer>
      <Logo variant="wordmark" />
      <Logo variant="wordmark" color="sprout" />
      <Logo variant="wordmark" color="wheat" />
    </DarkContainer>
    <LightContainer>
      <Logo variant="wordmark" size="sm" />
      <Logo variant="wordmark" size="sm" color="sprout" />
      <Logo variant="wordmark" size="sm" color="wheat" />

      <Logo variant="wordmark" size="md" />
      <Logo variant="wordmark" size="md" color="sprout" />
      <Logo variant="wordmark" size="md" color="wheat" />

      <Logo variant="wordmark" size="lg" />
      <Logo variant="wordmark" size="lg" color="sprout" />
      <Logo variant="wordmark" size="lg" color="wheat" />

      <Logo variant="wordmark" size="xl" />
      <Logo variant="wordmark" size="xl" color="sprout" />
      <Logo variant="wordmark" size="xl" color="wheat" />
    </LightContainer>
  </div>
);

export const TokenLogo = () => (
  <div>
    <DarkContainer>
      <Logo variant="token" color="sand" />
      <Logo variant="token" color="sprout" />
      <Logo variant="token" color="wheat" />
    </DarkContainer>
    <LightContainer>
      <Logo variant="token" size="sm" />
      <Logo variant="token" size="sm" color="sprout" />
      <Logo variant="token" size="sm" color="wheat" />

      <Logo variant="token" size="md" />
      <Logo variant="token" size="md" color="sprout" />
      <Logo variant="token" size="md" color="wheat" />

      <Logo variant="token" size="lg" />
      <Logo variant="token" size="lg" color="sprout" />
      <Logo variant="token" size="lg" color="wheat" />

      <Logo variant="token" size="xl" />
      <Logo variant="token" size="xl" color="sprout" />
      <Logo variant="token" size="xl" color="wheat" />
    </LightContainer>
  </div>
);
