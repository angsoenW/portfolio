import express from 'express';
import path from 'path';

import apiv1Router from './routes/api/v1/apiv1.js';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

var app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res, next) =>{
    next();
})

app.use('/api/v1', apiv1Router);

export default app;
