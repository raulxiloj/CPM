import { Router } from 'express';

import { InventoresCtl } from '../controllers/inventoresCtl';

class InventoresRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/getInventores', InventoresCtl.getInventores);
        this.router.post('/agregarInvento',InventoresCtl.create);
        this.router.put('/:id',InventoresCtl.update);
        this.router.delete('/:id',InventoresCtl.delete);
    }

}

const inventoresRoutes = new InventoresRoutes();
export default inventoresRoutes.router;