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
    studentCourse: document.getElementById("course").value,
  };

  // phone number validation
  if (isNaN(student.phoneNumber) || student.phoneNumber.length !== 10) {
    alert("Enter a valid 10-digit phone number");
    return;
  }

  if (!student.firstName || !student.lastName) {
    alert("First and Last name are required");
    return;
  }

  const dob = new Date(student.dateOfBirth);
  const today = new Date();

  if (dob > today) {
    alert("Date of birth cannot be in the future");
    return;
  }

  students.push(student);

  updateStudentCount();
  studentForm.reset();

  console.log("Current Students List:", students);
});

//  Update registered student count
function updateStudentCount() {
  studentCountLabel.textContent = students.length;
}
