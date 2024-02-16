# Welcome!

Hello! I'm Isabel - this is a small project that I worked on to build out some dynamic articles that can be edited with markdown, and support quiz questions with validation. In the future it could be expanded to be prettier and have more functionality, but this was a fun start!

![DynamicArticles_Shortened-ezgif com-video-to-gif-converter](https://github.com/isabelmavery/dynamic-articles/assets/22804094/95c56ada-30b4-4176-840b-b467e220967e)



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

## Recap of Some Decisions Made

### Using `react-markdown`

- good reviews, library updated fairly recently
- good documentation
- very simple implementation and ready in seconds

If I were to go back and start this project over I would probably build off of an existing editor!

## What is here:

- A basic API that returns the blocks that make up an article
- A UI for Markdown blocks, and a UI for quiz blocks with some validation for correct / incorrect answers on submission. Shuffles options around for each question so correct is not always last.
- An "Edit" option for the markdown blocks, where a user can change the existing markdown text. Mock~ish PUT api to update the blocks on edit.

<img width="500" alt="image" src="https://github.com/isabelmavery/dynamic-articles/assets/22804094/e6cb9efe-1bc4-4c10-8100-98be399b1ab5">

## Some things at I would like to add to this project:

- [ ] Nicer UI validation, integrate with MUI
- [ ] Use styled components or scss for cleaner css
- [ ] Support other card types like graphs
- [ ] Hook up to DB
