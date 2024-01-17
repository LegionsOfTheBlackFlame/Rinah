const mysql = require('mysql2');


//Establish connection to database
let connection;
try {
    connection = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '',
        database: 'rinah',
    });

    console.log('Connected to the database!');

} catch (error) {
    console.error('Error connecting to the database:', error);
}

// Fetch all from chosen table
function fetchAll(table, callback) {
    connection.connect();

    const sqlQuery = `SELECT * FROM ${table}`;
    connection.query(sqlQuery, (error, results, fields) => {
        if (error) {
            console.error('Error fetching rows:', error);
            connection.end();
            return callback(error, null);
        }

        console.log('Fetched rows:', results);

        connection.end();

        callback(null, results);
    });
}


// Fetch from chosen table all rows that have the chosen values in a chosen column
function fetchConditional(table, column, value, callback) {

    connection.connect();

    const sql = `SELECT * FROM ${table} WHERE ${column} LIKE ?`;
    const testValue = `%${value}%`;

    connection.query(sql, testValue, (error, results, fields) => {
        if (error) {
            console.error('Error fetching rows:', error);
            connection.end();
            return callback(error, null);
        }

        console.log('Fetched rows:', results);

        callback(null, results);

      
       
    });
}

//Post user messages sent from the contact page
function insertIntoTable(table, columns, values, callback) {

    connection.connect();

    const targetColumns = columns.join(', ');

    const valuesPlaceholder = values.map(() => '?').join(', ');

    const sql = `INSERT INTO ${table} (${targetColumns}) VALUES (${valuesPlaceholder})`;

    connection.query(sql, values, (error, results, fields) => {
        // if (error) {
        //     console.error('Error inserting data into the database:', error);
        //     res.status(500).json({ error: 'Internal Server Error' });
        //   } else {
        //     console.log('Data inserted successfully:', results);
        //     res.status(200).json({ message: 'Form submitted successfully' });
        //   }
    })
}

//Post booked event to the calendar table

//Check selected event's availability

//Archive past calendars

//Order calendar enteries



module.exports = {
    fetchConditional,
    fetchAll,
    insertIntoTable
};



