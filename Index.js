// Concatenate

let myCompnay = "Infinity Solution";
let members = 367;
let result = "I am working in "+myCompnay+" which have "+members+" members";
console.log(result);

// template method

const thisCompnay = "Infinity Solution";
const thismembers = 367;

let thisresult = `I am wroking ${thisCompnay} which have ${thismembers} members`;
console.log(thisresult);

// Creating html templates

let yourCompany;
let yourmembers;
let html = `
<h2>${yourCompany}</h2>
<span>${yourmembers}</span>
`
console.log(html);