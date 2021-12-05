/* Simple function */
function add(a: number, b: number): number {
    return a + b;
}
const sum = add(4, 6);


/* Functions that can return another function */
function CreateAdder(a: number): (number) => number {
    return function (b: number) {
        return a + b;
    }
}

const addFour = CreateAdder(4);
const fourPlus6 = addFour(6);

/* Function with optional params */
function fullName(firstName: string, lastName?: string): string {
    return `${firstName} ${lastName}`;
}

const luis = fullName('Renato');


/* Function with initialized optional params */
function fullNameInitLastname(firstName: string, lastName: string = "Mercado"): string {
    return `${firstName} ${lastName}`;
}

const luis2 = fullNameInitLastname('Renato');

enum Color {
    Rojo = "rojo",
    Verde = "rojo",
    Amarillo = "amarillo",
}

// Interfaces
interface Rectangle {
    width: number
    heigth: number
    color?: Color
}

let rect : Rectangle = {
    width: 4,
    heigth: 2,
    color: Color.Rojo
}

function area(shape: Rectangle): number {
    return shape.heigth * shape.width
}

const areaRect = area(rect)
console.log(areaRect)

// u can override object functions like this
rect.toString = function () {
    return this.color?`A rectangle ${this.color}`: "A rectangle"
}


console.log(rect.toString())