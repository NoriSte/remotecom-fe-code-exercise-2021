# Frontend code exercise

Hello there!

If you're reading this, it means you're now at the coding exercise step of the engineering hiring process WOOT WOOT. We're really happy that you made it here and super appreciative of your time!

In this exercise you're asked to implement some features in an existing React app, using whatever extra tools you want.

If you have any questions, don't hesitate to reach out directly to paulo@remote.com.

## Expectations

- It should be production-ready code - the code will show us how you ship things to production and be a mirror of your craft.
- Take whatever time you need - we won't look at start/end dates, you have a life besides this and we respect that!

## About the challenge

This challenge is divided into 2 parts:

1. **🚀 Feature implementation** in an existing React project (this one).
2. **👀 Code Review** another feature in the same project.

### 🚀 1. Feature implementation

This is a basic CRUD (without the delete) of people. You'll implement the "People list" page:

- Display a table with a list of people and their attributes.
- Searching by name.
- Filtering by employment type.
- Links to the pages to add or edit a team member. You do NOT need to implement those pages.

You can use any extra tools you need to accomplish this. We want to respect your time and there's no need to reinvent the wheel.

For further notes, follow the design specs in the Figma file shared with you by e-mail.

#### What we will look at

- How you work with HTML, CSS, and JavaScript in a React app;
- How you reproduce the provided design;
- How you structure your codebase and how well it reads;
- How well it works;
- How you write tests.

#### What you can't use

- A CSS library like Bootstrap, etc. - we're interested in how you structure your CSS code to achieve something.

#### When you're done

- Complete the "Implementation Details" section at the bottom of this README.
- Open a Pull Request in this repo and send the link to paulo@remote.com.
- You can also send some feedback about this exercise. Was it too short/big? Boring? Let us know!

### 👀 2. Code Review

There's an open Pull Request called "Add/Edit a team member" (`to-review` branch).

This PR implements the "Add Team Member" and the "Edit Team Member" pages. Imagine that this was done by one of your teammates, who is an intern, and you were tasked with reviewing their code.

Your goal is to:
- Check if the feature is working as expected
- Point out code smells, poor practices or bugs
- Give suggestions on how to approach them differently

Note: don’t take the choices on tools/approaches used in this PR as guidance when doing the part 1 of the exercise. It’s likely, and totally okay, if the tools/approaches are different.

---

# The project

## Prerequisites

- Node >= 8.10
- NPM >= 5.6
- Git

## Getting started

1. Clone the project repository
2. Install the dependencies `npm install`

## About the project

