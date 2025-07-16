const setupCollections = (database) => {
  let showCollection = database.createCollection("Shows", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["title", "numberOfSeasons", "firstEpisodeYear", "topActors"],
        properties: {
          title: {
            bsonType: "string",
            minLength: 2,
            maxLength: 30,
            description: "Title must be a string between 2 and 30 characters",
          },
          numberOfSeasons: {
            bsonType: "int",
            minimum: 1,
            description:
              "Number of seasons must be an integer with minimum value of 1",
          },
          firstEpisodeYear: {
            bsonType: "int",
            minimum: 1900,
            maximum: 2100,
            description:
              "First episode year must be an integer between 1900 and 2100",
          },
          topActors: {
            bsonType: "array",
            description: "Top actors must be an array of actor objects",
            items: {
              bsonType: "object",
              required: ["actor_id"],
              properties: {
                actor_id: {
                  bsonType: "objectId",
                  description: "Actor ID must be a valid MongoDB ObjectId",
                },
              },
            },
          },
        },
      },
    },
  });

  let actorCollection = database.createCollection("Actors", {
    validator: {
      $jsonSchema: {
        bsonType: "object",
        required: ["name"],
        properties: {
          name: {
            bsonType: "string",
            minLength: 1,
            maxLength: 30,
            description: "Name must be a string between 1 and 30 characters",
          },
        },
      },
    },
  });

  return Promise.all([showCollection, actorCollection]);
};

export default setupCollections;
