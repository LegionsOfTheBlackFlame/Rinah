const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const cors = require('cors');

const functions = require('./functions');
const {fetchConditional} = functions;
const {fetchAll} = functions;
const {insertIntoTable} = functions;

console.group("Running server script...");
const PORT = 3001;

const app = express();

app.use(cors());
app.use(bodyParser.json());


app.listen(PORT, () => {
    console.log('Server live on 3001');
});

app.get('/get/availabile-events-web', (req, res) => {

    fetchConditional("rd_events", "evnt_visibility", "website", (error, rows) => {
        if (error) {
          console.error('Error:', error);
          return;
        }
    
      res.send(rows);
        return;
      });

})

// Fetches a single event based on event ID
app.get('/get/singleeventtorender/:eventId', (req, res) => {
  const eventId = req.params.eventId;
  console.log(eventId);
  
  fetchConditional("rd_events", "evnt_id", eventId, (error, rows) => {
    if (error) {
      console.error('Error:', error);
      return;
    }

  res.send(rows);
    return;
  });
  })

// Handles submittion of booking form
app.post('/post/booking', (req, res) => {
  const formData = req.body;

} )

// Handles submittion of contact form
app.post('/post/user-message', (req, res) => {
const columns = Object.keys(req.body)
console.log("Finding the columns: ", columns);

const values = Object.values(req.body);

insertIntoTable("rd_user_messages", columns, values, (error, response) => {
  if (error) {
    console.error('Error:', error);
    return;
  }

res.send(response);
  return;
})
})