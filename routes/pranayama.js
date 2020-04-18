var express = require('express');
var router = express.Router();
var Pranayama = require('../models/pranayama');
var db = require('../models/index');
const { QueryTypes } = require('sequelize');


function alterData(pranayamaData) {
    let data = [];
    const extractChild = (element) => {
        const toExtract = pranayamaData.filter(x => x.Id === element.Id && element.childId !== null)
        if(toExtract.length > 0){
            return Array.from(toExtract.map(element => {
                    return {
                        Id: element.childId,
                        title: element.childTitle
                    }
            }));
        }
        else {
            return null
        }
    }

    const alreadyExists = (element) => {
        return data.find(x => x.Id === element.Id) !== undefined;
    }

    for (let index = 0; index < pranayamaData.length; index++) {
        const element = pranayamaData[index];
        if(!alreadyExists(element)) {
            data.push({
                Id: element.Id,
                title: element.title,
                options: extractChild(element)
            });
        }
    }
    return data;
}

router.post('/', async (req, res, next) => {
    try {
        let courseId = req.body.courseId;
        console.log(courseId);

        let pranayamaData = await db.sequelize.query("select \
            a.id as Id, \
            a.pranayamaName as title, \
            b.Id as childId, \
            b.pranayamaName as childTitle \
            from `Pranayamas` a \
            left join `Pranayamas` b on a.id = b.parentId where a.parentID = :courseId", 
        { 
            replacements: { courseId: courseId },
            type: QueryTypes.SELECT 
        });
        pranayamaData = alterData(pranayamaData);
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