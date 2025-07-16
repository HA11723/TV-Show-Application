import { database } from "../database.js";

// Get all actors from database
export const getAllActors = (req, res) => {
  database
    .collection("Actors")
    .find()
    .toArray()
    .then((actors) => {
      // render the home page template with list of actors
      res.locals.actors = actors;
      res.render("index");
    })
    .catch((e) => {
      console.error(e);
      res.status(500).send("An error has occurred");
    });
};

// Handle POST requests to create new actors
export const createActor = (req, res) => {
  // Get the actor name from the form data
  const actorName = req.body.actorName;

  // Create the actor document with only name property
  // (_id will be automatically created by MongoDB)
  const actorDocument = {
    name: actorName,
  };

  // Insert the document into the Actors collection
  database
    .collection("Actors")
    .insertOne(actorDocument)
    .then((result) => {
      console.log("Actor inserted successfully:", result);
      // Send success response with link back to home page
      res.send(`
                <h2>Success!</h2>
                <p>Actor "${actorName}" has been created successfully.</p>
                <a href="/">Back to Home Page</a>
            `);
    })
    .catch((error) => {
      console.error("Error inserting actor:", error);
      res.status(500).send("An error occurred while creating the actor");
    });
};
