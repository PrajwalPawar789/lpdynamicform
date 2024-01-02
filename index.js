const express = require('express');
const bodyParser = require('body-parser');
const { default: axios } = require('axios');
const apiUrl = 'http://localhost:8002/optin/Algeria/Arabic'

const app = express();
const port = 3000;

let data;

axios.get(apiUrl)
  .then(response => {
    // Handle the response data
    console.log(response.data);
    data  = response.data;
  })
  .catch(error => {
    // Handle errors
    console.error('Error fetching data:', error);
  });

// Use EJS as the view engine
app.set('view engine', 'ejs');

// Parse incoming request bodies in a middleware before your handlers
app.use(bodyParser.urlencoded({ extended: true }));

// Define a route to render the EJS template
app.get('/', (req, res) => {
    // You can replace these placeholder names with the actual data you want to send
    
    

    const placeholderData = {
        field1: 'Prajwal',
        field2: 'Pawar',
        field3: 'prajwalrpawar2001',
        field4: 'manlitics',
        field5: '1-100',
        field6: 'web dev',
        field7: 'it',
        field8: '234328904732094',
        pageTitle: 'Title from the mocklp Title from the mocklp Title from the mocklp Title from the mocklp',
        formHeading1: 'formHeading1',
        formHeading2: 'formHeading2',
        buttontext: 'buttontext',
        optin: data,
    };

    // Render the EJS template and pass the placeholder data
    res.render('form', placeholderData);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
