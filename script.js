const url = "cv.json";
const repoUrl = "https://api.github.com/users/barringtonemelie/repos"; 
const loader = document.querySelector(".loader"); 
const loaderPortfolio = document.querySelector(".loader-portfolio"); 


const portfolioContainer = document.querySelector(".gallery-container"); 

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
    const response = await fetch(url);
    
    if (response.ok) {
        const dataResume = await response.json(); 
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
    const response = await fetch(url);
    
    if (response.ok) {
        const dataResume = await response.json(); 
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
    const response = await fetch(repoUrl); 
    const secondResponse = await fetch(url); 

    if (response.ok && secondResponse.ok) {
        const repos = await response.json(); 
        const projectPreview = await secondResponse.json(); 
        loaderPortfolio.style.display = "none"; 
        console.log(repos, projectPreview); 

        let i = 0; //Used to get the images from the JSON file at the same time as the repos from Github
        repos.forEach(repo => {
            let div = document.createElement("div"); 
            div.innerHTML += `<h3>${repo.name}</h3><p>${repo.description}</p><img src="${projectPreview.projectsPreview[i]}" alt="A preview of my project">`; 
            portfolioContainer.appendChild(div); 
            i++; 
        }); 
    }
    else {
        console.log("HTTP error: " + response.status + "Second response error: " + secondResponse.status); 
    }
};






