
const students = [];


const studentForm = document.getElementById("studentForm");
const studentCountLabel = document.getElementById("studentCount");


// Handle form submission
studentForm.addEventListener("submit", function (event) {
    event.preventDefault();


    //store students input
    const student = {
        firstName: document.getElementById("firstName").value.trim(),

        middleName: document.getElementById("middleName").value.trim(),

        lastName: document.getElementById("lastName").value.trim(),
        dateOfBirth: document.getElementById("dob").value,

        phoneNumber: document.getElementById("phone").value.trim(),
        studentCourse: document.getElementById("course").value
    };

    students.push(student);

    updateStudentCount();
    studentForm.reset();

    console.log("Current Students List:", students);
});

//  Update registered student count
function updateStudentCount() {
    studentCountLabel.textContent = students.length;
}
