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

        // I fixed it a little bit.

        let total = 0;
        for (let i = 0; i < FoodArray.length; i++) {
            total += FoodArray[i].calories;
        }
        document.getElementById("totalCal").value = total;
        console.log(total);
       
    });
});





