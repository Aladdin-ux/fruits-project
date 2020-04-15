//the main array
const fruits = [['oranges', 2], ['apples', 5], ['cherries', 7], ['mango', 4]];


//function for diplaying fruits in the DOM
function getFruits() {
    //saving the element in a var
    var fruitDOM = '.myFruitDiv';
    var numbersDOM = '.myNumbersDiv';

    //saving the HTML in a var
    var myFruitHtml = '<div class="text-center h3 mb-4 border rounded border-success mychild"> %the fruit name% </div>';
    var myNumberHtml = '<div class="text-center h3 mb-4 border rounded border-danger mychild-2">%the number of fruits%</div>'


    //loop through each element of the array
    for (let i = 0; i < fruits.length; i++) {

        for (let j = 0; j < fruits[i].length; j++) {

            //selecting the first element
            if (j === 0) {
                console.log('here');
                var newHtml = myFruitHtml.replace('%the fruit name%', fruits[i][j])
                document.querySelector(fruitDOM).insertAdjacentHTML("beforeend", newHtml);

            }
            //selecting the second element
            else if (j === 1) {
                var newHtml = myNumberHtml.replace('%the number of fruits%', fruits[i][j])
                document.querySelector(numbersDOM).insertAdjacentHTML("beforeend", newHtml);
            }
        }
    }
}

//the get count button
document.querySelector('.myBtn').addEventListener('click', function () {
    var getCountVal = document.querySelector('.getCountText').value;

    for (let i = 0; i < fruits.length; i++) {

        if (getCountVal === fruits[i][0]) {
            document.querySelector('#getCount').innerText = fruits[i][1];
        }
    }
})

//the add fruit button
document.querySelector('.addFruit').addEventListener('click', function () {

    //var for saving the name of the fruit
    var getfruitsName = document.querySelector('.getFruitsName').value;

    //var for saving the number of the fruits
    var getFruitsNumber = document.querySelector('.getFruitsNumber').value;

    //adding the new element for the fruits array
    fruits.push([getfruitsName, getFruitsNumber]);

    //clear the html
    document.querySelector('.myFruitDiv').innerHTML = '';
    document.querySelector('.myNumbersDiv').innerHTML = '';

    //reCall the getfruits()
    getFruits()
})

//initializing the program
getFruits();



