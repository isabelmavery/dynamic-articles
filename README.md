# Welcome!

Hello! I'm Isabel - I had a lot of fun working on this project for you guys! If you have any questions while going through the project, or have any issues running it feel free to send me a message at [isabelmavery@gmail.com](mailto:isabelmavery@gmail.com)

## Getting the project running

Clone this repo and then open two terminals, one for the server and one for the client. `cd` into each folder.

### For the Server:

```
cd server
yarn
yarn start
```

Runs the server on
[http://localhost:8080](http://localhost:8080)

### Then, for the client:

```
cd client
yarn
yarn start
```

This runs the client on [http://localhost:3000](http://localhost:3000)

Open here to view the app in the browser. You can check network requests to be sure that the app makes a request to the server at port:8080 on mount.

### Troubleshooting:

If you are having any issues running the application, you can:

- clear node_modules and re-run `yarn` in the malfunctioning folder
- verify that you have `node` installed `node -v`

## Recap of Some Decisions Made

### Using `react-markdown`

- good reviews, library updated fairly recently
- good documentation
- very simple implementation and ready in seconds

If I were to go back and start this project over I would probably build off of an existing editor like Sourabh mentioned! I didn't realize I could until halfway through the project and at that point felt it wouldn't make sense to overhall but in the real world that would be best.

### Using `express`

- Simple and familiar to use for a small take home project

## What I implemented:

- A basic API that returns the blocks that make up an article
- A UI for Markdown blocks, and a UI for quiz blocks with some validation for correct / incorrect answers on submission. Shuffles options around for each question so correct is not always last.
- An "Edit" option for the markdown blocks, where a user can change the existing markdown text. Mock~ish PUT api to update the blocks on edit.

<img width="500" alt="image" src="https://github.com/isabelmavery/dynamic-articles/assets/22804094/e6949e94-d98b-4b0b-acd5-c8d58d6397c6">

## Some adjustments to this project that I would do with more time:

- Add nicer UI validation when the user submits their quiz rather than using the alert modal.
- More of a focus on accessibility, general accessibility is here but there are missing aria labels / more I could do a dive on.
- Potentially use a library like MUI for nice standardized components like text input, buttons and more as we add functionality / spend more time on design & UI in general
- Use styled components or scss for cleaner css

## More Add Ons that would be fun:

- Adding functionality to build up graphs and models from some server response as you can see in https://cs231n.github.io/optimization-1/
- Making sure that media is supported - images, videos etc.
- Ability to add comments (as suggested in the doc)
- Integrate error logging
- Hook up to DB or edit json files s.t. changes to markdown are permanently saved.
