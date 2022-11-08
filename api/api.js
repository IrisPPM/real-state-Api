import express from 'express';


const api = express();

api.use(express.json());

api.get('/status', (_, res) => {
    res.json({
        msg: 'API En linea funcionando',
    });
});

export default api;
