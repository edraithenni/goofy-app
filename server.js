const express = require('express');
const path = require('path');
const app = express();
const PORT = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.send(`
    <h1>Hatsune Miku готовит хайперпоп ипишку вместе с Grimes, slayr, MOLIY, Odetari, George Clanton, Frost Children и XAMIYA. Не хватает только славы мэрлоу и мэдкида</h1>
    <button onclick="document.getElementById('img').src='/images/smeh.jpeg'">показать smeh</button>
    <br><br>
    <img id="img" style="max-width:500px; display:none;" onload="this.style.display='block'">
  `);
});

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
