window.onload = () => {
    const HEX = () => {
        const regex = /#([0-9A-F]{6}|[0-9A-F]{3})/gi
        return document.documentElement.innerHTML.match(regex)
    }

    const uaNumber = () => {
        const regex = /(\+\s?\(380\)[-\s]?0(66|67|68|96|97|98|50|95|99|63|73|93))[-\s]?\d{3}[-\s]?\d{2}[-\s]?\d{2}/gi
        return document.body.innerHTML.match(regex)
    }

    const replaceH1toH22 = () => {
        document.documentElement.innerHTML = document.documentElement.outerHTML.replace(/h1>/g, 'h2>')
    }

    const script = () => document.documentElement.innerHTML.match(/<script[\s\S]*?>[\s\S]*?<\/script>/gi)

    alert("delay")
    console.log(HEX())
    console.log(uaNumber())
    replaceH1toH22()
    console.log(script())
}