import { Router } from 'express';

import { encuestaCtl } from '../controllers/encuestaCtl';

class EncuestaRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/getEncuestas', encuestaCtl.getEncuestas);
        this.router.post('/nuevaEncuesta',encuestaCtl.create);
        this.router.post('/agregarPregunta',encuestaCtl.agregarPregunta);
        this.router.put('/:id',encuestaCtl.update);
        this.router.delete('/:id',encuestaCtl.delete);
    }

}

const encuestaRoutes = new EncuestaRoutes();
export default encuestaRoutes.router;