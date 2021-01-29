///1. Реализовать функцию multiplyBy, которая будет принимать первый аргумент как
// множитель на который нужно умножить

const multiplyBy = (m, ...rest) => rest.map((r) => r * m)

function a(){
    clearCon()
    outer("multiplyBy(2,1,2,3) -> " + multiplyBy(2, 1, 2, 3))
    outer("multiplyBy(3,5,10,15) -> " + multiplyBy(3, 5, 10, 15))
}

///2. Реализовать функцию flatWhite, которая будет принимать двумерный массив и
// делать из него одномерный.
const myArray2D = [
    [1,2,3],
    [4,5,6],
    [7,8,9]
]

const flatWhite = (array2D) =>{
    let array = []
    array2D.forEach((arr) => array.push(...arr))
    return array
}

function b() {
    clearCon()
    outer(myArray2D)
    outer(flatWhite(myArray2D))
}

/** 3. Реализовать функцию extendWith, которая будет принимать аргументом два
объекта {} и объединять их в один, где первый

* объект имеет больше приоритет с точки зрения одинаковых полей чем второй
(смотрите примеры assert).*/
const myobj1 = {
    name: "Vova",
    lastName: "Ivanov",
    age: 35,
    isMarried: true
}
const myobj2 = {
    age: 30,
    languages: ["rus", "ukr", "eng"],
    isMarried: false,
    children:[
        {
            name: "Alex",
            age: 5,
        },
        {
            name: "Lena",
            age: 2,
        }
    ]
}

const extendWith = (obj1, obj2) => {
    for(let obj in obj2) obj1[obj] || (obj1[obj] = obj2[obj])
    return obj1
}
function c() {
    clearCon()
    outer(myobj1)
    outer(myobj2)
    outer(extendWith(myobj1, myobj2))
}
/** 4. Реализовать функцию extendWithEndless, которая будет принимать сколько угодно
аргументов, но последний будет

* выступать главным и переписывать все предыдущие с точки зрения одинаковых
параметров (смотрите примеры assert).*/
const myobj21 = {
    flatWhite: ['doppio', 'hot', 'milk'],
    isValid: true
}

const myobj22 = {
    isValid: false,
    additionalProp: {
        thisIsGoodProp: 123
    }
}

const myobj23 = {
    prop3: true
}

const myobj24 = {
    prop4: true
}

const myobj25 = {
    isValid: [false, false]
}



const extendWithEndless = (...objs) => {
    for (let i = objs.length - 1 ; i > 0 ; i--) {
        for (let obj in objs[i]) {
            objs[i-1][obj] = objs[i][obj]
        }
    }
    return objs[0]
}

function d() {
    clearCon()
    outer(myobj21)
    outer()
    outer(myobj22)
    outer()
    outer(myobj23)
    outer()
    outer(myobj24)
    outer()
    outer(myobj25)
    outer()
    outer(extendWithEndless(myobj21, myobj22, myobj23, myobj24, myobj25))
}