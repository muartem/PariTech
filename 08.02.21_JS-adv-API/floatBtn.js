(()=>{
    const btn = document.querySelector(".fixed-action-btn")
    window.addEventListener('scroll', (e) =>{
        if (window.scrollY < 400) {
            btn.style.right = "-70px"
        } else btn.style.right = "50px"
    })

    btn.addEventListener("click", (e) =>{
        window.scrollTo(pageXOffset, 0);
})})()