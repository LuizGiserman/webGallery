import express from 'express'
import router from './webGallery/routes';

const app = express();
app.use(express.urlencoded({extended: true}));
app.use(express.json())
const PORT = 3000;

app.get('/', (req,res) => {
  res.send('Express + TypeScript Server')
});

app.use('/api', router);

app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
