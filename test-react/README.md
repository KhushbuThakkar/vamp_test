## About

ReactJS + Redux to get campaigns data and show it to user

- [ReactJS APP](https://khushbuthakkar.github.io/vamp_test/)

## technical details of project

- React + Redux to get data from the APIs
- axios to call apis
- rebass for styling
- styled components
- emotion for theming
- react-test-renderer and jest for testing purposes

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### Deployment

`heroku git:remote -a vamp-react`
from root repository
`git subtree push --prefix test-react heroku master`
