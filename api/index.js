import express from 'express';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', (req, res) => {
  res.send({ message: 'hello using express with vercel' });
});

app.listen(3000, () => { console.log('express on'); });

export default app;