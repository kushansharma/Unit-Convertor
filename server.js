const express = require('express');
const app = express();
const fs = require('fs');
const path = require('path');

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))
app.set('port', (2100))

app.use((req, res, next) => {
   res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
   res.setHeader('Pragma', 'no-cache');
   res.setHeader('Expires', '0');
   next();
});

app.listen(app.get('port'), () => console.log(`Listening to ${app.get('port')}`))