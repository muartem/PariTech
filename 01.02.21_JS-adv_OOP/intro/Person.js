const {PersonGenderError} = require('./PersonGenderError')

class Person{
    static GENDER = {
        NOT_DEFINED: 0,
        MAN: 1,
        WOMAN: 2
    }
    static #counter = 0
    #name = 'NoName'
    #gender = Person.GENDER.NOT_DEFINED

    constructor(name, gender) {
        this.#name = name
        try {
            this.#gender = Person.checkGender(gender)
        } catch (e){
            console.error(e)
        }
    }

    get name() { return this.#name }
    get gender() { return this.#gender }
    set name(newName) {this.#name = newName }
    set gender(newGender) {
        try {
            this.#gender = Person.checkGender(newGender)
    } catch (e){
        console.error(e.message)
    }
    }


    callMe = () => ++Person.#counter
    static callCount = () => this.#counter++

    static checkGender(newGender){
        if (Object.values(Person.GENDER).includes(newGender)) {
            return  newGender
        } else throw new PersonGenderError()
    }
    sayHello(){
        console.log(`My name is ${this.name}, i am a ${Object.keys(Person.GENDER).find(key => Person.GENDER[key] === this.gender)}`)
    }
}
const victor = new Person("Victor", 1)
const maria = new Person("Maria", 2)
const alex = new Person("Alex", 3)

victor.callMe()
maria.callMe()
alex.callMe()

console.log(`\ncall me cold: ${alex.callMe()} times`)

console.log(`Calling callCount`)
Person.callCount()
console.log(`call me cold: ${Person.callCount()} times`)
console.log(`call me cold: ${alex.callMe()} times\n`)

victor.sayHello()
maria.sayHello()
alex.sayHello()

console.log("\nChanging Maria: name: Ann; gender: 3")
maria.name = "Ann"
maria.gender = 3
maria.sayHello()



module.exports = {Person}
/*

Створити класс з методом “callMe()” який буде підраховувати скільки разів він був
викликаний усіма екземплярами класу та методом “callCount()” який буде повертати
 скільки разів
метод “callMe” був викликаний


Зробіть так щоб класс екземпляри класу Person не могли мати значення в полі gender
классу Person відмінне від тих значень, що задані в статичному полі GENDER класу Person.
У випадку коли буде спроба встановити значення поля gender відмінне від тих що встановленні
в полі GENDER, має бути створена власна помилка PersonGenderError


Створіть класс PersonLog який расширить клас Person та додасть до нього readonly поле
logs яке буде збирати лог змін властивостей екземпляру класу у вигляді строк формату
    `${propertyName}: ${oldValue} ${newValue}`

*/
