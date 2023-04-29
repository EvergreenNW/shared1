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

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("getResult").addEventListener("click", function() {

        let Food = function (pName, pCalories) {
            this.name = pName;
            this.calories = pCalories;
        }
                
        let food1 = new Food ("apple", 54);
        let food2 = new Food ("Noodle soup", 325);

        let food3 = new Food (document.getElementById("fname").value, document.getElementById("numCalories").value);          
        document.getElementById("fname").value = "";
        document.getElementById("numCalories").value = "";
        console.log(Food);
    });
});





