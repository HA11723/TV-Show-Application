# TV Show Application

A Node.js web application for managing TV shows and actors with a MongoDB database backend.

## 🎬 Features

- **TV Show Management**: Create and view TV shows with details like title, seasons, and year
- **Actor Management**: Add actors to the system and associate them with TV shows
- **Web Interface**: User-friendly forms for creating shows and actors
- **RESTful API**: JSON endpoints for programmatic access to data
- **MongoDB Integration**: Persistent data storage with MongoDB

## 🛠️ Tech Stack

- **Backend**: Node.js with Express.js
- **Database**: MongoDB
- **Template Engine**: EJS
- **Package Manager**: npm

## 📋 Prerequisites

Before running this application, make sure you have:

- [Node.js](https://nodejs.org/) (version 14 or higher)
- [MongoDB](https://www.mongodb.com/) installed and running
- npm (comes with Node.js)

## 🚀 Installation

1. **Clone the repository**

   ```bash
   git clone <your-repository-url>
   cd a6-Hadi-Nasir
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Set up environment variables**
   Create a `.env` file in the root directory and add your MongoDB connection string:

   ```
   MONGODB_URI=mongodb://localhost:27017/tvshows
   ```

4. **Start the application**
   ```bash
   node app.js
   ```

The server will start on `http://localhost:3000`

## 📖 Usage

### Web Interface

1. **Create a TV Show**:

   - Fill in the title, number of seasons, and year
   - Select actors from the available list
   - Click "Submit"

2. **Add an Actor**:

   - Enter the actor's name
   - Click "Submit"

3. **View Shows**: Click the "Shows" link to see all shows in JSON format

### API Endpoints

#### Actors

- `GET /api/v1/actors` - Get all actors
- `POST /api/v1/actors` - Create a new actor
  - Body: `{ "actorName": "Actor Name" }`

#### Shows

- `GET /api/v1/shows` - Get all shows with actor information
- `POST /api/v1/shows` - Create a new show
  - Body: `{ "title": "Show Title", "seasons": 5, "year": 2020, "checkActor": ["actorId1", "actorId2"] }`

## 📁 Project Structure

```
a6-Hadi-Nasir/
├── app.js                 # Main application file
├── database.js            # Database connection setup
├── collections.js         # Database collections configuration
├── controllers/           # Business logic
│   ├── actorsControllers.js
│   └── showsControllers.js
├── routes/               # API routes
│   ├── index.js
│   ├── actors.js
│   └── shows.js
├── views/                # EJS templates
│   └── index.ejs
├── package.json          # Dependencies and scripts
└── README.md            # This file
```

## 🔧 Configuration

The application uses the following environment variables:

- `MONGODB_URI`: MongoDB connection string (default: `mongodb://localhost:27017/tvshows`)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request


## 👨‍💻 Author

**Hadi Nasir**

---

**Note**: Make sure MongoDB is running before starting the application. The application will automatically create the necessary collections when it starts up.
