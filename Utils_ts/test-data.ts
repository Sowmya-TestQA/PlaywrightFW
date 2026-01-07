import { test as baseTest } from '@playwright/test';
interface TestData {
    username: string;
    password: string;
    productName : string;
}
export const customTest = baseTest.extend<{ testData: TestData }>({
    testData: {
    username: "sowmya64@gmail.com",
    password: "Sowmya@123",
    productName : "ADIDAS ORIGINAL"
}}


)