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
        con.scrollBy(0,1)
    }, 60)
    setTimeout(() => clearInterval(timerId), con.scrollHeight*15)
}
const clearCon = () =>  con.innerText = ""
