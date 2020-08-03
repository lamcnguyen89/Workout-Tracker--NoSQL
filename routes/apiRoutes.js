// Application uses express to handle routes:
// Create all the routes to listen to the requests from the front end.
    // You will need at least Four (4) api routes:
        // - GET ( "/api/workouts" ) - Get all workouts.
            // - to allow the user to see the last workout routine. 
            // - You will also need to figure out how to calculate the total duration from all exercises inside the exercises Array.
        // - GET ( "/api/workouts/range" ) - Get the first 7 Workouts from the Workout table to be used in the "stats" page. 
            // - This will allow the user to to see workout stats  
        // - POST ( "/api/workouts" ) - Create a new Workout
            // - Allows the user to create new workout routines
        // - PUT ( "/api/workouts/:id" ) - Update a Workout
            // - For allowing the user to see workout stats (charts).

const router = require("express").Router();
const Workouts = require("../model/Workout.js");

// GET ( "/api/workouts" ) - Get all workouts. 
// In the front end JavaScript we will do a loop that moves through the entire length of the array.
// Also we will do a different loop that moves through the first seven  objects of the array.
router.get("/api/workouts", (req, res) => {
    Workouts.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

router.get("/api/workouts/range", (req, res) => {
    Workouts.find({})
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
          });
});

// POST ( "/api/workouts" ) - Create a new Workout
router.post("/api/workouts", ({body}, res) => {
    Workouts.create(body)
        .then(dbWorkouts => {
            res.json(dbWorkouts);
        })
        .catch(err => {
            res.status(400).json(err);
        });
 })

// PUT ( "/api/workouts/:id" ) - Update a Workout
router.put("/api/workouts/:id", ({body,params},res) =>{
    Workouts.findByIdAndUpdate(
        params.id,
        {$push:{exercises:body} },
        {new: true, runValidators: true }
    )
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
    .catch(err => {
        res.status(400).json(err);
    });
})

// Delete ( "/api/deleteworkouts/:id" ) - Delete a Workout
router.delete("/api/deleteworkouts/:id", ({body}, res) => {
    Workouts.findByIdAndDelete(
        params.id,
        {$push:{exercises:body} },
        {new: true, runValidators: true }
    )
    .then(dbWorkouts => {
        res.json(dbWorkouts);
    })
        .catch(err => {
            res.status(400).json(err);
        });
 })


module.exports = router;