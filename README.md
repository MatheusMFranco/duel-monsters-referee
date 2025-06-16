# Duel Monsters Referee

Duel Monsters Referee is a web application built with Ionic and Angular designed to assist players in managing and refereeing card games matches. The app provides tools for scorekeeping, rule reference, and match management, making tournaments and casual games easier to organize and follow.

## Features

- Score tracking for both players.
- Rulebook reference.
- Match timer and history.
- User-friendly interface for mobile and desktop.

## Project Structure

- **Frontend:** Ionic + Angular
- **Testing:** Cypress (with Mochawesome reports)
- **Containerization:** Docker (development and production ready)

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v20+ recommended)
- [npm](https://www.npmjs.com/)
- [Docker](https://www.docker.com/products/docker-desktop/) (optional, for containerization)

### Install Dependencies

```bash
npm install
```

### Development Server

To run the app locally with live reload:

```bash
npm start
```

The app will be available at [http://localhost:4200](http://localhost:4200).

### Running with Docker (Development)

Build and run the development container:

```bash
npm run docker:dev:build
npm run docker:dev:run
```

Access at [http://localhost:4200](http://localhost:4200).

### Running with Docker (Production)

Build and run the production container:

```bash
npm run docker:build
npm run docker:run
```

Access at [http://localhost](http://localhost).

### Running Tests

To run Cypress tests:

```bash
npm run test
```

To generate Mochawesome reports:

```bash
npm run report
```

## Project Configuration

- **Cypress configuration:** See `cypress.json` for test and report settings.
- **Docker:** Two Dockerfiles are provided:
  - `Dockerfile.dev` for development (live reload)
  - `Dockerfile` for production (served with Nginx)

## Deployment

For production deployments (e.g., AWS Lightsail), use the production Docker image or serve the contents of the `dist/` folder with Nginx.

---

**Author:** Ionic