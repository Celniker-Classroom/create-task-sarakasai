//list
let grades = []; 

document.getElementById("add-btn").addEventListener("click", function() {
    
    let grade = document.getElementById("grade-dropdown").value;
    let weighted = document.getElementById("weighted-checkbox").checked;
    
    grades.push({
        letterGrade: grade,
        weighted: weighted
    });
    
    let outputList = document.getElementById("grades-display");
    
    let displayWithWGrade = grade;
    if (weighted) {
        displayWithWGrade = displayWithWGrade + " (Weighted)";
    }
    
    outputList.innerHTML = outputList.innerHTML + "<li>" + displayWithWGrade + "</li>";
    
    document.getElementById("weighted-checkbox").checked = false;
});

//calculate + display GPA
document.getElementById("calc-btn").addEventListener("click", function() {
    
    let calculatedGPA = calcGPA(grades);
    document.getElementById("gpa-result").innerHTML = calculatedGPA.toFixed(2);
});

function calcGPA(list) {
    
    // 0 if list is empty
    if (list.length === 0) {
        return 0;
    }

    let totalPoints = 0; 
    
    // letter to number gpa
    for (let i = 0; i < list.length; i++) {
        
        let letter = list[i].letterGrade;
        let weighted = list[i].weighted;
        let currentClassPoints = 0;
        
        if (letter === "A") {
            currentClassPoints = 4;
        } else if (letter === "B") {
            currentClassPoints = 3;
        } else if (letter === "C") {
            currentClassPoints = 2;
        } else if (letter === "D") {
            currentClassPoints = 1;
        } else {
            currentClassPoints = 0; 
        }
        
        if (weighted === true && currentClassPoints >= 2) {
            currentClassPoints = currentClassPoints + 1;
        }
        
        totalPoints = totalPoints + currentClassPoints;
    }
    
    // Calculate and return average
    let finalAverage = totalPoints / list.length;
    return finalAverage;
}