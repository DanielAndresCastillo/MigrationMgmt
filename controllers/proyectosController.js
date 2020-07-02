const Proyectos = require('../models/Proyectos');
// const { noExtendLeft } = require('sequelize/types/lib/operators');


exports.proyectosHome= async(req, res)=>{
    const proyectos = await Proyectos.findAll();

    res.render('index', {
        nombrePagina : 'Proyectos',
        proyectos
    });
}

exports.formularioProyecto = async  (req, res) => {
    const proyectos = await Proyectos.findAll();

    res.render('nuevoProyecto', {
        nombrePagina : 'Nuevo Proyecto/Servicio',
        proyectos
    });
}

exports.nuevoProyecto = async (req,res) => {
    const proyectos = await Proyectos.findAll();

    const {nombre} = req.body;
    const {ServiceName} = req.body;    
    const {BusinessUnit} = req.body;
    const {ServiceId} = req.body;
    const {ServiceOwner} = req.body;
    const {Description} = req.body;
    const {MigrationStatus} = req.body;
    const {MigrationPlannedDate} = req.body;
    const {Analytis} = req.body;
    const {Dependencies} = req.body;
    const {MigrationTechnique} = req.body;
    const {RTO} = req.body;
    const {RPO} = req.body;
    const {Criticality} = req.body;
    const {MigrationActualDate} = req.body;
    const {Uptime} = req.body;
    const {DowntimeAllowed} = req.body;
    const {MigrationGroup} = req.body;
    const {TestPlan} = req.body;
    const {CurrentLocation} = req.body;
    const {Platform} = req.body;
    const {FutureLocation} = req.body;

    let errores =[];
    if(!nombre) {
        errores.push({'texto': 'Agrega un Nombre al Proyecto'})
    }

    // const resultado = await Proyectos.create({ tarea, estado});




    //Si hay errores
    if(errores.length >0) {
        res.render('nuevoProyecto',{
            nombrePagina: 'Nuevo Proyecto',
            errores,
            proyectos,
            
        })
    } else {
        // const url = slug(nombre).toLowerCase();
        const proyecto= await Proyectos.create({ 
            nombre,
            ServiceName,
            BusinessUnit,
            nombre,
            BusinessUnit,
            ServiceId,
            ServiceOwner,
            Description,
            MigrationStatus,
            MigrationPlannedDate,
            Analytis,
            Dependencies,
            MigrationTechnique,
            RTO,
            RPO,
            Criticality,
            MigrationActualDate,
            Uptime,
            DowntimeAllowed,
            MigrationGroup,
            TestPlan,
            CurrentLocation,
            Platform,
            FutureLocation
        });
        res.redirect('/');
    }
}

// exports.proyectoPorUrl = async (req, res, next)=> {

exports.proyectoPorUrl = async(req, res, next)=> {
    const proyectos = await Proyectos.findAll();

    const proyecto = await Proyectos.findOne({
        where: {
            url: req.params.url
        }
    });

    if(!proyecto) return next();

    // Render a la vista
    res.render('tareas',{
        nombrePagina: 'Tareas del Proyecto',
        proyecto,
        proyectos

    })
}