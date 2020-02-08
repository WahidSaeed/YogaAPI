var express = require('express');
var jwt = require('jsonwebtoken');
var router = express.Router();


var db = require('../models/index');

// Create New User
router.post('/', function(req, res, next) {

  try {
    let token = jwt.sign({userID: req.body.name + req.body.age + Date.now}, 'secretKey');
    
    let personalityTypeData = req.body.personalityData;
    let userPersonalityTypeData = [];

    let ExerciseTypeData = req.body.exerciseData;
    let userExerciseTypeData = [];

    let userCreateData = {
              id: token,
              name: req.body.name,
              age: req.body.age,
              gender: req.body.gender,
              weight: req.body.weight,
              height: req.body.height,
              notification_Id: req.body.notification_Id,
              subscription_Id: req.body.subscription_Id
            };

    personalityTypeData.forEach(personalityId => {
      userPersonalityTypeData.push({
        user: token,
        personalityId: personalityId
      })
    });

    ExerciseTypeData.forEach(exerciseId => {
      userExerciseTypeData.push({
        user: token,
        exerciseId: exerciseId
      })
    });

    db.User.create(userCreateData);
    db.UserPersonalityType.bulkCreate(userPersonalityTypeData);
    db.UserExerciseType.bulkCreate(userExerciseTypeData);

    res.status(200).json(userCreateData);
  }
  catch(err) {
    res.status(500).send(err);
  }
});

// Get User
router.get('/', async function(req, res, next) {
  var userID = req.query.userID;
  var data = await db.User.findAll({
                            where:
                              { id: userID }
                            });
  res.send(data);
});

module.exports = router;
