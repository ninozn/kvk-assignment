import axios from "axios"


const baseUrl = "https://617c09aad842cf001711c200.mockapi.io/v1"
let cancelToken

const executeCall = (url, method = "GET", data) => {
    if (cancelToken) cancelToken.cancel("Operation canceled due to new request.")

    cancelToken = axios.CancelToken.source()

    return axios({
        method: method,
        url: baseUrl + url,
        data: data,
        cancelToken: cancelToken.token
    }).then(function(response) {
        return response.data
    }).catch(function(error) {
        if (error.code !== "ERR_CANCELED") return { error }
    })
}

export const getCompaniesList = search => {
    let url = "/companies"

    if (search) url += `?search=${search}`
    return executeCall(url)
}

export const getCompanyDetails = id => {
    let url = `/companies/${id}/details`
    return executeCall(url)
}