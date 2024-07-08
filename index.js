let express = require('express');
let app = express();
let port = 3000;
app.listen(port,() => {
  console.log(`Server is listening in http://localhost:${port}`);
})

//1
let ages1 = [25, 30, 18, 22, 27];
function sortAgesAscending(age1, age2) {
  return age1 - age2;
}
app.get('/ages/sort-ascending', (req, res) => {
  let ageCopy = ages1.slice();
  ageCopy.sort(sortAgesAscending);
  res.json(ageCopy);
});
//ages/sort-ascending

//2
let ages2 = [25, 30, 18, 22, 27];
function sortAgesDescending(age1, age2) {
  return age2 - age1;
}
app.get('/ages/sort-descending', (req, res) => {
  let ageCopy = ages2.slice();
  ageCopy.sort(sortAgesDescending);
  res.json(ageCopy);
});
//ages/sort-descending

//3
let students = [
  {name: "Rahul", rollNo: 101, marks: 85},
  {name: "Sita", rollNo: 102, marks: 95},
  {name: "Amit", rollNo: 103, marks: 70}
];
function sortStudentsByMarksDescending(student1, student2) {
  return student2.marks - student1.marks;
}
app.get('/students/sort-by-marks-descending', (req, res) => {
  let studentsCopy = students.slice();
  studentsCopy.sort(sortStudentsByMarksDescending);
  res.json(studentsCopy);
});
//sort-by-marks-descending

//4
let cars = [
  {make: "Hyundai", model: "i20", mileage: 18},
  {make: "Maruti", model: "Swift", mileage: 15},
  {make: "Tata", model: "Nexon", mileage: 20},
];
function sortCarsByMileageDescending(car1, car2) {
  return car2.mileage - car1.mileage;
}
app.get('/cars/sort-by-mileage-descending', (req, res) => {
  let carsCopy = cars.slice();
  carsCopy.sort(sortCarsByMileageDescending);
  res.json(carsCopy);
});
///cars/sort-by-mileage-descending
