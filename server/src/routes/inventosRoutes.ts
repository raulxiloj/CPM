import { Router } from 'express';

import { inventoCtl } from '../controllers/inventosCtl';

class InventosRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/', inventoCtl.retrieve);
        this.router.post('/agregarInvento',inventoCtl.create);
        this.router.put('/:id',inventoCtl.update);
        this.router.delete('/:id',inventoCtl.delete);
    }

}

const inventosRoutes = new InventosRoutes();
export default inventosRoutes.router;