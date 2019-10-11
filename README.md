# React firebase example app

## Steps:

### Create new reactjs app

`npm create-react-app reactjs-firebase-demo`

OR

`yarn create react-app reactjs-firebase-demo`

### Change into the new app folder

`cd react-js-firebase-demo`

### Start the server

`npm start`

### Open browser at `https://firebase.google.com`

### If you do not have an account with google create one for use as STUDENT only

### Go to the console and create a new project called `XXX-c4prog-2019s2-mad-rfd`

### You may turn off analytics

### Click on database, create new database using __test mode__, __australia-southeast1__ server

### Create a collection, click on start collection, collection ID = boards

### Add the fields: author, description and title (all strings)

#### Note: run `yarn add firebase --save` on terminal

### Create a file called `Firebase.js` under the `src` folder

### Write this code to the file:

```js
import * as firebase from 'firebase';
import firestore from 'firebase/firestore';

const settings = { timestampsInSnapshots: true };

const firebaseConfig = {
    apiKey: "AIzaSyAFGuwyJ0QY7vsHObj4ErwC6p740jfceR0",
    authDomain: "c4prog-2019s2-mad-rfd.firebaseapp.com",
    databaseURL: "https://c4prog-2019s2-mad-rfd.firebaseio.com",
    projectId: "c4prog-2019s2-mad-rfd",
    storageBucket: "c4prog-2019s2-mad-rfd.appspot.com",
    messagingSenderId: "662441940991",
    appId: "1:662441940991:web:2efcb26bc01437385479ca"
};

firebase.initializeApp(firebaseConfig);

firebase.firestore().settings(settings);

export default firebase;
```

### Replace the CAPITALISED_PARAMS with the correct information

#### Note: To get the `config` params, go to `Settings` (on the right-hand side of `Project Overview`) and click on the `Web` icon

### Create `src/components` folder

### Create `Show.js`, `Create.js` and `Edit.js` files

### Note: if the debugger says that it cannot find `babel/index.js`, run `yarn add babel-loader @babel/core @babel/preset-env`