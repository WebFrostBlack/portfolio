const express = require('express');
const path = require('path');
const app = express();

const PORT = 10000;

app.use('/js', express.static(path.join(__dirname, 'public', 'js')));
app.use('/css', express.static(path.join(__dirname, 'public', 'css')));
app.use('/assets', express.static(path.join(__dirname, 'public', 'assets')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.listen(PORT, function(err) {
    if (err) console.log("Error in server setup!");
    console.log("Server listening on PORT:", PORT);
});
