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
document.getElementById("fname").select();

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("getResult").addEventListener("click", function() {

        FoodArray = [];

        let Food = function (pName, pCalories) {
            this.name = pName;
            this.calories = parseInt(pCalories);
        }
                
        let food1 = new Food ("apple", 54);
        let food2 = new Food ("Noodle soup", 325);

        let food = new Food (document.getElementById("fname").value, document.getElementById("numCalories").value);
                
        document.getElementById("fname").value = "";
        document.getElementById("numCalories").value = "";

        FoodArray.push(food1, food2, food3);
        console.log(FoodArray);
    });
});





