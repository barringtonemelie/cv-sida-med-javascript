const url = "cv.json"; 
const loader = document.querySelector(".loader"); 

//Also, event delegation, event.target.getAttribute() (custom property) och spara till variabel för att se vad som tryckted på,
//istället för att ha eventlistener för varenda element
//Annat tips: custom properties i HTML för att ge användaren möjlighet att klicka på saker, tex se mer om din skola eller så 
const workCards = document.querySelectorAll(".cards-hidden"); 
const workTitle = document.querySelectorAll(".work-title"); 
const workYears = document.querySelectorAll(".work-years"); 
const workDescription = document.querySelectorAll(".work-description"); 

async function getWorkExperience() {
    let response = await fetch(url);
    
    if (response.ok) {
        let dataResume = await response.json(); 
        loader.style.display = "none"; 
        
        for (let i = 0; i < dataResume.work.length; i++) {
            console.log(dataResume.work[i]); 
            console.log(workTitle[i]); 
        }
        // workCards.forEach(card => {
        //     console.log(card); 
        //     card.classList.toggle("cards-hidden"); 
        // }); 
    }
    else {
        console.log("HTTP error: " + response.status); 
    }
}

getWorkExperience(); 