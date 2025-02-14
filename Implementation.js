const { dataextraction, emailextraction, urlextraction, phoneextraction, creditCardextraction, timeextraction } = require('./Regex');
const sampletext = require('./sample');

console.log("Email: ", dataextraction(sampletext, emailextraction));
console.log("URLs: ", dataextraction(sampletext, urlextraction));
console.log("PhoneNo: ", dataextraction(sampletext, phoneextraction));
console.log("Credit_Cards: ", dataextraction(sampletext, creditCardextraction));
console.log("Time: ", dataextraction(sampletext, timeextraction))
