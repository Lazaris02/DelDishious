# DelDishious

A web application that one can browse others' recipies and upload his own!

## Programming Languages and Libraries

### Front end

- html
- tailwind css
- react.js , material UI , react-router-dom for routing

### APIs

- TheMealDB.com free Meal API

### Backend

- mongodb , copy some of the data from mealdb for illustration purposes , create REST API

## TO DOs

### General

- SOS make login , signup , individual recipes not have a nav-bar

- make design responsive - very last thing to do

- make a functional newsletter tab - use form hook , add validation for email.

- create favorites page - after server
- create addRecipe page - after server

- handle errors if the fetch from API doesn't work! - use state for errors and handle them in useEffect!
- add an error page that shows up when something is wrong! , wrong redirecting

- stop the randomization of ratings when page is refreshed! - probably possible when mongodb is created and the ratings are generated once in backend + merged with fetched data

### Home Page

- add animation to featured tab - (optional?)

### Recipes Page

- make the filters work properly (selection , error handling etc.)

### Contact Us Page

- using form hook 1. add validation 2. handle the submission of the form

### Login Page

- make the form functional //after backend setup
- add correct navigation from buttons

### Signup Page

- make the form functional //after backend
- add correct navigation from buttons

### Single Recipe Page

- using filter function , remove all undefined items so that no "undefined shows up"!

### backend

- AFS service , save the favourite list for every user.
- login , signup service
- create / manage / fetch service
- store the newsletter emails , not neccessarily bound to a user! , but still if a user inputs his email on signup checks if in newsletter list and proceeds to handle the work

### Note

- some letters in the mealdb api don't return any results!
- if the API has been terminated , just create the bare minimum for signup and login form and end the project.

### General Improvements

- make login and signup not have a nav-bar
- maybe refactor reusable parts into a seperate css file

## Things to avoid in my next web-project

- DO NOT START FROM FRONTEND , first see what data I need and make RESTful API

- anything that is reusable in the css part into a different css file from the begining

- use grid more effectively

- learn react best practices and apply from the beggining (f.e lazy loading)

- use network tools more effectively

- make the logo interactive in the html code , dont design and copy from FIGMA again

- instead of making api calls to a foreign api design the data from the start as I want it at once,
  thus avoiding the functions in utils that have to do with bringing the data in proper format.

- learn react-router dom better!
