const getUsers = async (nick) => {
    const data = await fetch(`https://api.github.com/search/users?${new URLSearchParams({
        q: nick || "a"
    })}`)
    if(!data.ok) throw new Error(`Error ${data.status}. ${data.statusText}`)
    json = await data.json()
    return json.items
}

const getUserDataByUrl = async (url) => {
    const data = await fetch(`${url}`);
    if(!data.ok) throw new Error(`Error ${data.status}. ${data.statusText}`)
    json = await data.json()
    return json
};

