const {response} = require('express');
const {fetchAllApiCharacters} = require('../helpers/fetchApi')
const {Character} = require('../models/Character');




const charactersAll = async (req, res = response) => {

    try {
        const charactersApi = await fetchAllApiCharacters()
        return res.status(200).json({data: charactersApi});
    } catch (error) {
        return res.status(500).json({msg: "error"});
    }
}



const addFavorite = async (req, res = response) => {
    const {uid,cid, name, description, image, comics} = req.body;

    try {
        let newPokemon = await Character.create({
            uid,
            cid,
            name,
            description,
            image,
            comics: comics.toString()
        });
        return res.status(201).json({ok: true, msg: "se agregó un nuevo personaje  favorito"});
    } catch (e) {
        return res.status(500).json({msg: "error"})
    }
}


module.exports = {
    charactersAll,
    addFavorite,
}