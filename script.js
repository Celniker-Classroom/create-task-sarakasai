//list
let grades = []; 

//grade dropdown
document.getElementById("add-btn").addEventListener("click", function() {
    
    let grade = document.getElementById("grade-dropdown").value;
    grades.push(grade);
    
    let outputList = document.getElementById("grades-display");
    outputList.innerHTML = outputList.innerHTML + "<li>" + grade + "</li>";
});
//calculate + display GPA
document.getElementById("calc-btn").addEventListener("click", function() {
    
    let calculatedGPA = calcGPA(grades);
    document.getElementById("gpa-result").innerHTML = calculatedGPA;
});

function calcGPA(list) {
    
    // 0 if list is empty
    if (list.length === 0) {
        return 0;
    }

    let totalPoints = 0; 
    
    // letter to number gpa
    for (let i = 0; i < list.length; i++) {
        
        let letter = list[i];
        
        if (letter === "A") {
            totalPoints = totalPoints + 4;
        } else if (letter === "B") {
            totalPoints = totalPoints + 3;
        } else if (letter === "C") {
            totalPoints = totalPoints + 2;
        } else if (letter === "D") {
            totalPoints = totalPoints + 1;
        } else {
            totalPoints = totalPoints + 0; 
        }
    }
    
    // Calculate and return average
    let finalAverage = totalPoints / list.length;
    return finalAverage;
}