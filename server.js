const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const projectRoutes = require('./routes/projectRoutes');
const taskRoutes = require('./routes/taskRoutes');
const sequelize = require('./config/database');

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.use('/api/projects', projectRoutes);
app.use('/api/tasks', taskRoutes);

// Sync Database
sequelize.sync({ alter: true })  // Gunakan 'alter' untuk memperbarui tabel yang ada jika diperlukan
  .then(() => {
    console.log('Database synced');
  })
  .catch((err) => {
    console.log('Error syncing database: ', err);
  });


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
