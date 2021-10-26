const {response} = require('express');
const {fetchAllApiComic} = require('../helpers/fetchApi')
const {Comic} = require('../models/Comic');




const charactersAll = async (req, res = response) => {

    try {
        const comicApi = await fetchAllApiComic()
        return res.status(200).json({data: comicApi});
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}



const addFavorite = async (req, res = response) => {
    const {uid,cid, title, description, image, creators, characters} = req.body;

    try {
        let newPokemon = await Comic.create({
            uid,
            cid,
            title,
            description,
            image,
            creators: creators.toString(),
            characters: characters.toString()

        });
        return res.status(201).json({ok: true, msg: "se agregó un nuevo comic  favorito"});
    } catch (e) {
        return res.status(500).json({msg: "error"})
    }
}
const allFavorites = async (req, res = response) => {
    try {
        const {count, rows} = await Comic.findAndCountAll();
        return res.status(201).json({data: rows});
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}

module.exports = {
    charactersAll,
    addFavorite,
    allFavorites,
}