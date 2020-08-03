// Application uses MongoDB for its database
// Include the following properties to the Workout Model:
    // day (type -> Date)
    // exercises (type -> Array)
        // Inside the "exercises" property Array, you will store each of the exercises for that workout as objects.
        // Each object inside the "exercises" property will have the following properties:
            // - type (type -> String)
            // - name (type -> String)
            // - duration (type -> Number)
            // - weight (type -> Number)
            // - reps (type -> Number)
            // - sets (type -> Number)
            // - distance (type -> Number)

const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const workoutSchema = new Schema({

    day: {
        type: Date,
        default: Date.now
    },
    exercises: [{
        type: {
            type: String
        },
        name: {
            type: String
        },
        duration: {
            type: Number
        },
        weight: {
            type: Number
        },
        reps: {
            type: Number
        },
        sets: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]

});

const Workouts = mongoose.model("Workouts", workoutSchema);

module.exports = Workouts;