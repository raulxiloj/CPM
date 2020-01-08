"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const database = require('../database');
class PaisCTL {
    getPaises(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT *
                     FROM pais`;
            const response = yield database.simpleExecute(query);
            res.json(response.rows);
        });
    }
    getRegiones(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM region`;
            const response = yield database.simpleExecute(query);
            res.json(response.rows);
        });
    }
    agregarPais(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `INSERT INTO pais(nombre,poblacion,area,region) VALUES ('${req.body.nombre}',${req.body.poblacion},${req.body.area},${req.body.region}) `;
            yield database.simpleExecute(query);
            res.json({ message: 'Pais agregado' });
        });
    }
    update(req, res) {
        res.json({ text: 'Updating a pais ' + req.params.id });
    }
    delete(req, res) {
        let query = `DELETE FROM pais
                     WHERE id = ${req.params.id}`;
        res.json({ text: 'Deleting a poll' });
    }
}
exports.paisCtl = new PaisCTL();
