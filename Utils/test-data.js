const base = require('@playwright/test');


exports.customisedTest = base.test.extend({
    testData: {
    username: "sowmya64@gmail.com",
    password: "Sowmya@123",
    productName : "ADIDAS ORIGINAL"
}}


)