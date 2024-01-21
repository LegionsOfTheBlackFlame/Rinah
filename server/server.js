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
    console.log('Server live on ', PORT);
});

// Fetches all events marked visible on website
app.get('/get/availabile-events-web', (req, res) => {

  console.log('Get request received; fetching visible events for website...');

    fetchConditional("rd_events", "evnt_visibility", "website", (error, rows) => {
      console.log('Executing callback for function fetchConditional');
        if (error) {
          console.error('Error occured duting callback: ', error);
          return;
        }
        
      res.send(rows);
      console.log('fetchConditional successful; exiting function.');
        return;
      });

})

// Fetches a single event based on event ID
app.get('/get/singleeventtorender/:eventId', (req, res) => {
  console.log('Get request received; fetching event based on ID...');

  const eventId = req.params.eventId;
  console.log('Event id detected', eventId);
  
  fetchConditional("rd_events", "evnt_id", eventId, (error, rows) => {
    console.log('Executing callback for function fetchConditional');
    if (error) {
      console.error('Error:', error);
      return;
    }

  res.send(rows);
  console.log('fetchConditional successful; exiting function.');
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
console.log("columns ", columns);

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

function generateYearsList() {
  let thisList = [];
  let thisDate = new Date();
  let thisYear = thisDate.getFullYear();

  for (let i = thisYear; i < thisYear+10; i++) {
    thisList.push(i);
  }

  return thisList;

}


const thisYearList = generateYearsList();
console.log(thisYearList);
