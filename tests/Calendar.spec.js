import { test, expect } from '@playwright/test';
 
test('calendar',async ({browser,page})=>
    {
 
        await page.goto('https://rahulshettyacademy.com/seleniumPractise/#/offers');
 
        const month = "6";
        const date= "12"
        const year = "2027";
        const expectedList = [month,date,year];
 
        await page.locator(".react-date-picker__wrapper").click();
 
        await page.locator(".react-calendar__navigation__label").click();
        await page.locator(".react-calendar__navigation__label").click();
        await page.locator(".react-calendar__decade-view__years").getByText(year).click();
        await page.locator(".react-calendar__year-view__months__month").nth(Number(month-1)).click();
        await page.locator(".react-calendar__month-view__days").getByText(date).click();
 
        const inputs = page.locator(".react-date-picker__inputGroup__input")
        for(let i=0;i<expectedList.length;i++){
            const value =await inputs.nth(i).inputValue();
             expect(value).toEqual(expectedList[i]);
        }
    })  