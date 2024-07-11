var matrix = [];
var side = 60;
var n = 15;
var m = 18;

for (let i = 0; i < n; i++) {
    matrix.push([])
    for (let j = 0; j < m; j++) {
        matrix[i].push(0)
    }
}
function characters(index, count) {
    for (let a = 0; a < count; a++) {
        var v = Math.floor(random(0, n))
        var w = Math.floor(random(0, m))
        matrix[v][w] = index;
    }
}



let grassArr = []
let grassEaterArr = []
let PredatorArr = []
let snowArr = []
let flowerArr = []

function setup() {
    characters(1, 12)
    characters(2, 20)
    characters(3, 5)
    characters(4, 20)
    characters(5, 15)


    frameRate(5);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
            if (matrix[y][x] == 1) {
                let grass = new Grass(x, y, 1)
                grassArr.push(grass)
            }
            else if (matrix[y][x] == 2) {
                let grassEater = new GrassEater(x, y, 2)
                grassEaterArr.push(grassEater)
            }

            else if (matrix[y][x] == 3) {
                let predatorNew = new Predator(x, y, 3)
                PredatorArr.push(predatorNew)
            }
            else if (matrix[y][x] == 4) {
                let snowNew = new snow(x, y, 3)
                snowArr.push(snowNew)
            }
            else if (matrix[y][x] == 5) {
                let flowerNew = new flower(x, y, 3)
                flowerArr.push(flowerNew)
            }


        }

    }


}


function draw() {
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {

            if (matrix[y][x] == 1) {
                fill("green");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("white");
            }
            else if (matrix[y][x] == 5) {
                fill("purple");
            }


            rect(x * side, y * side, side, side);


            

        }
    }
    for (let i in grassArr) {
        grassArr[i].mul()
    }
    for (let i in grassEaterArr) {

        grassEaterArr[i].eat()
    }
    for (let i in PredatorArr) {
        PredatorArr[i].eat()
    }
    for (let i in snowArr) {
        snowArr[i].eat()
    }
    for (let i in flowerArr) {
        flowerArr[i].mul()
    }
}