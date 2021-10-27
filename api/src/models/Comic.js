const {DataTypes} = require('sequelize');
const {sequelize} = require('../db');

const Comic = sequelize.define('comic', {
    uid: {
        primaryKey: true,
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    cid: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    title: {
        type: DataTypes.STRING,
    },
    description: {
        type: DataTypes.STRING,
    },
    image: {
        type: DataTypes.STRING,
    },

});

module.exports = {
    Comic
}
;