- This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
- [JSON server](https://github.com/typicode/json-server) will give you a fake but realistic REST API using the static `src/server/db.json` file created after running `npm install`. If you make POST, PUT, PATCH or DELETE requests, changes will be automatically saved to `db.json`.

### Project stack

- React (Create React App)
- CSS with Styled-Components
- Tests with React Testing Library

### Project structure

```bash
src/
  components # Some components already built.
  server # The fake API mentioned above.
  theme # Some base styles used across the project.
  Playground.js # A simple showcase of the existing components.
```

Once again, you have **total freedom to modify** this codebase and use whatever tools you want.

## Available scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

[JSON server](https://github.com/typicode/json-server) will run concurrently in watch mode on port 4002 - [http://localhost:4002](http://localhost:4002).

### `npm test`

Launches the test runner in the interactive watch mode.\
Read the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run seed-db`

Resets `db.json` to the original initial data (`db.base.json`).\
This script runs automatically after `npm install`.

## Available endpoints

- `GET http://localhost:4002/people`: get the full list of people
- `GET http://localhost:4002/people?name_like={substring}`: search for people where the name includes `{substring}`
- `GET http://localhost:4002/people?employment={string}`: search for people where the employment type matches `string`
- `GET http://localhost:4002/people?name_like={substring}&employment={string}`: search for people by name and employment type
- `GET http://localhost:4002/people/{id}`: get the person with id `{id}`
- `POST http://localhost:4002/people`: create a new person
- `PATCH http://localhost:4002/people/{id}`: update the person with id `{id}`

---

## Implementation details

*This section is for you to fill in with any decisions you made that may be relevant. You can also change this README to fit your needs.*

The most relevant details are related to:

- **XState**: I think XState could be a superior tool in documenting and modeling what an app does, pushing scalability to the next level. I need to check and validate my hypothesis, and this project became part of my experimenting path. Since I want to avoid being the sole champion of this learning journey and I think spreading knowledge is crucial, I documented as much as possible what the machine does and the design decisions I took in [#9](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/9). FYI: at the same time, I drove an internal XState Working Group.\
\
The only downside of using XState is that you can't fully evaluate how I would have composed a similar Finite State Machine with pure React Hooks. Please take a look at some of the internal React-Hooks-related rules I spread among the team in [this article of mine](https://dev.to/noriste/routemanager-ui-coding-patterns-react-hooks-4f7l).

- **JSDoc**: In my opinion, TypeScript is amazingly helpful for a Developer nowadays. I'm not speaking only about type-safety but also about:
  - the overall experience offered by modern IDEs (auto-validation, auto-complete, etc.)
  - the great TypeScript' type-inference
  - the documenting potential through discriminated unions

  Anyway, in a real-life scenario, I would not convert a codebase to TypeScript before talking with the team (and with a non-merged PR created by an intern). That's why I took the best of both the TS and JS worlds by using JSDoc and `@type-check` starting from [#8](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/8).

- **Cypress**: the codebase already includes Jest, but I also introduced Cypress to have long-lasting and better documented (since they are visual) tests in [#7](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/7). Something the whole Product (not only Engineers) could benefit.
## How to read the project

First of all, you should read the issue I created before started coding:

1. My doubts about the Design Specs and how I proceed with that unknowns (see [#2](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/issues/2))

Then, it would be best if you read [all the PRs I created, in chronological order](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pulls), that are:

2. The `SearchField` component (see [#3](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/3))
3. The `Filter` component (see [#4](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/4))
4. The missing `Button` styles (see [#5](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/5))
5. The `Link` component (see [#6](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/6))
6. People list: the functional tests (see [#7](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/7))
7. JSDoc, the domain types, and the `fetchPeople` service (see [#8](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/8))
8. The people Finite State Machine (see [#9](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/9))
9. A slight fix to the table (see [#10](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/10))
10.  The `currency` utilities  (see [#11](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/11))
11. People List: success state  (see [#12](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/12))
12. People List: fetching, no-results, and error states  (see [#13](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/13))
13. People List: connecting the list to the machine (see [#14](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/14))
14. People List: the filters (see [#15](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/15))
15. People List: the header  (see [#16](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/16))
16. People List: final PR, including a video (see [#17](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/17))

***Please note**: I piled every PR on the previous one, something I usually to ease the reader and to tell "a story" of the code. Every PR contains just a bunch of files and a long description. During the challenge, I fixed multiple times the PRs to improve the storytelling, that's why every PR includes a lot of force pushes.*

Last but not least:

17. The code review: in a real-life scenario, I would add some of the feedback i reported there in a company-wide Wiki, to ease other interns and save time to other Senior Engineers (see [#1](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/1))


### PRs by topics

If you prefer navigating the PRs by topic, skipping the minor ones, here is a quick reference

| Are you interested in...? | Take a look at...                                                                                                                                                                                                         |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| CSS                       | [#3](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/3)                                                                                                                                                   |
| JSX                       | [#14](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/14)                                                                                                                                                 |
| React hooks               | [#14](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/14), [#17](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/17)                                                                      |
| Tests                     | [#7](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/7), [#9](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/9)                                                                          |
| XState                    | [#9](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/9)                                                                                                                                                   |
| Design decisions          | [#9](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/9), [#3](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/3), [#8](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/8) |
| Proactivity               | [#2](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/issues/2)                                                                                                                                                 |
| Mentoring                 | [#1](https://github.com/NoriSte/remotecom-fe-code-exercise-2021/pull/1)                                                                                                                                                   |
