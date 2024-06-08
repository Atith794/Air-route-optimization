const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect('mongodb+srv://test-user:4_c5HRsihbf%21%23dV@airport-routes.int5hrd.mongodb.net/?retryWrites=true&w=majority&appName=Airport-Routes', 
  { useNewUrlParser: true, useUnifiedTopology: true }
);

const Airline = require('./Models/airlines.js');
const Airport = require('./Models/airports.js');
const Route = require('./Models/routes.js');


app.get('/airports', async (req, res) => {
  try {
    const airports = await Airport.find();
    res.json(airports);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

app.post('/shortest-route', async (req, res) => {
  const { start, end } = req.body;
    console.log(start);
    console.log(end);
  const findShortestRoute = async (start, end) => {
    const routes = await Route.find({});
    console.log(routes);
    const airportsMap = {};

    routes.forEach(route => {
      if (!airportsMap[route.sourceAirport]) {
        airportsMap[route.sourceAirport] = [];
      }
      airportsMap[route.sourceAirport].push(route.destinationAirport);
    });

    let visited = new Set();
    let queue = [[start, [start]]];

    while (queue.length > 0) {
      let [current, path] = queue.shift();
      if (current === end) return path;

      visited.add(current);

      if (airportsMap[current]) {
        for (let neighbor of airportsMap[current]) {
          if (!visited.has(neighbor)) {
            queue.push([neighbor, [...path, neighbor]]);
          }
        }
      }
    }
    return null;
  };

  try {
    const route = await findShortestRoute(start, end);
    res.json({ route });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

const PORT = 3000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
