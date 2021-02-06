const {Person} = require('./Person')
const {PersonLog} = require('./PersonLog')
jest.mock('./Person')
jest.mock('./PersonLog')
afterAll(() => {
    Person.mockClear()
})
describe('Class Person: ', ()=> {
    const person = new Person("Alex",2)

    test('Constructor test', () => {
        expect(Person).toBeCalled()
        expect(person).toBeInstanceOf(Person)
    })

    test('callMe & callCount test', () => {
 //       person.callMe()
        Person.callCount()
   //     expect(person.callMe).toBeCalled()
        expect(Person.callCount).toBeCalled()
   //     expect(person.callMe()).toEqual(1)
    //    expect(Person.callCount()).toEqual(1)
    })

   /* test('expect getName', () => {
        expect(person.name).toEqual("Alex")
        expect(person.gender).toEqual(2)

    })*/
})

describe('Class PersonLog: ', ()=> {
    const person = new PersonLog("Test name",2)

    test('Constructor test', () => {
        expect(PersonLog).toBeCalled()
        expect(person).toBeInstanceOf(PersonLog)
    })

    /*test('Constructor test', () => {
        expect(() => {
            person.gender = 3
        }).toThrow();
    })*/
})