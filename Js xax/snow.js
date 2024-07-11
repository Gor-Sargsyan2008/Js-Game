class snow {
    constructor(x, y, index) {
        this.x = x;
        this.y = y;
        this.energy = 13;
        this.index = index;
        this.directions = [];
    }
    getNewCoordinates() {
        this.directions = [
            [this.x - 1, this.y - 1],
            [this.x, this.y - 1],
            [this.x + 1, this.y - 1],
            [this.x - 1, this.y],
            [this.x + 1, this.y],
            [this.x - 1, this.y + 1],
            [this.x, this.y + 1],
            [this.x + 1, this.y + 1]
        ];
    }


    chooseCell(character) {
        this.getNewCoordinates();
        var found = [];
        for (var i in this.directions) {
            var x = this.directions[i][0];
            var y = this.directions[i][1];
            if (x >= 0 && x < matrix[0].length && y >= 0 && y < matrix.length) {
                if (matrix[y][x] == character) {
                    found.push(this.directions[i]);
                }
            }
        }
        return found;
    }


    mul() {
        var newCell = random(this.chooseCell(1));
        if (newCell) {
            var newsnow = new snow(newCell[0], newCell[1], this.index);
            snowArr.push(newsnow);
            matrix[newCell[1]][newCell[0]] = 5;
        }
    }
    eat() {
        let foods = this.chooseCell(1)
        let food = random(foods)
        if (food) {
            let newX = food[0]
            let newY = food[1]
            matrix[newY][newX] = 5
            
            for (var i in snowArr) {
                if (newX == snowArr[i].x && newY == snowArr[i].y) {
                    snowArr.splice(i, 1);
                    break;
                }
            }

        }
        else {
            this.move()
        }
    }


    move() {
        
        let emptyCells = this.chooseCell(0)
        let newCell = random(emptyCells)
        if (newCell) {
            let newX = newCell[0]
            let newY = newCell[1]
            matrix[this.y][this.x] = 0
            matrix[newY][newX] = 4
            this.x = newX
            this.y = newY
        }

        if (this.energy <= 0) {
            this.die()
        }
    }

    die() {
        matrix[this.y][this.x] = 0;
        for (var i in snowArr) {
            if (this.x == snowArr[i].x && this.y == snowArr[i].y) {
                snowArr.splice(i, 1);
                break;
            }
        }
    }
}