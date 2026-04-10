import express from 'express';
import router from '../src/router.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3000 ;
const host = process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0';

app.use(express.json());

app.use(cors({
  origin: 'http://localhost:8080'
}));

app.use('/', router);


app.listen(port, () => {
  console.log(`Server running at http://${host}:${port}`);
});