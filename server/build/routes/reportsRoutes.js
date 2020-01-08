"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const reportsCtl_1 = require("../controllers/reportsCtl");
class ReportesRoutes {
    constructor() {
        this.router = express_1.Router();
        this.config();
    }
    config() {
        this.router.get('/1', reportsCtl_1.reportsCtl.report1);
        this.router.get('/2', reportsCtl_1.reportsCtl.report2);
        this.router.get('/3', reportsCtl_1.reportsCtl.report3);
        this.router.get('/4', reportsCtl_1.reportsCtl.report4);
        this.router.get('/5', reportsCtl_1.reportsCtl.report5);
        this.router.get('/6', reportsCtl_1.reportsCtl.report6);
        this.router.get('/7', reportsCtl_1.reportsCtl.report7);
        this.router.get('/8', reportsCtl_1.reportsCtl.report8);
        this.router.get('/9', reportsCtl_1.reportsCtl.report9);
        this.router.get('/10', reportsCtl_1.reportsCtl.report10);
        this.router.get('/11', reportsCtl_1.reportsCtl.report11);
        this.router.get('/12', reportsCtl_1.reportsCtl.report12);
    }
}
const reportesRoutes = new ReportesRoutes();
exports.default = reportesRoutes.router;
