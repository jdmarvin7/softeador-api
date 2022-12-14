import 'reflect-metadata';
import "./shared/container"
import express from 'express';
import { routes } from './routes/index.routes';

const app = express();
app.use(express.json());

app.use(routes);

app.listen(3333, () => {
    console.log("Server is running!");
});