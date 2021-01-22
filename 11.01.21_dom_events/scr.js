window.onload = () => {
    event.preventDefault()
    document.oncontextmenu = () => false

    const main = document.querySelector(".main")
    const add = document.querySelector(".add")
    const del = document.querySelector(".del")
    const allDel = document.querySelector(".allDel")
    const delbtn = document.querySelector("#delete")
    const deleteElem = document.querySelector(".delete")
    const rename = document.querySelector(".rename")
    let elements = document.querySelectorAll(".elem")
    const createBtn = document.querySelector("#create")



    main.addEventListener('contextmenu', context)
    addEL(elements)
    // Selection
    main.addEventListener('mousedown', selecter)

    function context(e){
        e.preventDefault()
        closeCnt()
        createBtn.removeEventListener('click', createElem)
        if (e.target === main) {
            add.style.top = e.pageY + "px"
            add.style.left = e.pageX + "px"
            add.style.display = (add.style.display !== "block") ? "block" : "none"
            createBtn.addEventListener(`click`, createElem)
        }
        else{
            console.log(e.target)
            const element = e.target
            del.style.top = e.pageY + "px"
            del.style.left = e.pageX + "px"
            del.style.display = (del.style.display === "none") ? "block":"none"
            console.log("nr")
            deleteElem.onclick = () =>{
                element.remove();
                closeCnt()
            }
            rename.onclick = () =>{
                const newName = prompt("Enter new name", element.innerText)
                element.innerText = newName
                closeCnt()
            }
        }
    }
    function createElem(e){
        const name = prompt("Enter file name")
        main.innerHTML += `<div class="elem ">${name}</div>`
        elements = document.querySelectorAll(".elem")
        addEL(elements)
        closeCnt()
    }
    function closeCnt(){
        del.style.display = "none"
        add.style.display = "none"
        allDel.style.display = "none"
        for (elem of elements) {
            if (elem.classList.contains("selected")) elem.classList.remove("selected")
        }
    }
    function drager(event){
        if(event.which === 1){
            event.preventDefault()
            closeCnt()
            const getCoords = (elem) => {
                const box = elem.getBoundingClientRect();
                return {
                    top: box.top + pageYOffset,
                    left: box.left + pageXOffset
                }
            }
            let moveAt = (e) => {
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
        }
    }
    function selecter(event){
        closeCnt()
        if((event.which === 1 )&&(event.target === main)){
            event.preventDefault()
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
                selection.style.height = evt.offsetY - startY + "px"
            }))

            event.target.addEventListener('mouseup', (evt => {
                const endX = evt.offsetX
                const endY = evt.offsetY
                selection.remove()

                for (elem of elements) {
                    const chords = elem.getBoundingClientRect()
                    if (((chords.y + pageYOffset) > startY) && ((chords.y + pageYOffset) < endY) && ((chords.x + pageXOffset) > startX) && ((chords.x + pageXOffset) < endX)) elem.classList.add("selected")
                }
                elements = document.querySelectorAll(".elem")
                const selectedElements = Array.from(elements).filter(el => el.classList.contains('selected'))
                if(selectedElements.length > 0){
                    allDel.style.top = endY + "px"
                    allDel.style.left = endX + "px"
                    allDel.style.display = "block"

                    delbtn.onclick = () => {
                        for (el of selectedElements) el.remove()
                        closeCnt()
                    }
                }

            }))
        }
    }
    function addEL(elems){
        elems.forEach(elem => {
            elem.addEventListener('contextmenu', context)
            //// drag&drop
            elem.addEventListener('mousedown', drager)
            elem.ondragstart = () => false
            ////
        })
    }


}