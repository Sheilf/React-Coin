export const handleResponse = (response) => {
    /*
        Fetch error helper.
        @param {object} response
    */
    return response.json().then(
        json => {
            return response.ok ? json : Promise.reject(json);
        }
    );
}
