
function getData() {

    /* console.log(url);

    var clientId = `fVezc4nd9RCXdePTloDC73KLjLaxpxr2ra_RR7wJob0`
    var query = document.getElementById(`search`).value;*/

    var q = document.getElementById(`searchInput`).value;

    var url = `https://images-api.nasa.gov/search?q=${q}`;


    axios.get(url, {responseType: `json`})
        .then (function (res) {
            console.log(res.data)
        })

        .catch (function(err) {
            console.error(err)
        })

}



var getButton = document.getElementById(`buttonGET`);
getButton.addEventListener(`click`, getData);

