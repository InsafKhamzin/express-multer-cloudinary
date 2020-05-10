const express = require('express');

const app = express();

app.use(express.json({ extended: false }));
app.use('/api/image', require('./routes/imageUpload'));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('Server on port ' + PORT));