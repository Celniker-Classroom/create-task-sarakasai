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