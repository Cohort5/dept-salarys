var fs = require("fs");  //file system module
// Step 1. Create all single-d and multid-d arrays AS empty arrays (iniatially)
    //push single string data/elements into an array as a single element
    //push array data into an array to form multi-d arrays
    
//single-d arrays
var departmentId = []; //done
var departments = [];  // done

//multi-d arrays -- currently invalid
var employeeId = [];
var employeeName = [];
var salaries = [];

// process "dept_names.txt" file - keep "my code" it stupid simple
fs.readFile('dept_names.txt', 'utf8' , function(err, data) {
    if (err) throw err;
    
    // console.log(data);
    
var deptDataClean = data.replace(/INSERT INTO `departments` VALUES /g, "");
var deptDataArray = deptDataClean.split('\n');

//populate single-d arrays with DATA
for (var i = 0; i < deptDataArray.length; i++) {
    departmentId.push(deptDataArray[i].slice(2, 6));
    departments.push(deptDataArray[i].slice(9, -3)); 
    
    //populate multi-d arrays with empty sub-arrays(NO DATA) using .push 
    employeeId.push([]);
    employeeName.push([]);
    salaries.push([]);
    
}
console.log(departmentId);
console.log(departments);
console.log(employeeId);
console.log(employeeName);
console.log(salaries);
    
});

// process "dept_emp.txt" file - keep it "my code" stupid simple
fs.readFile('dept_emp.txt', 'utf8' , function(err, data) {
    if (err) throw err;
    
    var employeeDataClean = data.replace(/INSERT INTO `dept_emp` VALUES - id, dept, 9999/g, "");
    var employeeDataArray = employeeDataClean.split('\n');
    
    console.log(employeeDataArray);
    
    
    for (var i = 0; i < employeeDataArray.length; i++) {
        if (employeeDataArray[i].slice(28, 34) == '9999') {
            
            // console.log(employeeDataArray[i].slice(8, 12));
            // console.log(employeeDataArray[i].slice(1, 6));
            
    //         employeeId[departmentId.indexOf(employeeDataArray[i].slice(8, 12)].push(employeeDataArray[i].slice(1, 6));
    //         //index of the dept [0, 1, 2, 3,]
    //     }
        
    // }
    
    // console.log(employeeId);
    
// });

// process "employee.txt" file - keep it "my code" stupid simple
fs.readFile('employee.txt', 'utf8' , function(err, data) {
    if (err) throw err;
    
    var employeeDataClean = data.replace(/INSERT INTO `employees` VALUES - id, last name, first name /g, "");
    var employeeNameDataArray = employeeDataClean.split('\n');
    
    console.log(employeeNameDataArray);
    
    
    for (var i = 0; i < employeeDataArray.length; i++) {
        if (employeeDataArray[i].slice(28, 32) == '9999') {
            
            console.log(employeeDataArray[i].slice(8, 12));
            console.log(employeeDataArray[i].slice(1, 6));
            
            employeeName[departmentId.indexOf(employeeDataArray[i].slice(8, 12))].push(employeeDataArray[i].slice(1, 6));
            //index of the dept [0, 1, 2, 3,]
        }
        
    };