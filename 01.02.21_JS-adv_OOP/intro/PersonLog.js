const {Person} = require('./Person')

class Log {
    constructor(field, oldValue, newValue) {
        this.Field = field
        this.OldValue = oldValue
        this.NewValue = newValue
        this.Date = new Date()
    }
}
class PersonLog extends Person{
    #logs = []
    constructor(name, gender){
        super(name, gender)
        this.#logs.push(new Log("name", "----", name))
        this.#logs.push(new Log("gender", "----", Object.keys(Person.GENDER)[gender]))
    }
    get name() { return super.name }
    get gender() { return super.gender }

    set name(newName) {
        this.#logs.push(new Log("name", this.name, newName))
        super.name = newName
    }

    set gender(newGender) {
        const tempGender = this.gender
        try {
            super.gender = PersonLog.checkGender(newGender)
            this.#logs.push(new Log("gender", Object.keys(Person.GENDER)[tempGender], Object.keys(Person.GENDER)[newGender]))
        } catch (e){
            console.error(e.message)
            this.#logs.push(new Log("gender", Object.keys(Person.GENDER)[tempGender], `${Object.keys(Person.GENDER)[tempGender]} (Invalid changing)`))
        }

    }

    showLogs(){
        console.group(`${this.name}'s logs`)
        console.table(this.#logs)
        console.groupEnd()
    }

}

const nikola = new PersonLog("Nicola", 1)
const lena = new PersonLog("Lena", 2)
const john = new PersonLog("John", 3)
nikola.name = "Kolya"
nikola.gender = 3

john.name = "Georgiy"
john.name = "Gosha"
john.name = "Zhora"


nikola.showLogs()
lena.showLogs()
john.showLogs()


module.exports = {PersonLog}