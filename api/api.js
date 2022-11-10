import express from 'express';

import userRoutes from './routes/userRoutes.js';
import authRoutes from './routes/authRoutes.js';
import propertyRoutes from './routes/propertyRoutes.js';
//import messageRoutes from './routes/messageRoutes.js';


const api = express();

api.use(express.json());

api.get('/status', (_, res) => {
    res.json({
        msg: 'API En linea funcionando',
    });
});

api.use('/auth', authRoutes);
api.use('/users', userRoutes);
api.use('/propertys', propertyRoutes);
//api.use('/messages', messageRoutes);




export default api;
