"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customTest = void 0;
var test_1 = require("@playwright/test");
exports.customTest = test_1.test.extend({
    testData: {
        username: "sowmya64@gmail.com",
        password: "Sowmya@123",
        productName: "ADIDAS ORIGINAL"
    }
});
