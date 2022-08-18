import axios from "axios";

const baseUrl = "https://617c09aad842cf001711c200.mockapi.io/v1";


const executeCall = (url, method = 'GET', data) => {
    return axios({
        method: method,
        url: baseUrl + url,
        data: data
    }).then(function(response) {
        return response;
    }).catch(function(error) {
        return { error }
    });
};

export const getCompaniesList = (search) => {
    let url = `/companies`

    if (search) url += `?search=${search}`
    return executeCall(url)
}