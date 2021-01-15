const express = require('express');
const port = process.env.PORT || 3003;

const app = express();
const router = express.Router();

app.use(express.static(`${__dirname}/dist`));

router.get('/', (req, res) => {
  res.sendFile(`${__dirname}/dist/index.html`);
});

app.use(router);

const server = app.listen(port, () => {
  console.log('Nexus is listening');
});