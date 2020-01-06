import express, { Application } from 'express';
import morgan from 'morgan';
import cors from 'cors';

import encuestaRoutes from './routes/encuestasRoutes'
import inventosRoutes from './routes/inventosRoutes'
import reportsRoutes from './routes/reportsRoutes'

const database = require('./database');

class Server {

    public app: Application;
    
    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(): void {
        this.app.set('port', 3000);
        this.app.use(morgan('dev'));
        this.app.use(cors());
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes(): void {
        this.app.use('/encuesta',encuestaRoutes);
        this.app.use('/invento',inventosRoutes);
        this.app.use('/reportes',reportsRoutes)
    }

    start(): void {
        database.initialize();
        this.app.listen(this.app.get('port'), () => {
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();
