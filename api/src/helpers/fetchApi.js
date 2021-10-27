const baseUrl = process.env.API_URL;
const fetch = require('node-fetch');



const fetchAllApiComic = async () => {
    const url = `${baseUrl}`;
    const charactersApi = [];
    try {
        const response = await fetch(url);
        const data = await response.json();

        for (let i = 0; i < data.data.results.length; i++) {
            let {id, title, description, thumbnail, creators, characters} = data.data.results[i];
            charactersApi.push({
                id,
                title,
                description,
                image: `${thumbnail.path}.${thumbnail.extension}`,
                creators: creators.items,
                characters: characters.items
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
    fetchAllApiComic
}