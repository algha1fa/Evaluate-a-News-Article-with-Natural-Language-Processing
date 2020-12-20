# Project Instructions
The goal of this project is to give you practice with:
- Setting up Webpack
- Sass styles
- Webpack Loaders and Plugins
- Creating layouts and page design
- Service workers
- Using APIs and creating requests to external urls
- deploy the project

We will be using of Natural Language Processing API in this project. NLPs leverage machine learning and deep learning create a program that can interpret natural human speech.In this project we are using one of the API that will return the cateogry of words and theie relavance. 

`cd` into your new folder and run:
- `npm install`

This step will install all the dependencies required :
devDependencies": {
        "@babel/core": "^7.5.4",   //
        "@babel/preset-env": "^7.5.4",
        "babel-loader": "^8.0.6",
        "clean-webpack-plugin": "^3.0.0",
        "css-loader": "^5.0.1",
        "html-webpack-plugin": "^3.2.0",
        "jest": "^26.6.3",
        "node-sass": "^5.0.0",
        "sass-loader": "^10.1.0",
        "style-loader": "^2.0.0",
        "webpack-dev-server": "^3.7.2"

This will ensure that user's javascript and styles are incorporated into the final project.Pocessed indexx.html and main.js is generated on successful build.

## Setting up the API


### Step 1: Signup for an API key
First go to : https://www.meaningcloud.com/developer/login,create an account and  you will get license key.


### Step 2: Environment Variables
Next we need to declare our API keys, which will look something like this:

create a fie server\.env and write a line
API_KEY=your_license_key

Add this code to the very top of your server/index.js file:

const dotenv = require('dotenv');
dotenv.config();

console.log(`Your API key is ${process.env.API_KEY}`);


### Step 5: Using the API

API key obtained above is put into the http request to tha path mentioned as  deepcategorization-1.0 and we also pass  a sample string for which NLP will return response 

## After the MeaningCloud API

Once you are hooked up to the Meaningcloud API following is done

- Parse the response body to dynamically fill content on the page.
- Go back to the web pack config and add the setup for service workers.  
- Test that the site is now available even when you stop your local server 
- Write required testcases in __test__ folder.
	-To write test cases, install jest by npm install --save-dev jest
	-For each form create a test case fle.
	-The name of test case file should be <formname>.spec.js


## Deploying
Below shows how to deploy the project in server
-Goto https://www.heroku.com/ and register 
-create new application
-Install Git Bash
-cd to project directory
-Intialize gir repository and commit all file locally
-Push all files to remote server (reposiry path for created appilcation \ procided by heroku)


