const {DataTypes} = require('sequelize');
const {sequelize} = require('../db');

const Character = sequelize.define('character', {
    uid: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    name: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },
    comics: {
        type: DataTypes.STRING,
    },
});

module.exports = Character;
