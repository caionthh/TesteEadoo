import { useState, useEffect } from "react";

export const useFetchPacientes = (url) => {
    const[pacientes, setPacientes] = useState([])

    const[index, setIndex] = useState(-1)
    const[config, setConfig] = useState(null)
    const[method, setMethod] = useState("GET")
    const[callFetch, setCallFetch] = useState(false)

    const httpConfig = (data, method, index) => {
        if (method === "GET") {
            setConfig({
                method: "GET",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
        if (method === "POST") {
            setConfig({
                method: "POST",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
        if (method === "PATCH") {
            setIndex(index)
            setConfig({
                method: "PATCH",
                headers: {
                "Content-Type": "application/json"
                },
                body: JSON.stringify(data)
            })
        }
        if (method === "DELETE") {
            setIndex(index)
            setConfig({
                method: "DELETE",
                headers: {
                "Content-Type": "application/json"
                },
            })
        }

        setMethod(method)
    }

    useEffect(() => {
        const fetchData = async() => {
            const res = await fetch(url)
            const data = await res.json()
            setPacientes(data)
        }
        fetchData()
    }, [url, callFetch])

    useEffect(() => {
        const httpReq = async() => {

        if (method === "POST") {
            let options = [url, config]

            const res = await fetch(...options)
            const json = await res.json()
            setCallFetch(json)
        }
        if (method === "PATCH") {
            let options = [url + "/" + index, config]
            const res = await fetch(...options)
            const json = await res.json()
            setCallFetch(json)
        }
        if (method === "DELETE") {
            let options = [url + "/" + index, config]
            const res = await fetch(...options)
            const json = await res.json()
            setCallFetch(json)
        }
    }
    httpReq();

    }, [config, method, url, index])

    return { pacientes, httpConfig }
}