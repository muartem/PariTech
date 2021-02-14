import AutoComplete from "./autoComplete.js"

export default class Render{
    static #log = document.querySelector("#log")
    static #mainView = document.querySelector("#main")
    static #docBody = document.querySelector(".docBody")
    static #langs ={
        HTML: "./img/HTML.jpg",
        CSS: "./img/CSS.jpg",
        JavaScript: "./img/JS.png",
        "C++": "./img/Cpp.png",
        "C#": "./img/CS.png",
        Python: "./img/HTML.jpg",
        Java: "./img/JAVA.jpg",
        PHP: "./img/PHP.png",
        TypeScript: "./img/TS.png",
        Ruby: "./img/Ruby.png",
        null: "./img/no-lng.jpg"
    }
    static async start() {
        AutoComplete.drop.close()
        this.#docBody.innerHTML = ""
        this.#upLog("")
        if (AutoComplete.input.value === "") {
            if(this.#mainView.classList.contains("afterSearch")) this.#mainView.classList.remove("afterSearch")
            this.#upLog("Enter some letters...")
        }else switch (await AutoComplete.users.length) {
                case 0:
                    if(this.#mainView.classList.contains("afterSearch")) this.#mainView.classList.remove("afterSearch")
                    this.#upLog("Users are not found")
                    break;
                case 1:
                    this.#upLog("One!!!")
                    await this.#user(AutoComplete.users[0])
                    break;
                default:
                    this.#upLog("Many")
                    await this.#users(AutoComplete.users)
                    break;
            }
        }

    static #upLog(log){
        Render.#log.innerText = log
        setTimeout(()=>this.#upLog(""), 4000)
    }
    static async #users(users){
        if(!this.#mainView.classList.contains("afterSearch")) this.#mainView.classList.add("afterSearch")
        for (let u of users) {
            let user
            try {
                user = await getUserDataByUrl(u.url)
                let newDiv = document.createElement("div")
                newDiv.innerHTML = `
                <div class="col s12 m6 l4 xl3 user-in-search"">
                    <div class="card">
                        <div class="card-image">
                            <img alt="User Photo" src="${u.avatar_url || "./img/no-photo.jpg"}">
                            <span class="card-title">${user.name || u.login}</span>
                        </div>
                        <div class="card-content">
                            <p> <i class="material-icons">location_on</i> Location:<span>${user.location || "not indicated"}</span></p>
                            <p> <i class="material-icons">book</i> Repositories: <span>${user.public_repos || "0"}</span></p>
                            <p> <i class="material-icons">people</i> Followers: <span>${user.followers || "0"}</span></p>
                            <p> <i class="material-icons">people_outline</i> Following: <span>${user.following || "0"}</span></p>
                        </div>
                        <div class="card-action">
                            <a href="${u.html_url}">Go to github</a>
                        </div>
                    </div>
                </div>
            `
                newDiv.addEventListener("click", () => {
                    users = {u}
                    Render.#user(u)
                })
                this.#docBody.appendChild(newDiv)
            } catch (e) {
                user = u
                console.error(e.message)
            }
        }
    }


    static async #user(usr){
        if(!this.#mainView.classList.contains("afterSearch")) this.#mainView.classList.add("afterSearch")
        const user = await getUserDataByUrl(usr.url)

        const followers = await getUserDataByUrl(user.followers_url)
        let flwRender = ""
        followers.forEach(f => {
            flwRender += `
            <div class="follower">
                <div class="card-image">
                    <img class="user-img" alt="User Photo"  src="${f.avatar_url || "./img/no-photo.jpg"}">
                </div>
                <div class="card-content">
                    <span class="card-title">${followers[0].name || f.login}</span>
                </div> 
            </div>
            `
        })

        const repos = await getUserDataByUrl(user.repos_url)
        let rpsRender = ""
        repos.forEach(r => {
            rpsRender += `
            <div class="repository">
                        <div class="card-image">
                            <img class="repo-img" alt="Repo Photo"  src="${this.#langs[r.language]|| "./img/no-lng.jpg"}">
                        </div>
                        <div class="card-content">
                            <span class="card-title">${r.name}</span>
                        </div> 
                    </div>
            `
        })
        this.#docBody.innerHTML = `
            <div class="one">
            <div class="sidebar">
                <div class="card-image">
                    <img class="user-img" alt="User Photo"  src="${user.avatar_url || "./img/no-photo.jpg"}">
                </div>
                <div class="card-content">
                    <span class="card-title">${user.name || user.login}</span>
                    <p> <i class="material-icons">login</i> Login:<span>${user.login}</span></p>
                    <p> <i class="material-icons">work</i> Company:<span>${user.company || "not indicated"}</span></p>
                    <p> <i class="material-icons">mail</i> Email:<span>${user.email || "not indicated"}</span></p>
                    <p> <i class="material-icons">location_on</i> Location:<span>${user.location || "not indicated"}</span></p>
                    <p> <i class="material-icons">insert_comment</i> About:  ${user.bio || ""} </p>
                </div>
            </div>
            <div>
                <h4>Followers:</h4>
                <div class="user-flw_rep">
                    ${flwRender}
                </div>
                <br/>
                <h4>Repositories:</h4>
                <div class="user-flw_rep">
                    ${rpsRender}
                </div>
            </div>
            </div>
            `
    }

}
