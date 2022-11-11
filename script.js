const url = "cv.json";
const repoUrl = "https://api.github.com/users/barringtonemelie/repos"; 
const loader = document.querySelector(".loader"); 

//Also, event delegation, event.target.getAttribute() (custom property) och spara till variabel för att se vad som tryckted på,
//istället för att ha eventlistener för varenda element
//Annat tips: custom properties i HTML för att ge användaren möjlighet att klicka på saker, tex se mer om din skola eller så 
const workCards = document.querySelectorAll(".cards-hidden"); 
const workTitle = document.querySelectorAll(".work-title"); 
const workYears = document.querySelectorAll(".work-years"); 
const workDescription = document.querySelectorAll(".work-description"); 

const eduCards = document.querySelectorAll(".edu-cards-hidden"); 
const eduTitle = document.querySelectorAll(".edu-title"); 
const eduYears = document.querySelectorAll(".edu-year"); 
const eduDescription = document.querySelectorAll(".edu-description"); 

const path = window.location.pathname; 

if (path === "/experience.html" || path === "/cv-sida-med-javascript/experience.html") {
    getWorkResume();
}
else if (path === "/education.html" || path === "/cv-sida-med-javascript/education.html") {
    getEducationResume(); 
}
else if (path === "/portfolio.html" || path === "/cv-sida-med-javascript/portfolio.html") {
    getRepos(); 
}

async function getWorkResume() {
    let response = await fetch(url);
    
    if (response.ok) {
        let dataResume = await response.json(); 
        loader.style.display = "none"; 
        
        for (let i = 0; i < dataResume.work.length; i++) {
            workTitle[i].innerHTML += dataResume.work[i].title;
            
            workYears[i].innerHTML += dataResume.work[i].year;

            workDescription[i].innerHTML += dataResume.work[i].description;

        }

        workCards.forEach(card => {
            card.classList.toggle("cards-hidden"); 
        });

    }
    else {
        console.log("HTTP error: " + response.status); 
    }
}

async function getEducationResume () {
    let response = await fetch(url);
    
    if (response.ok) {
        let dataResume = await response.json(); 
        loader.style.display = "none"; 
        for (let i = 0; i < dataResume.education.length; i++) {
            eduTitle[i].innerHTML += dataResume.education[i].type;
            
            eduYears[i].innerHTML += dataResume.education[i].year;

            eduDescription[i].innerHTML += dataResume.education[i].school;

        }

        eduCards.forEach(card => {
            card.classList.toggle("edu-cards-hidden");
        });
    }
    else {
        console.log("HTTP error: " + response.status); 
    }
}

async function getRepos() {
    let response = await fetch(repoUrl); 
    if (response.ok) {
        let repos = await response.json(); 
        console.log(repos); 
    }
    else {
        console.log("HTTP error: " + response.status); 
    }
};

getRepos(); 





