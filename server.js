const express = require('express');
const mongoose = require('mongoose');
const userRoutes = require('./routes/userRoutes');
const employeeRoutes = require('./routes/employeeRoutes');

const app = express();
app.use(express.json());

mongoose.connect('mongodb://127.0.0.1:27017/comp3123_assignment1')
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

app.use('/api/v1/user', userRoutes);
app.use('/api/v1/emp', employeeRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
