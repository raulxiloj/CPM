"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventosCtl_1 = require("../controllers/inventosCtl");
class InventosRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/', inventosCtl_1.inventoCtl.retrieve);
        this.router.post('/agregarInvento', inventosCtl_1.inventoCtl.create);
        this.router.put('/:id', inventosCtl_1.inventoCtl.update);
        this.router.delete('/:id', inventosCtl_1.inventoCtl.delete);
    }
}
const inventosRoutes = new InventosRoutes();
exports.default = inventosRoutes.router;
