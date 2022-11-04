const url = "cv.json"; 
const loader = document.querySelector(".loader"); 

async function getWorkExperience() {
    let response = await fetch(url);
    
    if (response.ok) {
        let dataWorkExperience = await response.json(); 
        console.log(dataWorkExperience); 
        loader.style.display = "none"; 
    }
    else {
        console.log("HTTP error: " + response.status); 
    }
}

getWorkExperience(); 