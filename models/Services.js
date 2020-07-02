const Sequelize = require('sequelize');
const db = require('../config/db');
const slug = require('slug');
const shortid = require('shortid');



const Services = db.define('services', {
    id : {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    ServiceId: Sequelize.STRING,
    Name: Sequelize.STRING,
    BusinessUnit: Sequelize.STRING,
    ServiceOwner: Sequelize.STRING,
    Description: Sequelize.STRING,
    MigrationStatus: Sequelize.STRING,
    MigrationPlannedDate: Sequelize.STRING,
    Analytis: Sequelize.STRING,
    Dependencies: Sequelize.STRING,
    MigrationTechnique: Sequelize.STRING,
    RTO: Sequelize.STRING,
    RPO: Sequelize.STRING,
    Criticality: Sequelize.STRING,
    MigrationActualDate: Sequelize.STRING,
    Uptime: Sequelize.STRING,
    DowntimeAllowed: Sequelize.STRING,
    MigrationGroup: Sequelize.STRING,
    TestPlan: Sequelize.STRING,
    CurrentLocation: Sequelize.STRING,
    Platform: Sequelize.STRING,
    FutureLocation: Sequelize.STRING,

    url: Sequelize.STRING,
}, 
//Añadimos los hooks (ejecutan una función en un determinado tiempo)
{
    hooks:{
        beforeCreate(service) {
            const url = slug(service.name).toLowerCase();

            proyecto.url = `${url}-${shortid.generate()}`;
        }
    }
});

module.exports = Services;

