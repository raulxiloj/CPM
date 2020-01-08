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
class InventoCTL {
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `INSERT INTO invento(nombre,pais,anio,profesional) VALUES ('${req.body.nombre}',${req.body.pais},${req.body.anio},${req.body.prof}) `;
            yield database.simpleExecute(query);
            res.json({ message: 'Invento guardado' });
        });
    }
    retrieve(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT i.id_invento, i.nombre AS invento, i2.id_inventor, i2.nombre AS inventor
                     FROM detalleinvento d INNER JOIN invento i 
                     ON d.id_invento = i.id_invento INNER JOIN inventor i2
                     ON d.id_inventor = i2.id_inventor
                     ORDER BY i.nombre`;
            const encuestas = yield database.simpleExecute(query);
            res.json(encuestas.rows);
        });
    }
    update(req, res) {
        res.json({ text: 'Updating a invent ' + req.params.id });
    }
    delete(req, res) {
        let query = `DELETE FROM invento
                     WHERE id = ${req.params.id}`;
        res.json({ text: 'Deleting an invent' });
    }
}
exports.inventoCtl = new InventoCTL();
