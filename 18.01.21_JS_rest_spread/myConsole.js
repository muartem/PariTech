const con = document.querySelector(".console_txt")
const outer = (val) => {
    console.log(val)
    if (val instanceof Object) {
        val = JSON.stringify(val)
        val= val.replace(/(,{)/g, ',\n{\n')
        val= val.replace(/(,")/g, ',\n"')
    }
    con.innerText +=  `${val||""}\n\n`
    const timerId = setInterval(() => {
        con.scrollBy(0,2)
    }, 1)
    setTimeout(() => clearInterval(timerId), con.scrollHeight*2)
}
const clearCon = () =>  con.innerText = ""