import express from 'express';

import rootRouter from '../src/routes/root.js';
import postListRouter from '../src/routes/post-list.js';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.get('/', rootRouter);
app.use('/post-list', postListRouter);

app.listen(3000, () => { console.log('express on'); });

export default app;