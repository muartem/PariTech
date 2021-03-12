import axios from "axios";

export default class API {
    static #api = axios.create({
        baseURL: 'https://jsonplaceholder.typicode.com/',
    })

    static getPhotos = async (start = 0, albumId) => {
        const { data } = await this.#api.get('photos/', {
            params: {
                albumId,
                _start: start,
                _limit: 6,
            },
        })
        return data
    }

    static getUser = async (id) => {
        const { data } = await this.#api.get(`albums/${id}?_expand=user`)
        return data.user
    }

    static getPhoto = async (id) => {
        const { data } = await this.#api.get(`photos/${id}?_expand=album`)
        return data
    }
}
