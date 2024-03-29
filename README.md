# Topo

**to·pog·ra·phy**  

/təˈpäɡrəfē/  

*noun*  
the arrangement of the natural and artificial physical features of an area.  
"the topography of the island"  

## Quick Links

- [🐞 Report a Bug](https://app.clarity.so/cabin/view/b06b6487-3625-41d7-8d6e-2f7a1fd32061)
- [❓ Ask a question](https://discord.gg/4G6XjsCjM3)
- [🙋 Start contributing](https://github.com/CabinDAO/design-system/blob/main/CONTRIBUTING.md)


## Topo: The CabinDAO Design System

Welcome to Topo, CabinDAO's internal design system. We use this collection of
libraries and tools to build high-quality interfaces while maintaining brand
consistency and uniformity.

The Topo theming is built on top of [Stitches](https://stitches.dev) and includes all the primitives 
for the CabinDAO visual identity. Topo Components is our library of pre-built 
UI components using [Storybook](https://storybook.js.org/docs/react/get-started/introduction).

## Contributing

This project is open source and we would love for you to contribute to it. In
our [discord server](https://discord.gg/4G6XjsCjM3), there is a channel dedicated to discussing this 
product. Progress, milestones, and on-going initiatives are tracked
[on our Bounty board in Clarity](https://app.clarity.so/cabin/view/b06b6487-3625-41d7-8d6e-2f7a1fd32061).

If you would like to contribute, start by reading the [Contribution Guide](./CONTRIBUTING.md) 
and the [Code of Conduct](./CONDUCT.md) . Open issues can be found in this repository.

## Setup: Getting Started

*Follow these instructions to setup and use Topo in a Next.js project.*

1. Install Topo:

```sh
yarn add @cabindao/topo
```

2. Set up server-side rendering:

```js
// _document.tsx
import React from "react";
import NextDocument, { Html, Head, Main, NextScript } from "next/document";
import { getCssText } from "@cabindao/topo";

export default class Document extends NextDocument {
  render() {
    return (
      <Html lang="en">
        <Head>
          <style
            id="stitches"
            // https://stitches.dev/docs/server-side-rendering
            dangerouslySetInnerHTML={{ __html: getCssText() }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
```

3. Set up global css:

```ts
// _app.tsx
import { globalCss } from "@cabindao/topo";
import type { AppProps } from "next/app";

const globalStyles = globalCss({
  body: {
    backgroundColor: "$sand",
  },
  "html, body": {
    padding: 0,
    margin: 0,
    fontFamily: "$sans",
  },
  a: {
    color: "inherit",
    textDecoration: "none",
  },
  "*": {
    boxSizing: "border-box",
  },
    <ClerkProvider>
});

function MyApp({ Component, pageProps }: AppProps) {
  globalStyles();
  return (
    <Component {...pageProps} />
  );
}
```

You should be good to go now. You can install components from Topo or Stitches
into your project.

## Contributing

1. Fork the Topo repository into your Github account.
2. Clone the forked repo to your local system.
3. Navigate to the newly created project directory.
4. `yarn` or `npm i` will install the Topo package's dependencies.
5. `yarn storybook` will run Storybook locally so that you could interact with our components directly.

---

**[Cabin](https://www.creatorcabins.com)** is a digitally-native organization 
(often called a DAO) building a decentralized city by creators, for creators. 
You can learn more about us by [visiting our website](https://www.creatorcabins.com) or [joining our Discord server](https://discord.gg/4G6XjsCjM3).

We look forward to creating with you!
