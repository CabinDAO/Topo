# Contributing to Topo
👋🏻 Welcome to Topo by CabinDAO! It's great you're here.

## Onboarding
1. Join Cabin by joining our [Discord](https://discord.com/invite/ttgRU7QKVE) and following the path laid out in the [#01-welcome-to-cabin](https://discord.com/channels/849304522500210709/936441783808851998) channel.

2. After you onboard onto Cabin, you can ask for access to our [bounty board](https://app.clarity.so/cabin/view/9849fa0e-9cd6-4805-bcce-5928bd633b07) that shows tasks we need help with. 

3. You then need to onboard into the Product Guild by following the instructions in the Product Guild [#start-here](https://discord.com/channels/849304522500210709/936372031874818168) channel.

4. Now you're ready to request bounties! Check out [#110 Write SETUP.md for Topo](https://app.clarity.so/cabin/work/110) as a possible task to take on. 

## How to Contribute
1. You need to get approved for a component/bounty by requesting it on the [bounty board](hhttps://app.clarity.so/cabin/view/b06b6487-3625-41d7-8d6e-2f7a1fd32061). Request the bounty by asking in the comments of the bounty.
2. Once approved, you can fork the repo and make a branch named after your feature for your changes. When you're done you can request to merge your branch into the main repo using a pull request.

## Using Hygen
Hygen is a tool we use for scaffolding out components. If you're creating a new component, create the component like so:
```bash
npx hygen component new --name SomeComponent
```

Hygen generates the base files for a new component. The benefits of Hygen consistency from component to component and making refactoring easier later (can use codemod).
