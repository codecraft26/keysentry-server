import express from 'express';
import morgan from "morgan";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(morgan('tiny'));

app.get('/', (req, res) => {
  res.send('Hello from Express + TypeScript server 🚀');
});



app.listen(PORT, () => {
  console.log(`Server is running at http://localhost:${PORT}`);
});
