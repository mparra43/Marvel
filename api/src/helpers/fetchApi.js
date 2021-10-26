const baseUrl = process.env.API_URL;
const fetch = require('node-fetch');



const fetchAllApiCharacters = async () => {
    const url = `${baseUrl}`;
    const charactersApi = [];
    try {
        const response = await fetch(url);
        const data = await response.json();

        for (let i = 0; i < data.results.length; i++) {
            let {id, name, description, thumbnail, comics} = data.results[i];
            charactersApi.push({
                id,
                name,
                description,
                thumbnail: `${thumbnail.path}.${thumbnail.extension}`,
                comics,
            });
        }
        charactersApi.sort(function (a, b) {
            if (a.name > b.name) return 1;
            if (a.name < b.name) return -1;
            return 0;
        });

        return charactersApi

    } catch (error) {
        return error;
    }
}


module.exports = {
    fetchAllApiCharacters
}