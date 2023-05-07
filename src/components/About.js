import React from 'react';
import "bootstrap/dist/css/bootstrap.css";

function About() {
  
  return (
    <>
    <div class="shadow-sm card justify-content-left p-1 mb-4">
      <div class="card-body"> <br></br>
        <h1 class="card-title">Weight and Age Tracking App</h1> <br></br>
            <p class="card-text">
                This project was done as part of the second and third assignments for the Full-stack course at Laurea University of Applied Sciences. 
                This app is developed using React, Bootstrap, and CSS. Mongoose was used in DB queries in the second project. The Render support hosting service link&nbsp;
                 <a href="https://dashboard.render.com/web/srv-cglk5g1euhlpidere7t0" class="link-opacity-75-hover">here</a>.
            </p>
                <br></br>
            <p class="card-text">
                This application can be used in the healthcare or fitness sectors to track a person current weight and age.
                <br></br>
                The person page gives the list of persons with their name, weight and age. One can search the person list by entering a name in the form field.
            </p>
                <br></br>
            <p class="card-text">
                When the person name is clicked, it shows the person's name, weight and age. One can edit the person's information by pressing the edit button.
                <br></br>
                When the edit button is pressed the page leads to the edit page where the person's information can be changed or deleted.
                <br></br>
                One can add a new person by going to the add page, where one can enter name, weight and age and save the person's information. 
            </p>
            <br></br>
      <div class='d-flex flex-row justify-content-left p-1 mb-4'>
          <h4>GitHub</h4>&nbsp;&nbsp;&nbsp; <a class="link-opacity-75-hover" href="https://github.com/viktoriyamik">
            <svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" fill="currentColor" class="bi bi-github" viewBox="0 0 16 16">
            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z"/>
            </svg></a>
        </div>
    </div>
    </div>
  </>
  )
}

export default About