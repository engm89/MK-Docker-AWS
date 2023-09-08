const express = require('express');
const mongoose = require('mongoose');
const redis = require('redis');

const PORT = 4000;
const app = express();

const REDIS_PORT = 6379;
const REDIS_HOST = 'redis';
const redisClient = redis.createClient(
    {
        url: `redis://${REDIS_HOST}:${REDIS_PORT}`
    }
);
redisClient.on('error', (err) => console.log('Redis Client Error', err));
redisClient.on('connect', () => console.log('connect to Redis...', ));
redisClient.connect()

const DB_USER = 'root';
const DB_PASS = 'example';
const DB_PORT = 27017
const DB_HOST_IP = 'mongo';

const URI = `mongodb://${DB_USER}:${DB_PASS}@${DB_HOST_IP}:${DB_PORT}`;
mongoose.connect(URI).then(() => console.log(`connect to DB ..`)).catch((err) => console.log('failed to connect to DB ..', err));

app.get('/', (req, res) => res.send(`<h1> Hello World, using Docker Hub </h1>`));

app.listen(PORT, () => console.log(`App is up running on port: ${PORT}`));

