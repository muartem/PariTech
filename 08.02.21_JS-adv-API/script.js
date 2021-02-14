import AutoComplete from "./autoComplete.js"
import Render from "./render.js"

document.addEventListener('DOMContentLoaded', async () =>{
    const searchBtn = document.querySelector("#searchBtn")

    await AutoComplete.start()

    AutoComplete.input.addEventListener('keydown', (event) => {
        if (event.code === 'Enter') {
            AutoComplete.getList()
            Render.start()}
    })
    searchBtn.addEventListener(`click`, (event) => {
        AutoComplete.getList()
        Render.start()
    })

})
