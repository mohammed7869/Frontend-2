/** @format */

let arr = [
  { id: 1, name: "john", age: "18", marks: 80 },
  { id: 2, name: "jack", age: "20", marks: 85 },
  { id: 3, name: "karen", age: "19", marks: 35 },
];

function PrintStudentswithMap() {
  students.map(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });


PrintStudentbyMap();

}

function PrintStudentsbyForEach() {
  
  students.forEach(student => {
    if (student.marks > 50) {
      console.log(student);
    }
  });


PrintStudentbyForEach();

}

function addData() {
  
  const newStudent = {id:4, name:"susan", age:"20", marks:45};
  students.push(newStudent);
  console.log(newStudent);
}

addData();


function removeFailedStudent() {
  
  students.forEach((student, index) => {
    if (student.marks < 50) {
      students.splice(index, 1);
    }
  });
  console.log(students);
}

removeFailedStudent();

}

function concatenateArray() {

function ConcatenateArray() {
  const concatenatedArray = students.concat(newStudents);
  console.log(concatenatedArray);
}

ConcatenateArray();

}
