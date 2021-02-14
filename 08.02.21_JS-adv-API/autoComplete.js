export default class AutoComplete{
    static input = document.querySelector('.autocomplete')
    static users = {}
    static drop = M.Autocomplete.init(this.input, {
            data: {},
            limit: 15
        }
    )
    static async start() {
        await AutoComplete.input.addEventListener("input", _.debounce(async evn => await AutoComplete.getList(),500))
    }
    static async getList(){
        let list = {}
        try{
            AutoComplete.users = await getUsers(this.input.value)
            AutoComplete.users.forEach(u => {
                list[u.login] = u.avatar_url
            })
        } catch (e){console.error(e.message)}

        AutoComplete.drop.updateData({...list})
        AutoComplete.drop.open()
    }
}
