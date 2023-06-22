const express = require('express');
const { MongoClient, ObjectID } = require('mongodb');

const app = express();
const port = 3000;

const mongoURL = 'mongodb://localhost:27017';
const dbName = 'eventDB';

MongoClient.connect(mongoURL, { useUnifiedTopology: true }, (err, client) => {
  if (err) {
    console.error('Error connecting to the database', err);
    return;
  }

  console.log('Connected to MongoDB');

  const db = client.db(dbName);

app.use(express.json());

app.get('/events/:id', (req, res) => {
    const eventId = req.params.id;
  
    db.collection('events')
      .findOne({ _id: new ObjectID(eventId) })
      .then(event => {
        if (event) {
          res.json(event);
        } else {
          res.status(404).json({ error: 'Event not found' });
        }
      })
      .catch(error => {
        console.error('Error retrieving event', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });
  
  
  app.get('/events', (req, res) => {
    const page = parseInt(req.query.page) || 1;
    const limit = parseInt(req.query.limit) || 10;
    const skip = (page - 1) * limit;
  
    db.collection('events')
      .find()
      .sort({ createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .toArray()
      .then(events => {
        res.json(events);
      })
      .catch(error => {
        console.error('Error retrieving events', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });
  

  app.post('/events', (req, res) => {
    const eventData = req.body;
  
    db.collection('events')
      .insertOne(eventData)
      .then(result => {
        const eventId = result.insertedId;
        res.json({ eventId });
      })
      .catch(error => {
        console.error('Error creating event', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });
  
  
  app.delete('/events/:id', (req, res) => {
    const eventId = req.params.id;
  
    db.collection('events')
      .deleteOne({ _id: new ObjectID(eventId) })
      .then(result => {
        if (result.deletedCount === 1) {
          res.json({ message: 'Event deleted' });
        } else {
          res.status(404).json({ error: 'Event not found' });
        }
      })
      .catch(error => {
        console.error('Error deleting event', error);
        res.status(500).json({ error: 'Internal server error' });
      });
  });
  
  app.listen(port, () => {
    console.log(`Server running on port ${port}`);
  });
});
