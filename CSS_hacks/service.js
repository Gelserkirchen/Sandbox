function getImagesThorughAxios(numberOfPage) {
    const promise = axios.get(`https://repetitora.net/api/JS/Images?page=${numberOfPage}&count=1`)
    return promise.then(data => data.data)
}