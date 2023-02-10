const groceryList = Object.freeze([
    Object.freeze({ "item": "carrots", "haveIngredient": false }),
    Object.freeze({ "item": "onions", "haveIngredient": true }),
    Object.freeze({ "item": "celery", "haveIngredient": false }),
    Object.freeze({ "item": "cremini mushrooms", "haveIngredient": false }),
    Object.freeze({ "item": "butter", "haveIngredient": true })
]);

groceryList[0].item = "Test Item" // now this should error
console.table(groceryList)
groceryList.push({}) // expect an error because of freeze