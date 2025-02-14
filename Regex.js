function dataextraction(txt, pattern) {
    if (typeof txt !== 'string') {
        return ["error: input is not a string"];
    }
    return txt.match(pattern) || [];
} //for extracting the data and returns an array of matches. If no matches are found, it returns an error

let emailextraction = /[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g;
let urlextraction = /https?:\/\/(www\.)?[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}([\/\w.-]*)*/g;
let phoneextraction = /\(?\d{3}\)?[ -.]?\d{3}[ -.]?\d{3}[ -.]?\d{3}/g
let creditCardextraction = /\d{4}[- ]?\d{4}[- ]?\d{4}[- ]?\d{4}/g;
let timeextraction= /\b(?:\d{1,2}:\d{2}(?:\s?[APap][Mm])?|\d{1,2}:\d{2})\b/g;

module.exports = { dataextraction, emailextraction, urlextraction, phoneextraction, creditCardextraction, timeextraction };
