import { Router } from 'express';

import { reportsCtl } from '../controllers/reportsCtl';

class ReportesRoutes{

    router: Router = Router();

    constructor(){
        this.config();
    }

    config(): void {
        this.router.get('/1', reportsCtl.report1);
        this.router.get('/2', reportsCtl.report2);
        this.router.get('/3', reportsCtl.report3);
        this.router.get('/4', reportsCtl.report4);
        this.router.get('/5', reportsCtl.report5);
        this.router.get('/6', reportsCtl.report6);
        this.router.get('/7', reportsCtl.report7);
        this.router.get('/8', reportsCtl.report8);
        this.router.get('/9', reportsCtl.report9);
        this.router.get('/10', reportsCtl.report10);
        this.router.get('/11', reportsCtl.report11);
        this.router.get('/12', reportsCtl.report12);
    }

}

const reportesRoutes = new ReportesRoutes();
export default reportesRoutes.router;