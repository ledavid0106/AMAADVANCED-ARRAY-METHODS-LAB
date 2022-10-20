
//The purpose of this Lab is to get a solid understanding of the .filter() and .map() advanced array methods.
//These methods will be used extensively on future projects


//Dataset
let dishes = [
    {
        "id": 1,
        "name": "Pizza",
        "cuisine": "Italian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 2,
        "name": "Spaghetti",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 3,
        "name": "Ravioli",
        "cuisine": "Italian",
        "servings": 2,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 4,
        "name": "Enchiladas",
        "cuisine": "Mexican",
        "servings": 6,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 5,
        "name": "Tacos",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 6,
        "name": "Burrito Supreme",
        "cuisine": "Mexican",
        "servings": 1,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 7,
        "name": "Elote",
        "cuisine": "Mexican",
        "servings": 4,
        "ingredients": ["corn", "cheese"]
    },
    {
        "id": 8,
        "name": "Crepes",
        "cuisine": "French",
        "servings": 1,
        "ingredients": ["flour", "sugar"]
    },
    {
        "id": 9,
        "name": "Corned Beef & Cabbage",
        "cuisine": "Irish",
        "servings": 10,
        "ingredients": ["beef", "cabbage"]
    },
    {
        "id": 10,
        "name": "Beef Stew",
        "cuisine": "Irish",
        "servings": 8,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 11,
        "name": "Lasagna",
        "cuisine": "Vegetarian",
        "servings": 8,
        "ingredients": ["tomato", "cheese"]
    },
    {
        "id": 12,
        "name": "Falafel",
        "cuisine": "Vegetarian",
        "servings": 1,
        "ingredients": ["chickpea", "parsley"]
    },
    {
        "id": 13,
        "name": "Chili",
        "cuisine": "Vegetarian",
        "servings": 13,
        "ingredients": ["tomato", "chickpea"]
    },
    {
        "id": 14,
        "name": "Goulash",
        "cuisine": "Hungarian",
        "servings": 15,
        "ingredients": ["beef", "tomato"]
    },
    {
        "id": 15,
        "name": "Pho",
        "cuisine": "Vietnamese",
        "servings": 4,
        "ingredients": ["beef", "ginger"]
    },
]

//Example function
//IMPORTANT: Take the time to step through this example function with a breakpoint until you could explain what is going on to someone else before starting this lab.

// function filterExample(){
//     //Debug tip: Use a console.log(el) inside the filter function to get a visualization of what el represents and see all its properties! This helps you to know what you can access with dot notation inside the filter. Do this every time you use a .filter or else you are working in the dark!
//     let results;
//     results = dishes.filter(function(el){
//         // console.log("el inside filterExample's filter: ", el)
//         if(el.cuisine === "Mexican"){
//             return true;
//         }
//         else{
//             return false;
//         }})

//     return results;
// }

// let mexicanFood = filterExample();
// console.log('mexicanFood from filterExample', mexicanFood)



//Reminder: Do not move on to problem one until understand the example completely!!
//1. Create a function that will return all dishes with the cuisine type of "vegetarian"
//Filter

function problemOne(){

    let results;
    results = dishes.filter(function(veg){
        if(veg.cuisine === "Vegetarian"){
            return true;
        } else {
            return false;
        }
    })
    return results;
}

console.log("Vegetarian food", problemOne())
//2. Create a function that will prompt the user to enter a cuisine type and then return all dishes that match that type
//Filter
function cuisineType(){
    let type = prompt("What cuisine type would you like to see?");
    let results;
    results = dishes.filter(function(types){
        if(types.cuisine === type){
            return true;
        } else {
            return false;
        }
    })
    return results;
}
// console.log(`Desired Cuisine Type`,cuisineType())

//3. Create a function that will return all dishes with the cuisine type of "Italian" and a serving size greater than 5.
//Filter
function Italian(){

    let results;
    results = dishes.filter(function(Italian){
        if(Italian.cuisine === "Italian" && Italian.servings > 5){
            return true;
        } else {
            return false;
        }
    })
    return results;
}
console.log("Italian food with servings more than 5", Italian())

//4. Create a function that will return only dishes whose id number matches their serving count.
//Filter

function matchingID(){

    let results;
    results = dishes.filter(function(matching){
        if(matching.id == matching.servings){
            return true;
        } else {
            return false;
        }
    })
    return results;
}
console.log("Matching ID with Servings", matchingID())

//5. Create a function that will return only dishes whose serving count is even.
//Filter

function evenServings(){

    let results;
    results = dishes.filter(function(even){
        if((even.servings % 2) == 0 ){
            return true;
        } else {
            return false;
        }
    })
    return results;
}
console.log("Even Serving Count ", evenServings())


