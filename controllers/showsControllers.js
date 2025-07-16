import { database } from "../database.js";
import { ObjectId } from "mongodb";

// Retrieve all shows with actor names only
export const getAllShows = (req, res) => {
  database
    .collection("Shows")
    .aggregate([
      {
        $lookup: {
          from: "Actors",
          localField: "topActors.actor_id",
          foreignField: "_id",
          as: "actorDocs",
        },
      },
      {
        $project: {
          _id: 0,
          title: 1,
          numberOfSeasons: 1,
          firstEpisodeYear: 1,
          topActors: {
            $map: {
              input: "$actorDocs",
              as: "a",
              in: { name: "$$a.name" },
            },
          },
        },
      },
    ])
    .toArray()
    .then((shows) => {
      res.json(shows);
    })
    .catch((err) => {
      console.error("Error fetching shows:", err);
      res.status(500).send("Error fetching shows");
    });
};

// Creating the Show collection
export const createShow = (req, res) => {
  const { title, seasons, year, checkActor } = req.body;
  const numberOfSeasons = parseInt(seasons, 10);
  const firstEpisodeYear = parseInt(year, 10);

  let selectedActors = [];
  if (checkActor) {
    const actorIds = Array.isArray(checkActor) ? checkActor : [checkActor];
    selectedActors = actorIds.map((id) => ({
      actor_id: new ObjectId(id),
    }));
  }

  const showDocument = {
    title: title || "",
    numberOfSeasons,
    firstEpisodeYear,
    topActors: selectedActors,
  };

  database
    .collection("Shows")
    .insertOne(showDocument)
    .then((result) => {
      console.log("Show inserted:", result.insertedId);
      res.send(`
        <h2>Success!</h2>
        <p>TV Show "${showDocument.title}" created with ${selectedActors.length} actor(s).</p>
        <p><a href="/">Back to Home</a></p>
      `);
    })
    .catch((error) => {
      console.error("Error inserting show:", error);
      res.status(500).send("An error occurred while creating the show");
    });
};
