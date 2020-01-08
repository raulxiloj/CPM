"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const paisesCtl_1 = require("../controllers/paisesCtl");
class PaisRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getPaises', paisesCtl_1.paisCtl.getPaises);
        this.router.get('/getRegiones', paisesCtl_1.paisCtl.getRegiones);
        this.router.post('/agregarPais', paisesCtl_1.paisCtl.agregarPais);
        //this.router.put('/:id',encuestaCtl.update);
        //this.router.delete('/:id',encuestaCtl.delete);
    }
}
const paisRoutes = new PaisRoutes();
exports.default = paisRoutes.router;
