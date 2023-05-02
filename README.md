Weight and age care tracking App </br>

This project was done while doing the second and third assignments for the Full-stack course at Laurea University of Applied Sciences. </br>

This app is developed using React, Bootstrap, and CSS. Mongoose was used in DB queries in the second project. The Render supports hosting service. </br>

The Weight and age care tracking App displays Person information from REST API that hosted on the Render. API has 5 routes: GET, GET:id, POST, PATCH and DELETE. </br> 

Link: </br>

GitHub </br>
https://github.com/viktoriyamik/Project2-Node.js-site-REST-API.git </br>

Render </br>
GET: https://project2-node-js-site-rest-api.onrender.com/api/getall </br>
GET:id : https://project2-node-js-site-rest-api.onrender.com/api/:id </br>
POST: https://project2-node-js-site-rest-api.onrender.com/api/add </br>
PATCH: https://project2-node-js-site-rest-api.onrender.com/api/update/:id </br>
DELETE: https://project2-node-js-site-rest-api.onrender.com/api/delete/:id </br>

## About the App </br>
- Each Person has id, name, weight, age. </br>
- One can create, fetch, update, and delete Person information. </br>

Person page gives the list of Persons with Name, Weight and Age.</br>
One can search the person list by entering name in the form field.</br>

When Person name is clicked, it shows Person name, Weight and Age. One can Edit the person info by pressing Edit button. </br>
When the Edit button is pressed the page leads to Edit page where person info can be changed, or the person can be deleted. </br>

One can Add new person by going to Add page, where one can enter Name, Weight and Age and save the person info. </br>

## The App use case </br>
This application can be used in healthcare sector or in some fitness area to track a person current weight and age. </br>

### Set port </br>
.env
```
PORT=8081
```

## Project setup 

In the project directory run:
npm install node

### To start
npm run-script start
npm start

Open http://localhost:8081 to view it in the browser.
Change port in .env file