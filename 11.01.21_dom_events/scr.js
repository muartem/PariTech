window.onload = () => {
    document.oncontextmenu = () => false

    const main = document.querySelector(".main")
    const add = document.querySelector(".add")
    const del = document.querySelector(".del")
    const allDel = document.querySelector(".allDel")
    const delbtn = document.querySelector("#delete")
    const create = document.querySelector("#create")
    const deleteElem = document.querySelector(".delete")
    const rename = document.querySelector(".rename")
    let elements = document.querySelectorAll(".elem")




   main.addEventListener('click', (event)=>{
        if (event.target == main) {
            del.style.display = "none"
            add.style.top = event.pageY + "px"
            add.style.left = event.pageX + "px"
            add.style.display = (add.style.display !== "block") ? "block" : "none"
            create.addEventListener('click', (event) => {
                const name = prompt("Enter file name")
                main.innerHTML += `<div class="elem ">${name}</div>`
                add.style.display = "none"
            })
        }
        let elements = document.querySelectorAll(".elem")



        for(elem of elements){
            elem.addEventListener('click', (event) => {
                console.log(event);

                    const element = event.target
                    add.style.display = "none"
                    del.style.top = event.pageY + "px"
                    del.style.left = event.pageX + "px"
                    del.style.display = (del.style.display !== "block") ? "block":"none"

                    deleteElem.onclick = () =>{
                        element.remove();
                        del.style.display = "none"
                    }
                    rename.onclick = () =>{
                        const newName = prompt("Enter new name", element.innerText)
                        element.innerText = newName
                        del.style.display = "none"
                    }
            })
            ///// drag&drop
            elem.addEventListener('mousedown', (event) => {


                const getCoords = (elem) => {
                    const box = elem.getBoundingClientRect();
                    return {
                        top: box.top + pageYOffset,
                        left: box.left + pageXOffset
                    }
                }
                moveAt = (e) => {
                    event.target.style.left = e.pageX - shiftX + 'px'
                    event.target.style.top = e.pageY - shiftY + 'px'
                }

                let coords = getCoords(event.target)
                let shiftX = event.pageX - coords.left
                let shiftY = event.pageY - coords.top

                event.target.style.position = 'absolute'
                event.target.style.zIndex = 3
                document.body.appendChild(event.target)
                moveAt(event)

                document.onmousemove = (e) => {
                    moveAt(e)
                }
                event.target.onmouseup = () => {
                    document.onmousemove = null
                    event.target.onmouseup = null
                }
                return false
            })
            elem.ondragstart = () => false
            /////!
        }
    })

    // Selection
   /* main.addEventListener('mousedown', (event) => {
        event.preventDefault()
        for (elem of elements){
            if(elem.classList.contains("selected")) elem.classList.remove("selected")
        }
        const startX = event.offsetX
        const startY = event.offsetY
        const selection = document.createElement("div")
        selection.id = "selection"
        selection.style.border = "solid"
        selection.style.borderColor = "#584032"
        selection.style.position = "absolute"
        selection.style.top = startY + "px"
        selection.style.left = startX + "px"
        main.appendChild(selection)
        event.target.addEventListener('mousemove', (evt => {
            selection.style.width = evt.offsetX - startX + "px"
            selection.style.height = evt.offsetY - startY  + "px"
        }))

        event.target.addEventListener('mouseup', (evt => {
            const endX = evt.offsetX
            const endY = evt.offsetY
            selection.remove()

            for (elem of elements){
                const chords = elem.getBoundingClientRect()
                console.log(startX, chords.x, endX)
                if(((chords.y + pageYOffset) > startY) && ((chords.y + pageYOffset) < endY) && ((chords.x + pageXOffset) > startX) && ((chords.x + pageXOffset) < endX)) elem.classList.add("selected")
            }


            allDel.style.top = endY + "px"
            allDel.style.left = endX + "px"
            allDel.style.display = (allDel.style.display !== "block") ? "block" : "none"
            delbtn.addEventListener('click', (event) => {
                for (elem of elements) if(elem.classList.contains("selected")) elem.remove()
                allDel.style.display ="none"
            })

        }))


    })*/
}