"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const encuestaCtl_1 = require("../controllers/encuestaCtl");
class EncuestaRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getEncuestas', encuestaCtl_1.encuestaCtl.getEncuestas);
        this.router.post('/nuevaEncuesta', encuestaCtl_1.encuestaCtl.create);
        this.router.post('/agregarPregunta', encuestaCtl_1.encuestaCtl.agregarPregunta);
        this.router.put('/:id', encuestaCtl_1.encuestaCtl.update);
        this.router.delete('/:id', encuestaCtl_1.encuestaCtl.delete);
    }
}
const encuestaRoutes = new EncuestaRoutes();
exports.default = encuestaRoutes.router;
