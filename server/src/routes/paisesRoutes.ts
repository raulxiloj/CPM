import { Router } from 'express';

import { paisCtl } from '../controllers/paisesCtl';

class PaisRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/getPaises', paisCtl.getPaises);
        this.router.get('/getRegiones',paisCtl.getRegiones);
        this.router.post('/agregarPais',paisCtl.agregarPais);
        //this.router.put('/:id',encuestaCtl.update);
        //this.router.delete('/:id',encuestaCtl.delete);
    }

}

const paisRoutes = new PaisRoutes();
export default paisRoutes.router;