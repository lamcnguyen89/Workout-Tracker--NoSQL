let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect("mongodb://localhost/workout", {
  useNewUrlParser: true,
  useFindAndModify: false
});

let workoutSeed = [
  {
    day: new Date().setDate(new Date().getDate()-12),
    exercises: [
      {
        type: "resistance",
        name: "One-Arm Pushups",
        duration: 5,
        weight: 100,
        reps: 15,
        sets: 2
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-11),
    exercises: [
      {
        type: "resistance",
        name: "Pullups",
        duration: 5,
        weight: 150,
        reps: 17,
        sets: 2
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-10),
    exercises: [
      {
        type: "resistance",
        name: "Bent Press",
        duration: 20,
        weight: 100,
        reps: 2,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-9),
    exercises: [
      {
        type: "resistance",
        name: "Turkish Get Up",
        duration: 20,
        weight: 100,
        reps: 2,
        sets: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-8),
    exercises: [
      {
        type: "resistance",
        name: "Dumbbell Snatch",
        duration: 10,
        weight: 90,
        reps: 5,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-7),
    exercises: [
      {
        type: "cardio",
        name: "Running",
        duration: 25,
        distance: 4
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-6),
    exercises: [
      {
        type: "resistance",
        name: "Olympic Front Squat",
        duration: 20,
        weight: 210,
        reps: 5,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-5),
    exercises: [
      {
        type: "resistance",
        name: "Olympic Back Squat",
        duration: 20,
        weight: 210,
        reps: 5,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-4),
    exercises: [
      {
        type: "resistance",
        name: "Snatch Grip Deadlift",
        duration: 20,
        weight: 210,
        reps: 5,
        sets: 3
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-3),
    exercises: [
      {
        type: "resistance",
        name: "Clean and Jerk",
        duration: 20,
        weight: 210,
        reps: 1,
        sets: 5
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-2),
    exercises: [
      {
        type: "resistance",
        name: "Power Snatch",
        duration: 20,
        weight: 135,
        reps: 3,
        sets: 5
      }
    ]
  },
  {
    day: new Date().setDate(new Date().getDate()-1),
    exercises: [
      {
        type: "resistance",
        name: "Standing Press",
        duration: 5,
        weight: 135,
        reps: 5,
        sets: 1
      }
    ]
  }
];

db.Workouts.deleteMany({})
  .then(() => db.Workouts.collection.insertMany(workoutSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
