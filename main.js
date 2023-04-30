document.getElementById("fname").focus(); // cursor is in the first textbox

FoodArray = []; // empty array is created

// the first object
let food1 = {
    name: "apple",
    calories: 54
}
// puting the data from the object to the table
document.getElementById("food1").innerHTML = food1.name;
document.getElementById("cal1").innerHTML = food1.calories;

//2nd object
let food2 = {
    name: "Noodle soup",
    calories: 250
}

document.getElementById("food2").innerHTML = food2.name;
document.getElementById("cal2").innerHTML = food2.calories;

// put 2 objects in to the array
FoodArray.push(food1, food2);

document.addEventListener("DOMContentLoaded", function (event) {

    document.getElementById("getResult").addEventListener("click", function() {
        // creating the constructor of new objects which the user will input
        let Food = function (pName, pCalories) {
            this.name = pName;
            this.calories = parseInt(pCalories);
        }
                
        let food = new Food (document.getElementById("fname").value, document.getElementById("numCalories").value);
                
        document.getElementById("fname").value = "";
        document.getElementById("numCalories").value = "";

        // putting the new user's object in to the array
        FoodArray.push(food);
        console.log(FoodArray);

        // total calories calc
        let total = 0;
        for (let i = 0; i < FoodArray.length; i++) {
            total += FoodArray[i].calories;
        }
        document.getElementById("totalCal").value = total; //total calories display in the textbox
        console.log(total);

        // adding the new row in the table and putting users input in there
        let table = document.getElementById("tableResult");
        let row = table.insertRow(-1);
        let cell1 = row.insertCell(0);
        let cell2 = row.insertCell(1);
        cell1.innerHTML = food.name;
        cell2.innerHTML = food.calories
       
    });
});