//6. Create a function that will return dishes whose ingredients array INCLUDES "chickpea".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Double Hint: Research 'javascript does array include item'
//Filter

function includes(){

    let results;
    results = dishes.filter(function(include){
        if(include.ingredients.includes("chickpea")){
            return true;
        } else {
            return false;
        }
    })
    return results;
}
console.log("Includes Chickpeas", includes())

//7. Create a function that will prompt the user to type the name of one ingredient. Then use a filter to find all the dishes whose ingredients array INCLUDES that ingredient. Return the new array.
//Filter

function desiredIngredient(){
    desired = prompt("What ingredient would you like to see?")
    let results;
    results = dishes.filter(function(include){
        if(include.ingredients.includes(desired)){
            return true;
        } else {
            return false;
        }
    })
    return results;
}
// console.log("Includes desired ingredient", desiredIngredient())


//8a. Create a function that will return an array of the string cuisine types. Ie, ["Italian", "Italian", "Mexican", ...]
//Map

function cuisines(){
    return dishes.map(type=>type.cuisine)
} 

console.log("Cuisine Array", cuisines())



const newnewarray = dishes.map(type=>type.cuisine)
console.log("Cuisine Array 2", newnewarray)
//9. Create a function that will return an array of strings, with the cuisine type appended to the start of the dish's name. Ie, ["Italian Pizza", "Italian Spaghetti", ...]
//Map 

function cuisinesAndName(){
    return dishes.map(type=> type.cuisine + " " + type.name)
} 

console.log("Cuisine with name",cuisinesAndName())

//10. Create a function that will use advanced array methods on the 'dishes' array and return the result ["Vegetarian Lasagna", "Vegetarian Falafel", "Vegetarian Chili"]


function advance(){
    let results;
    results = dishes.filter(function(veg){
        if(veg.cuisine.includes("Vegetarian")){
            return true;
        }
    })
    return results.map(veg=>veg.cuisine + " " + veg.name)
}
console.log("Includes only Vegetarian and name",advance())

//BONUS

//8b. Use the filter method to eliminate duplicate from problem 8a.

function removeDuplicates(arr) {
    return arr.filter((cuisine,
        index) => arr.indexOf(cuisine) === index);
}
console.log("Removing Duplicate",removeDuplicates(newnewarray))


//11. Create a function that will return dishes whose ingredients array INCLUDES "tomato" OR "cheese".
//Hint: You do not want to check the array's indexes to find out what the array INCLUDES.
//Filter
function ingredientIncludes(){
    let results;
    results = dishes.filter(function(include){
        if(include.ingredients.includes("tomato" || "cheese")) {
            return true;
        }
    })
    return results
}

console.log("Ingredient Includes Cheese or Tomato",ingredientIncludes())
//12. Create a function that will return the total serving count of all dishes.
//Must use Reduce, not a loop.
function getSum(){
    const sumarray = dishes.map(type=>type.servings)
    const sum = sumarray.reduce((previous, current) => previous + current) 
    return sum;
}

console.log("Total Serving Count", getSum())
//13. Create a function that will return an array of any objects that do not share a cuisine type with any other objects.

// let objects = dishes.map(function(t){
//     return t.cuisine}).filter(function (e,i,a) {
//         return a.indexOf(e) === i
//     })

let testing = dishes.map(t=>t.cuisine);
console.log(testing)

function idkyet(arr) {
    return arr.filter((cuisine,
        index) => arr.indexOf(cuisine) !== index);
}
console.log("teste",idkyet(testing))

let aple = idkyet(testing)

// function tester(){
//         {
//         let result;
//         result = testing.filter(function(idk){
//             if(testing.includes(x)){
//                 return false;
//             } else {
//                 return true;
//             }
//         })    
//         return result
//     }
// }

console.log(aple[0])
// trash = []
// for (let i = 0; i < aple.length; i++) {
//     const tree = aple[i];
//     result = testing.filter((item) => !item.includes(tree))
// }
// trash.push(result)
// console.log(result)
// result5 = testing.filter(aple.every(o=>testing.includes(o)))
// result1 = testing.filter((item) => !item.includes(aple[0],aple[3]))
// console.log(result5)


// result = testing.filter((item) => !item.includes(aple[i]));
// console.log(result)

// function help(){
//     let results;
//     for (let i = 0; i < aple.length; i++) {
//     results = testing.filter(function(include){
//         if(!testing.includes(aple[i])) {
//             return true;
//         }
//     })
//     }
//     return results
// }

// function tester(){
//     let results;
//     for (let i = 0; i < aple.length; i++) {
//         if(testing.filter(e => !e.includes(aple[i]))) {
//             return true;
//         }
//     }
//     return results
// }
// console.log(help())
// includes
// filter