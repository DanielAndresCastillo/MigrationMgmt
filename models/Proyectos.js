const Sequelize = require('sequelize');
const db = require('../config/db');
const slug = require('slug');
const shortid = require('shortid');



const Proyectos = db.define('proyectos', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    BusinessUnit: Sequelize.STRING,
    ServiceOwner: Sequelize.STRING,
    Description: Sequelize.STRING,
    url: Sequelize.STRING,
}, 
//Añadimos los hooks (ejecutan una función en un determinado tiempo)
{
    hooks:{
        beforeCreate(proyecto) {
            const url = slug(proyecto.nombre).toLowerCase();

            proyecto.url = `${url}-${shortid.generate()}`;
        }
    }
});

module.exports = Proyectos;

