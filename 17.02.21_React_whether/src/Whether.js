/*

const getUserIp = async () => {
    const ip = await fetch('https://api.ipify.org')
    if(!ip.ok) throw new Error(`Error ${ip.status}. ${ip.statusText}`)
    const text = await ip.text()
    return text
}

const getForecast = async () =>{
    const data = await fetch(`https://api.gismeteo.net/v2/search/cities/?ip=${await getUserIp()}`)
    if(!data.ok) throw new Error(`Error ${data.status}. ${data.statusText}`)
    const json = await data.json()
    console.log(json)
    return json
}

*/

const days = ["вс", "пн", "вт", "ср", "чт", "пт", "сб" ]
const month = ["январь", "февраль", "март", "апрель", "май", "июнь", "июль", "август", "сентябрь", "октябрь", "ноябрь", "декабрь" ]
const getDay = (add) =>{
    const day = new Date()
    day.setDate(day.getDate() + add)
    return `${days[day.getDay()]} ${day.getDate()}/${day.getMonth()+1}/${day.getFullYear()-2000}`
}
//Что бы отобразить месяц буквами month[day.getMonth()]
//Но оно не вписываеться в дизайн, да и люди уже привыкли на всех гаджетах формат 20.02.21

export const WHETHER = [
    {
        date: "Сегодня",
        img: "d",
        pred: 60,
        speed: 50,
        max: -2,
        min: -12,
    },
    {
        date: "завтра",
        img: "n_st",
        pred: 0,
        speed: 50,
        max: -2,
        min: -12,
    },
    {
        date: getDay(+2),
        img: "d_c1_s2",
        pred: 60,
        speed: 50,
        max: -6,
        min: -18,
    },
    {
        date: getDay(+3),
        img: "d_c2_s1",
        pred: 10,
        speed: 10,
        max: -8,
        min: -15,
    },
    {
        date: getDay(+4),
        img: "n",
        pred: 60,
        speed: 50,
        max: -2,
        min: -12,
    },
    {
        date: getDay(+5),
        img: "s3_mist",
        pred: 60,
        speed: 50,
        max: -2,
        min: -12,
    },
    {
        date: getDay(+6),
        img: "s3_st_mist",
        pred: 60,
        speed: 50,
        max: -2,
        min: -12,
    },
]