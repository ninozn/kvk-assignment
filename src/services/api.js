import axios from "axios"

const baseUrl = "https://617c09aad842cf001711c200.mockapi.io/v1"


const executeCall = (url, method = "GET", data) => {
    return axios({
        method: method,
        url: baseUrl + url,
        data: data
    }).then(function(response) {
        return response
    }).catch(function(error) {
        return { error }
    })
}

export const getCompaniesList = (search) => {
    // let url = `/companies`

    // if (search) url += `?search=${search}`

    // return executeCall(url)

    // TODO - Temporary to prevent API from having too many requests
    return {
        "data": [{
                "id": "1",
                "name": "Wintheiser Group",
                "city": "West Esteban",
                "zipCode": "97018",
                "streetName": "Lilly View",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-07-16T19:41:28.272Z"
            },
            {
                "id": "2",
                "name": "Feest, Schinner and Lowe",
                "city": "New Ahmad",
                "zipCode": "07811",
                "streetName": "Bartell Tunnel",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-10-03T18:37:01.931Z"
            },
            {
                "id": "3",
                "name": "Ruecker, Grant and Mosciski",
                "city": "South Leilastad",
                "zipCode": "57843",
                "streetName": "Amparo Inlet",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-07-21T11:40:04.460Z"
            },
            {
                "id": "4",
                "name": "Davis - Stiedemann",
                "city": "West Aniyahview",
                "zipCode": "01404",
                "streetName": "Judson Village",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-04-26T04:00:53.757Z"
            },
            {
                "id": "5",
                "name": "Connelly LLC",
                "city": "Hamillchester",
                "zipCode": "18773",
                "streetName": "Loren Extensions",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-05-03T03:36:51.245Z"
            },
            {
                "id": "6",
                "name": "Skiles, Bergnaum and Hagenes",
                "city": "Port Crystel",
                "zipCode": "12855",
                "streetName": "Stroman Glens",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-05-07T08:01:10.939Z"
            },
            {
                "id": "7",
                "name": "Streich - Kuhic",
                "city": "North Ernestinahaven",
                "zipCode": "94618",
                "streetName": "Wilfred Manor",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-08-04T10:44:14.183Z"
            },
            {
                "id": "8",
                "name": "Schumm - Gerlach",
                "city": "Waelchibury",
                "zipCode": "83110",
                "streetName": "Cartwright Mountains",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2022-01-28T14:00:50.412Z"
            },
            {
                "id": "9",
                "name": "Koch - Huels",
                "city": "Port Cleo",
                "zipCode": "96241-5294",
                "streetName": "Ziemann Trafficway",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-09-10T09:14:14.523Z"
            },
            {
                "id": "10",
                "name": "Macejkovic - Romaguera",
                "city": "Christineland",
                "zipCode": "12857-9389",
                "streetName": "Clark Glen",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2022-01-05T23:13:51.253Z"
            },
            {
                "id": "11",
                "name": "Marks - Powlowski",
                "city": "Hacienda Heights",
                "zipCode": "93857-1117",
                "streetName": "Jones Extensions",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-06-12T06:06:21.367Z"
            },
            {
                "id": "12",
                "name": "Kertzmann - Kuhic",
                "city": "Kleinland",
                "zipCode": "11409",
                "streetName": "Stone Extension",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-09-26T06:04:18.121Z"
            },
            {
                "id": "13",
                "name": "Dare - Morissette",
                "city": "Borershire",
                "zipCode": "28149-8046",
                "streetName": "Kshlerin Mount",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2022-02-01T22:39:34.036Z"
            },
            {
                "id": "14",
                "name": "Reilly Group",
                "city": "Deronville",
                "zipCode": "97589",
                "streetName": "Davion Way",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-08-08T17:52:41.048Z"
            },
            {
                "id": "15",
                "name": "Schimmel - Schoen",
                "city": "West Adah",
                "zipCode": "42068",
                "streetName": "Chance Island",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2022-01-27T20:38:29.367Z"
            },
            {
                "id": "16",
                "name": "Ondricka - Davis",
                "city": "Annaburgh",
                "zipCode": "71553",
                "streetName": "Berge Throughway",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-03-10T01:31:23.126Z"
            },
            {
                "id": "17",
                "name": "Sporer LLC",
                "city": "Pico Rivera",
                "zipCode": "89884-8149",
                "streetName": "Rodger Pines",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-08-14T22:02:19.900Z"
            },
            {
                "id": "18",
                "name": "Casper - Barrows",
                "city": "Ritchieborough",
                "zipCode": "45571-1696",
                "streetName": "Nichole Way",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-07-27T12:25:06.333Z"
            },
            {
                "id": "19",
                "name": "Gutmann, Dach and Schinner",
                "city": "Jarrettmouth",
                "zipCode": "36644",
                "streetName": "Genesis Creek",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-10-14T00:27:19.081Z"
            },
            {
                "id": "20",
                "name": "Heller, Hartmann and Upton",
                "city": "Sioux City",
                "zipCode": "72326-0682",
                "streetName": "Felton Walks",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-12-27T16:58:41.271Z"
            },
            {
                "id": "21",
                "name": "Collins - Kris",
                "city": "Troy",
                "zipCode": "29380",
                "streetName": "Fabian Ridge",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-07-01T12:46:21.261Z"
            },
            {
                "id": "22",
                "name": "Larkin, Schiller and Walsh",
                "city": "Alaynaville",
                "zipCode": "73460",
                "streetName": "Kutch Harbors",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2022-01-16T23:01:42.010Z"
            },
            {
                "id": "23",
                "name": "Oberbrunner - McLaughlin",
                "city": "Gudrunmouth",
                "zipCode": "50899",
                "streetName": "Fisher Route",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-03-07T19:50:20.800Z"
            },
            {
                "id": "24",
                "name": "Satterfield, Monahan and Haley",
                "city": "North Nathaniel",
                "zipCode": "33164",
                "streetName": "Little Greens",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-05-16T01:50:21.779Z"
            },
            {
                "id": "25",
                "name": "Feest - Heathcote",
                "city": "Port Myah",
                "zipCode": "44881-2800",
                "streetName": "June Canyon",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-03-16T11:52:43.349Z"
            },
            {
                "id": "26",
                "name": "Sawayn Group",
                "city": "Grahamchester",
                "zipCode": "14532-1744",
                "streetName": "Swaniawski Run",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-10-20T16:48:52.180Z"
            },
            {
                "id": "27",
                "name": "Roob, Morar and Bailey",
                "city": "Todhaven",
                "zipCode": "38341",
                "streetName": "Osinski Fields",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-10-13T12:44:50.462Z"
            },
            {
                "id": "28",
                "name": "Nitzsche Inc",
                "city": "Barneymouth",
                "zipCode": "69388-4933",
                "streetName": "Delphine Valleys",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-07-10T14:18:00.569Z"
            },
            {
                "id": "29",
                "name": "Champlin, Lynch and Crona",
                "city": "Candelarioborough",
                "zipCode": "08773",
                "streetName": "Gusikowski Mill",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-02-19T07:50:21.425Z"
            },
            {
                "id": "30",
                "name": "Green Group",
                "city": "Reingerfort",
                "zipCode": "21103-0525",
                "streetName": "Eileen Village",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-09-03T03:23:48.376Z"
            },
            {
                "id": "31",
                "name": "Collins - Collins",
                "city": "Titusborough",
                "zipCode": "75902-4520",
                "streetName": "Rath Prairie",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-03-22T13:06:32.373Z"
            },
            {
                "id": "32",
                "name": "Lueilwitz LLC",
                "city": "Ovashire",
                "zipCode": "52476",
                "streetName": "Astrid Ferry",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-11-20T13:02:56.078Z"
            },
            {
                "id": "33",
                "name": "Herman, Collins and Will",
                "city": "Gustburgh",
                "zipCode": "49191-6423",
                "streetName": "Littel Meadows",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-07-10T04:59:54.649Z"
            },
            {
                "id": "34",
                "name": "Boyer - Keebler",
                "city": "Hollietown",
                "zipCode": "84819",
                "streetName": "Hettinger Stream",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-08-28T16:56:52.224Z"
            },
            {
                "id": "35",
                "name": "Champlin - Schinner",
                "city": "North Fannietown",
                "zipCode": "81092",
                "streetName": "Crist Brooks",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-11-25T13:23:08.066Z"
            },
            {
                "id": "36",
                "name": "Auer, Ferry and Bayer",
                "city": "West Beverlyborough",
                "zipCode": "61798-9967",
                "streetName": "Arvilla Bypass",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-06-06T06:23:12.605Z"
            },
            {
                "id": "37",
                "name": "Beatty, Rowe and Kovacek",
                "city": "Nadiaberg",
                "zipCode": "09532",
                "streetName": "Savannah Bypass",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-03-14T06:55:56.370Z"
            },
            {
                "id": "38",
                "name": "Watsica and Sons",
                "city": "Jaredhaven",
                "zipCode": "44164-0531",
                "streetName": "Estefania Land",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-10-16T10:56:21.118Z"
            },
            {
                "id": "39",
                "name": "Walker, Lueilwitz and Rodriguez",
                "city": "Crystelshire",
                "zipCode": "41898",
                "streetName": "Oberbrunner Court",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-07-15T14:07:59.955Z"
            },
            {
                "id": "40",
                "name": "Schultz LLC",
                "city": "East Shyanneton",
                "zipCode": "12511",
                "streetName": "Marks Mountains",
                "logo": "https://via.placeholder.com/150",
                "createdAt": "2021-11-04T19:41:02.956Z"
            }
        ],
        "total": 40
    }
}