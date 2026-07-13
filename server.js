const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('<h1>Hatsune Miku готовит хайперпоп ипишку вместе с Grimes, slayr, MOLIY, Odetari, George Clanton, Frost Children и XAMIYA</h1>');
});

app.listen(3000, () => console.log('Server running on port 3000'));
