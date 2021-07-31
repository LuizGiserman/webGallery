import express from 'express'
import DataBase from './webGallery/database/db';

const db = new DataBase;
const app = express();
const PORT = 3000;
app.get('/', (req,res) => res.send('Express + TypeScript Server'));

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
  console.log(db.user)
});
