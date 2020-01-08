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
class ProfsCTL {
    getProfs(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT id_profesional, nombre, salario, CASE WHEN comision IS NULL THEN 0 else comision END AS comision, fecha_contrato
                     FROM profesional`;
            const response = yield database.simpleExecute(query);
            const data = [];
            for (let i = 0; i < response.rows.length; i++) {
                let date = new Date(response.rows[i].FECHA_CONTRATO);
                let dateFormat = '';
                data.push({
                    id: response.rows[i].ID_PROFESIONAL,
                    nombre: response.rows[i].NOMBRE,
                    salario: response.rows[i].SALARIO,
                    comision: response.rows[i].COMISION,
                    fecha_contrato: dateFormat.concat(date.getDate().toString(), '/', (date.getMonth() + 1).toString(), '/', date.getUTCFullYear().toString().substring(2, 4))
                });
            }
            res.json(data);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `INSERT INTO profesional(nombre,salario,comision,fecha_contrato) VALUES ('${req.body.nombre}',${req.body.salario},${req.body.comision},to_date('${req.body.contrato}','YYYY-MM-DD'))`;
            yield database.simpleExecute(query);
            res.json({ message: 'Profesional registrado' });
        });
    }
    update(req, res) {
        res.json({ text: 'Updating a game ' + req.params.id });
    }
    delete(req, res) {
        let query = `DELETE FROM encuesta
                     WHERE id = ${req.params.id}`;
        res.json({ text: 'Deleting a poll' });
    }
}
exports.profsCtl = new ProfsCTL();
