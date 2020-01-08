"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const inventoresCtl_1 = require("../controllers/inventoresCtl");
class InventoresRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/getInventores', inventoresCtl_1.InventoresCtl.getInventores);
        this.router.post('/agregarInvento', inventoresCtl_1.InventoresCtl.create);
        this.router.put('/:id', inventoresCtl_1.InventoresCtl.update);
        this.router.delete('/:id', inventoresCtl_1.InventoresCtl.delete);
    }
}
const inventoresRoutes = new InventoresRoutes();
exports.default = inventoresRoutes.router;
