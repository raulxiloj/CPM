"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const profsCtl_1 = require("../controllers/profsCtl");
class ProfsRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getProfs', profsCtl_1.profsCtl.getProfs);
        this.router.post('/agregarProfesional', profsCtl_1.profsCtl.create);
        this.router.put('/:id', profsCtl_1.profsCtl.update);
        this.router.delete('/:id', profsCtl_1.profsCtl.delete);
    }
}
const profsRoutes = new ProfsRoutes();
exports.default = profsRoutes.router;
