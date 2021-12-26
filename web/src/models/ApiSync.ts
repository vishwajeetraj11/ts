import axios, { AxiosPromise } from "axios";

/*
Serialize: Convert data from an object into some save-able format(json)
Deserialize: Put data on an object using some previously saved data (json)
*/

interface HasId {
    id?: number;
}

//                          Typescript Generics Contraint
export class ApiSync<T extends HasId> {
    constructor(public rootUrl: string) { }
    fetch(id: number): AxiosPromise {
        return axios.get(`${this.rootUrl}/${id}`)
    }

    save(data: T): AxiosPromise {
        const { id } = data;
        if (id) {
            // PUT Request
            return axios.put(`${this.rootUrl}/${id}`, data)
        } else {
            // POST REQUEST
            return axios.post(`${this.rootUrl}`, data)
        }
    }
} 