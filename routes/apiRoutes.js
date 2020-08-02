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