window.onload = () => {
    const m = document.getElementById("input1")
    const n = document.getElementById("input2")
    const str1 = document.getElementById("input3")
    const str2 = document.getElementById("input4")
    const str3 = document.getElementById("input5")
    const go = document.getElementById("go")
    const goStr = document.getElementById("goStr")
    const output1 = document.getElementById("output1")
    const output2 = document.getElementById("output2")
    const output3 = document.getElementById("output3")
    const output4 = document.getElementById("output4")
    const output5 = document.getElementById("output5")
    const output6 = document.getElementById("output6")
    const output7 = document.getElementById("output7")


    go.onclick = () => {
        output1.innerText = `1. Nums in range: ${range(m.value, n.value).join(", ")}`
        output2.innerHTML = `2. ${m.value}<sup>${n.value||2}</sup>:  ${pow(Number(m.value), Number(n.value)||2)}`
        output3.innerText = `3. ~Num1*0,3: ${round(m.value)}, ~Num1*0,3: ${round(n.value)}`
        output4.innerText = `4. Random in range ${random(range(m.value, n.value))}`
    }
    goStr.onclick = () =>{
        let acumStr = str1.value;
        let count = 0
        while (acumStr.indexOf(str2.value) >= 0) {
            acumStr = acumStr.slice(acumStr.indexOf(str2.value) + 1)
            count++
        }
        output5.innerHTML = `1. str2 repeats in str1: <b>${count} times</b>`

        const regNum = /([0-9])/g
        const regUpper = /([A-Z])/g
        output6.innerText = `Only nums :  ${str3.value.match(regNum).join(", ")}`
        output7.innerText = `Only upper :  ${str3.value.match(regUpper).join(", ")}`

    }





    let range = (m, n) =>{
        let range = [];
        for ( let i = Number(m)+1; i < Number(n) ; i++) range.push(i)
        return range
    }
    /*function pow_1(m,n= 2){
        return m**n
    }
    let pow_2 = function(m,n= 2){
        return m**n
    }*/
    let pow = (m, n = 2 ) => m**n
    let round = a => Math.round(a * 0.3)
    let random = (arr) => arr[Math.floor(Math.random() * Math.floor(arr.length))]
}