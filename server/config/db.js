import mongoose from 'mongoose';

const options = { useNewUrlParser: true, useUnifiedTopology: true };

mongoose
  .connect(process.env.DB_URL, options)
  .then(() => {
    console.log('Database connection established!');
  })
  .catch((err) => {
    console.log('Error connecting Database instance due to:', err);
  });
