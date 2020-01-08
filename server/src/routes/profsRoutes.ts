import { Router } from 'express';

import { profsCtl } from '../controllers/profsCtl';

class ProfsRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/getProfs', profsCtl.getProfs);
        this.router.post('/agregarProfesional',profsCtl.create);
        this.router.put('/:id',profsCtl.update);
        this.router.delete('/:id',profsCtl.delete);
    }

}

const profsRoutes = new ProfsRoutes();
export default profsRoutes.router;