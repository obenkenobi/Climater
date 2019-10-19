const methodOverride = require('method-override');
const bodyParser     = require('body-parser');
const express        = require('express');
const app            = express();
const db             = require('./models').mongoose;

//---------------------------------------------------------------------------------------
// Middlewares
//---------------------------------------------------------------------------------------
app.use(express.json());
app.use(methodOverride('_method'));

//---------------------------------------------------------------------------------------
// Use routes
//---------------------------------------------------------------------------------------
app.use('/api', require('./controllers'));

//---------------------------------------------------------------------------------------
// Create Server Using port
//---------------------------------------------------------------------------------------
const port = process.env.PORT || 8080;
const server = app.listen(port, () => {
  console.log(`Server is running on port ${port}`)
});

//---------------------------------------------------------------------------------------
// Background processes
//---------------------------------------------------------------------------------------
server.on('listening', () => {
});
