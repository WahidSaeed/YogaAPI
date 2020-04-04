var express = require('express');
var router = express.Router();
var Pranayama = require('../models/pranayama');
var db = require('../models/index');

router.post('/', async (req, res, next) => {
    try {
        let courseId = req.body.courseId;
        console.log(courseId);
        let pranayamaData = await Pranayama(db.sequelize, db.Sequelize.DataTypes)
        .findAll({ 
            attributes: [['id', 'Id'], ['pranayamaName', 'title']],
            where: { parentID: courseId }
        });
        res.status(200).json(pranayamaData);
    } catch (err) {
        console.log(err)
        res.status(500).send(err);
    }
})


router.post('/exersicesession', async (req, res, next) => {
    try {
        let pranayamaId = req.body.pranayamaId;
        await db.ExerciseSession
                .findAll({ 
                        where: { pranayamaId: pranayamaId }, 
                        attributes: ['exersiceName', 'songURL', 'description'],
                        include: [{
                            model: db.DeviceInstruction,
                            attributes: ['nostrilSide', 'seconds']
                        }],
                        raw: false
                    })
                .then((data) => {
                        res.status(200).json(data);
                })
                .catch((err) => {
                        res.status(500).send(err.message);   
                        next(err);
                });
    } catch (err) {
        res.status(500).send(err);
    }
})


module.exports = router;