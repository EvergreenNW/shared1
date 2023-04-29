// document.addEventListener("DOMContentLoaded", function (event) {

//     document.getElementById("getResult").addEventListener("click", function() {
        
//         foodArray = [];
//         let Food = {
//             name: document.getElementById("fname").value,
//             calories: document.getElementById("numCalories").value
//         }
//         document.getElementById("fname").value = "";
//         document.getElementById("numCalories").value = "";

//         foodArray.push(Food);
//         console.log(foodArray);
//     });
// });
document.getElementById("fname").focus();

FoodArray = [];
let food1 = {
    name: "apple",
    calories: 54
}

let food2 = {
    name: "Noodle soup",
    calories: 250
}

FoodArray.push(food1, food2);

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("getResult").addEventListener("click", function() {

        let Food = function (pName, pCalories) {
            this.name = pName;
            this.calories = parseInt(pCalories);
        }
                
        let food = new Food (document.getElementById("fname").value, document.getElementById("numCalories").value);
                
        document.getElementById("fname").value = "";
        document.getElementById("numCalories").value = "";

        FoodArray.push(food);
        console.log(FoodArray);
    });
});





