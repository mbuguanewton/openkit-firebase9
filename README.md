# OpenKit Task

### The task is as follows:

---

You are to build a simple todo-list React app using redux. This project will require you to build a front-end user interface as you see fit that will allow you to do the following functions:
Add a new item to the list
Delete an item from the list
Update an existing item

This project will also be connected to a firebase backend. This will require setting up a firebase project and linking the React frontend to a firestore database. There will be a save button that will save the items in the database. These saved items would then be loaded in from the database when opening the React application.

## Requirements

-   Firebase
-   Nodejs
-   React

## My dependencies

-   React
-   ReactDOM
-   @chakra-ui/react - uses styled components via emotion
-   @reduxjs/toolkit
-   react-icons
-   react-error-boundary
-   sass
-   formik
-   yup
-   vite

## How to run the project

clone the repo from github

```bash
git clone  https://github.com/mbuguanewton/openkit-firebase9.git
```

Go into the project folder.

```bash
cd openkit-firebase9
```

Install dependencies

```bash
npm install
```

Add a .env file to the project folder.

```bash
touch .env
```

Add the firebase config properties as follows

```bash
VITE_FIRE_API_KEY=''
VITE_FIRE_AUTH_DOMAIN=''
VITE_FIRE_DB_URL=''
VITE_FIRE_PROJECT_ID=''
VITE_FIRE_STORAGE_BUCKET=''
VITE_FIRE_MSG_SENDER_ID=''
VITE_FIRE_APP_ID=''
```

Run the project

```bash
npm run dev
```

This will open the project in your browser http://localhost:3000

The project uses [vitejs](https://vitejs.dev) as a tool to generate the template. I have a default template the i use for all my vanilla react projects and i made use of it for the task. [My template on github](https://github.com/mbuguanewton/fe-template-with-vitejs.git)

The template has chakra ui, sass, react-router-dom, content-api provider and the file structure already configured.

### Public folder
This folder contains all our static files such as assets, images, favicons.

### Scripts folder
This folder contains all our scripts which are bash executables.In the folder is a git script with commands for an initial

```bash
./scripts/git.sh initial
```

And another one for all other commits.
    
```bash
./scripts/git.sh push
```

> Happy coding 😄
