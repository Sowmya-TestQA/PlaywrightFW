const ExcelJS = require('exceljs');
const { test, expect } = require('@playwright/test');


//TC 1: Search for the targeted text in a sheet and replace with other text 
//TC 2: Search for the targeted text in a sheet and update the value of other column in the same row i.e Update Mango price to 350.

async function ExcelWrite(SearchText, ReplaceText, filePath, change) {

    const workbook = new ExcelJS.Workbook();
    await workbook.xlsx.readFile(filePath);
    const worksheet = workbook.getWorksheet('Sheet1');

    const output = await ExcelRead(worksheet, SearchText);

    const cell = worksheet.getCell(output.row, output.column);
    cell.value = ReplaceText; // updates cell value
    await workbook.xlsx.writeFile(filePath); //TC1

    const cellforPrice = worksheet.getCell(output.row, output.column + change.colchange); // from the cell(column) it traverses to col+2
    cellforPrice.value = 350; // updates cell value
    await workbook.xlsx.writeFile(filePath); //TC2
}

async function ExcelRead(worksheet, SearchText) {

    let output = { row: 1, column: 1 };
    worksheet.eachRow((row, rownumber) => {
        row.eachCell((cell, colnumber) => {
            if (cell.value === SearchText) {
                output.row = rownumber;
                output.column = colnumber;
            }
        })
    })
    return output;
}


test('upload and download excel validation', async ({ page }) => {
    const SearchText = 'Mango';
    await page.goto("https://rahulshettyacademy.com/upload-download-test/index.html");
    //alerting that we will face download webelement and have to wait till complete and asking it to listen for that element
    const [download] = await Promise.all([
        page.waitForEvent("download"),
        page.locator("#downloadButton").click(),
    ]);
    const downloadPath = 'C:/Users/sowmya/Downloads/download.xlsx';
    await download.saveAs(downloadPath);

    ExcelWrite(SearchText, "Rabbit", "C:/Users/sowmya/Downloads/download.xlsx", { rowchange: 0, colchange: 2 });
    await page.waitForTimeout(3000);

    await page.locator("#fileinput").click();
    await page.locator("#fileinput").setInputFiles("C:\\Users\\sowmya\\Downloads\\download.xlsx");

    await page.waitForTimeout(3000);

    const textlocator = page.getByText(SearchText);
    const desiredRow = page.getByRole('row').filter({ has: textlocator });
    const updatevaluescreen = await desiredRow.locator("#cell-4-undefined").textContent();
    await expect(updatevaluescreen).toContainText("350");


})



