window.onload = () => {
    const input = document.getElementById("input")
    const output = document.getElementById("output")
    input.oninput = function () {
        if (input.value == +input.value) {
            switch (input.value) {
                case "1":
                    output.innerText = `${input.value}.january`
                    break
                case "2":
                    output.innerText = `${input.value}.february`
                    break
                case "3":
                    output.innerText = `${input.value}.march`
                    break
                case "4":
                    output.innerText = `${input.value}.april`
                    break
                case "5":
                    output.innerText = `${input.value}.may`
                    break
                case "6":
                    output.innerText = `${input.value}.june`
                    break
                case "7":
                    output.innerText = `${input.value}.jule`
                    break
                case "8":
                    output.innerText = `${input.value}.august`
                    break
                case "9":
                    output.innerText = `${input.value}.september`
                    break
                case "10":
                    output.innerText = `${input.value}.october`
                    break
                case "11":
                    output.innerText = `${input.value}.november`
                    break
                case "12":
                    output.innerText = `${input.value}.december`
                    break
                default:
                    output.innerText = `unexisting month`
            }

        } else {
            switch (input.value.toLowerCase()) {
                case "january":
                    output.innerText = `1.${input.value}`
                    break
                case "february":
                    output.innerText = `2.${input.value}`
                    break
                case "match":
                    output.innerText = `3.${input.value}`
                    break
                case "april":
                    output.innerText = `4.${input.value}`
                    break
                case "may":
                    output.innerText = `5.${input.value}`
                    break
                case "june":
                    output.innerText = `6.${input.value}`
                    break
                case "jule":
                    output.innerText = `7.${input.value}`
                    break
                case "august":
                    output.innerText = `8.${input.value}`
                    break
                case "september":
                    output.innerText = `9.${input.value}`
                    break
                case "october":
                    output.innerText = `10.${input.value}`
                    break
                case "november":
                    output.innerText = `11.${input.value}`
                    break
                case "december":
                    output.innerText = `12.${input.value}`
                    break
                default:
                    output.innerText = `${input.value}??? I don't understand you!`
                    break
            }
        }
    }
}