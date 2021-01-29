const NUMBERS = [1,2,3,4,3,2,5,6,7,1,1,5,4,3,4,7,6,5,4,3,8,1]
const NUMBERS2 = [9,1,2,0]
const LETTERS = ["A","B","C","D"]

// 2.1 Написать функцию которая находила бы первый и последний индекс вхождения в массив переданного числа (запросить у пользователя). И выводила  в виде [[FIRST_INDEX], [LAST_INDEX]].
// Если такого числа нет - выводить вместо индексов -1 [-1,-1].
const firstAndLast = (array) => {
    const NUMB = prompt("Put number")
    return [array.indexOf(+NUMB) , array.lastIndexOf(+NUMB)  ]
}
//2.2 Пересечение массивов
//Дано два массива, напишиите функцию для вычисления их пересечения.
const crossArray = (arr1, arr2) => arr1.filter((arr) => arr2.includes(arr))
/*2.3 Написать функцию, которая принимает два массива и индекс.
(arr1, arr2, index) =>
Возвращает новый массив в котором в первый массив по переданному индексу записывается второй массив.*/
const insertArray = (arr1, arr2, index) =>  arr1.slice(0, index).concat(arr2).concat(arr1.slice(index))
/*2.4
Отсортировать массив из первого задания в порядке убывания id*/
const sortById = (arr) => arr.sort(({id: id1}, {id:id2}) => id2 - id1)
/*2.5 *
Отсортировать массив из первого задания в порядке убывания даты регистрации (registrationDate)*/
const sortByRegistrationDate = (arr) => arr.sort(({registrationDate: rd1}, {registrationDate: rd2}) =>  new Date(rd2) - new Date(rd2))

