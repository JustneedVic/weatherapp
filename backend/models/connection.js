const mongoose = require('mongoose');

const connectionString = 'mongodb+srv://JustneedVic:prune7@clustervic.oyrhpey.mongodb.net/weatherapp';

mongoose.connect(connectionString, { connectTimeoutMS: 2000 })
  .then(() => console.log('Database connected'))
  .catch(error => console.error(error));
