import { chromium } from '@playwright/test';
let jsonparse = `[
  {
    "sowmya": "123"
  },
  {
    "shan": "73"
  },
  {
    "anbu": "543"
  }
]`;
let result = [];
let data = JSON.parse(jsonparse); //Parses json string to JS object
for(let obj of data){ // for of loop to get the object from the array
    for(let key in obj){ //for in loop to get the key value pair of the object
      result.push({name : key, Id : obj[key]});

    }
}
console.log(JSON.stringify(result,null,2)); //converts js obj to json

  const browser = await chromium.launch();
   const context = await browser.newContext();
   const cookies = context.cookies();