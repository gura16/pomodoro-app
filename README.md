# pomodoro-app

## Table of Contents

- [Prerequisites](#Prerequisites)
- [Tech Stack](#TechStack)
- [Getting Started](#GettingStarted)
- [Project Structure](#ProjectStructure)
- [Deployment](#Deployment)
- [Author](#Author)

## Prerequisites

Before you begin, ensure you have met the following requirements:

- <img src="./public/npm.png" width="25" style="top:8px" /> \_npm @ 10.5.0\_
- <img src="./public/vite.jpg" width="25" style="top:8px" /> \_vite @ 5.1.4\_
- <img src="./public/typescript.png" width="25" style="top:8px" /> \_typescript @ 5.2.2\_

## Tech Stack

- <img src="./public/react.png" width="25" style="top:8px" /> \_React @18.2.0 - front-end framework\_
- <img src="./public/styled-components.png" width="25" style="top:8px" /> \_React @18.2.0 - Styled-components @6.1.8- visual primitives for the component age\_
- <img src="./public/react-circular-progressbar.gif" width="25" style="top:8px" /> \_React Circular Bar @2.1.0 - visually represent data values in a circular or radial format\_

## Getting Started

1.First of all you need to clone app repository from github:

```bash
git clone https://github.com/gura16/pomodoro-app.git
```

2.Next step requires install all the dependencies.

```bash
npm install
```

3.To see project in action

```bash
npm run dev

```

## Project Structure
```bash
|--- src
| |--- components # reusable components
| |---|--- index.ts # export all components
| |--- pages
| |---|--- index.ts # export all pages
| |--- styled-components # all components' styles
| |---|--- components # reusable components
| |---|--- GlobalStyle
| |---|--- index.ts # export all components
| |--- vite-env.d.ts # declare all types
| |--- App.tsx # main page
-vercel.json # vercel file to make the routes work properly
-package.json # dependency manager configurations
```
## Deployment

Before every deployment you need to create build file.

```bash
npm run build

```

after this you can use this file to deploy project on server.

## Author

[My LinkedIn Profile](https://www.linkedin.com/in/gurami-kvakhadze-03b06a246/)
