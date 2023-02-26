# HiveMQ Cloud: Take Home Assignment

*Senior Frontend Engineer - HiveMQ CLoud*

Frank McGuire - 2023

### Task Description

**Task #1: Build an MQTT WebClient with the following functionality**

You can use the wireframe in the below attachments as a guide to build out the layout, feel free to also go rogue and use your own design. To get started quickly we also added an example [mqttjs](https://github.com/mqttjs/MQTT.js/#installation) configuration to the attachments.

- As an user, I can input &lt;hostname&gt;, &lt;username&gt;, &lt;password&gt; through a form to connect to a broker instance of my choice

- As an user, I can subscribe to a &lt;topic&gt;

- As an user, I can publish a &lt;message&gt; with a &lt;topic&gt;

- As an user, I can view incoming &lt;messages&gt;

**Task #2: Create and test a dumb component**

- Write a dumb component that is able to display the given &lt;messages&gt;

- Write a test to check if the component displays the given &lt;messages&gt;

**Optional Tasks #3**

- Write a Dockerfile that contains the application build

### Frameworks and Libraries

- Nuxt 3
- TailwindCSS
- Vitest
- Typescript
- ESLint
- MQTT.js

## Setup

Make sure to install the dependencies:

```bash
# yarn
yarn install

# npm
npm install

# pnpm
pnpm install
```

## Development Server

Start the development server on 'http://localhost:3000'

```bash
npm run dev
```

## Production

Build the application for production:

```bash
npm run build
```

Locally preview production build:

```bash
npm run preview
```

Check out the [deployment documentation](https://nuxt.com/docs/getting-started/deployment) for more information.

## Testing

### Unit/Integration Testing

```bash
npm run test
````

Runs vitest unit/integration tests in a terminal window.

```bash
npm run test:coverage
````

Runs vitest unit/integration tests with test coverage report in a terminal window.

```bash
npm run test:ui
````

Runs vitest unit/integration testing dashboard in a browser window.
