var person = {
  firstName: 'Sophia',
  lastName: 'Lee',
  hobby: 'reading'
};

console.log(person);

var fullName = person.firstName + ' ' + person.lastName;
console.log("The person's name is: " + fullName);

person.job = 'Student';
console.log("The person's current job is: " + person.job);

person.previousJob = 'Customer Service';
console.log("The person's previous job is: " + person.previousJob);

console.log(person);
