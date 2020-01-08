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
class InventoresCTL {
    getInventores(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT i.nombre AS inventor, p.nombre AS pais
                     FROM inventor i INNER JOIN pais p
                     ON i.pais = p.id_pais`;
            const response = yield database.simpleExecute(query);
            res.json(response.rows);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `INSERT INTO inventor(nombre,pais) VALUES ('${req.body.nombre}',${req.body.pais}) `;
            yield database.simpleExecute(query);
            res.json({ message: 'Inventor registrado' });
        });
    }
    retrieve(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM inventor`;
            const encuestas = yield database.simpleExecute(query);
            res.json(encuestas.rows);
        });
    }
    update(req, res) {
        res.json({ text: 'Updating an inventor ' + req.params.id });
    }
    delete(req, res) {
        let query = `DELETE FROM inventor
                     WHERE id = ${req.params.id}`;
        res.json({ text: 'Deleting a poll' });
    }
}
exports.InventoresCtl = new InventoresCTL();
