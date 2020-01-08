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
class EncuestaCTL {
    getEncuestas(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT * FROM encuesta`;
            const response = yield database.simpleExecute(query);
            let encuestas = [];
            for (let i = 0; i < response.rows.length; i++) {
                encuestas.push({
                    id: response.rows[i].ID_ENCUESTA,
                    nombre: response.rows[i].NOMBRE,
                    preguntas: []
                });
            }
            let query2 = `SELECT e.nombre AS encuesta, p.nombre AS pregunta 
                      FROM encuesta_pregunta ep INNER JOIN encuesta e
                      ON ep.id_encuesta = e.id_encuesta INNER JOIN pregunta p
                      ON ep.id_pregunta = p.id_pregunta`;
            const response2 = yield database.simpleExecute(query2);
            for (let i = 0; i < response2.rows.length; i++) {
                for (let j = 0; j < encuestas.length; j++) {
                    if (encuestas[j].nombre === response2.rows[i].ENCUESTA) {
                        encuestas[j].preguntas.push(response2.rows[i].PREGUNTA);
                    }
                }
            }
            res.json(encuestas);
        });
    }
    create(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `INSERT INTO encuesta(nombre) VALUES ('${req.body.nombre}') `;
            yield database.simpleExecute(query);
            res.json({ message: 'Encuesta guardada' });
        });
    }
    agregarPregunta(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            //Pregunta
            let query = `INSERT INTO pregunta(nombre) VALUES('${req.body.nombre}')`;
            yield database.simpleExecute(query);
            let query2 = `SELECT id_pregunta 
                      FROM pregunta
                      WHERE nombre = '${req.body.nombre}'`;
            const response = yield database.simpleExecute(query2);
            console.log(response.rows[0].ID_PREGUNTA);
            //Encuesta-Pregunta
            let query3 = `INSERT INTO encuesta_pregunta(id_encuesta,id_pregunta) VALUES(${req.body.id},${response.rows[0].ID_PREGUNTA})`;
            yield database.simpleExecute(query3);
            res.json({ message: 'Pregunta agregada' });
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
exports.encuestaCtl = new EncuestaCTL();
