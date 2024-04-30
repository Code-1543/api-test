const express = require('express');
const data = require('./data.json');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    res.send(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centered Button</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
    </head>
    <body>
      <button onclick="goToFreeApi()">Free API</button>
    
      <script>
        function goToFreeApi() {
          window.location.href = "/free";
        }
      </script>
    </body>
    </html>
    
    `)
})

app.get('/free', (req, res) => {
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Centered Button</title>
    <style>
      body {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100vh;
        margin: 0;
      }
      button {
        padding: 10px 20px;
        font-size: 16px;
        background-color: #007bff;
        color: white;
        border: none;
        border-radius: 5px;
        cursor: pointer;
      }
    </style>
    </head>
    <body>
      <button onclick="goToFreeApi()">Go To FULL API</button>
    
      <script>
        function goToFreeApi() {
          window.location.href = "/free/api";
        }
      </script>
    </body>
    </html>
    `)
})

app.get('/free/api', (req, res) => {
    res.json(data);
});

//////////////////////////////////////////

app.get('/free/api/users', (req, res) => {
    res.json(data.users);
});
app.get('/free/api/users/en', (req, res) => {
    res.json(data.users[0].users_en);
});
app.get('/free/api/users/th', (req, res) => {
    res.json(data.users[0].users_th);
});

////////////////////////////////////////////

app.get('/free/api/products', (req, res) => {
    res.json(data.products)
})
app.get('/free/api/products/en', (req, res) => {
    res.json(data.products[0].products_en)
})
app.get('/free/api/products/th', (req, res) => {
    res.json(data.products[0].products_th)
})



app.listen(1111, () => console.log(`SERVER IS RUNNING`));
