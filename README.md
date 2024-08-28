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

- make design responsive - very last thing to do
- create login page //TODO
- create signup page //TODO

- style individual recipe page //TODO
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

### backend

- AFS service , save the favourite list for every user.
- login , signup service
- create / manage / fetch service
- store the newsletter emails , not neccessarily bound to a user! , but still if a user inputs his email on signup checks if in newsletter list and proceeds to handle the work

### Note

- some letters in the mealdb api don't return any results!
- if the API has been terminated , just create the bare minimum for signup and login form and end the project.
