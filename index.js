const express = require('express');
const apiRouter = require('./routes/index');
const app = express();
const port = 3000;

app.use(express.json());

apiRouter(app);

app.listen(port, () => {
    console.log(`listening on port ${port}`);
});