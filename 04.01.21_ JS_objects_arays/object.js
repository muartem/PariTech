//  1.1 Создать хэш таблицу
let hashUSERS = Object.fromEntries(USERS.map(obj => [obj.id, obj]))


// 1.2 Запросить у пользователя id - вывести данные по пользователю
const getUserById = (users) => {
    const ID = prompt("Put id")
    return users[ID] || "Unknown user"
}

//console.log(getUserById(hashUSERS))

// 1.3 Запросить у пользователя id, есть такой есть - запросить дополнительное поле - адрес. Вывести адрес.
const getAddressById = (users) =>  getUserById(users)?.address || "Unknown user"

//console.log(getAddressById(hashUSERS))



//1.4 Запросить у пользователя ввести название компании - найти пользователя с такой компанией - вернуть объект пользователя.

const getUsersByCompany = (users) =>{
    const COMPANY = prompt("Put Company")
    const foundUsers = Object.values(users).filter(user => user.company.name.toLowerCase().includes(COMPANY.toLowerCase()))
    return foundUsers.length ? foundUsers : `NO users from  ${COMPANY}`;
}

//console.log(getUsersByCompany(hashUSERS))

//1.5 Сделать каждый property id пользователя неудаляемым и запретить его мутацию/изменение.
//1.6 Написать сеттер - чтобы при изменении phone - проверялась валидность номера телефона при помощи регулярного выражения для (ххх) ххх-хх-хх - все х - числа.



[...Object.values(hashUSERS)].map((u) => {
    const oldPhone = u.phone
    Object.defineProperties(u, {
        id: {
            writable: false,
            configurable: false,
        },
        _phone: {
            value: oldPhone,
            writable: true,
        },
        phone: {
            get() {
                return this._phone;
            },
            set(newValue) {
                const regex = /^\(\d{3}\) \d{3}-\d{2}-\d{2}$/;
                if (!regex.test(newValue)) return;
                this._phone = newValue;
            }
        }
    })
})


const tryChangeId = () => {
    outer("old id: " + hashUSERS[1].id)
    hashUSERS[1].id = prompt("Try to change id")
    outer("new id: " + hashUSERS[1].id)
}


const tryChangeNumber = () => {
    outer("old number: " + hashUSERS[2].phone)
    hashUSERS[2].phone = prompt("Try to change number")
    outer("new number: " + hashUSERS[2].phone)
}


