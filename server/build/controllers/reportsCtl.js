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
class ReportsCTL {
    //Reporte-1 
    report1(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT p.nombre, COUNT(rp.id_pregunta) AS Preguntas_contestadas
                     FROM pais p LEFT JOIN res_pais rp
                     ON p.id_pais = rp.id_pais
                     GROUP BY p.nombre
                     ORDER BY Preguntas_contestadas DESC`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Pais', 'Preguntas contestadas']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    nombre: response.rows[i].NOMBRE,
                    preguntas: response.rows[i].PREGUNTAS_CONTESTADAS
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-2 
    report2(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT t1.area, t1.profesional, CASE WHEN p.nombre IS NULL THEN 'KING PRESIDENT' ELSE p.nombre END AS jefe
                     FROM 
                     (SELECT a.id_area, a.nombre AS area, p.id_profesional, p.nombre AS profesional, a.jefe
                     FROM profesional_area pa INNER JOIN area a
                     ON pa.id_area = a.id_area INNER JOIN profesional p
                     ON pa.id_profesional = p.id_profesional) T1 LEFT JOIN profesional p
                     ON T1.jefe = p.id_profesional
                     ORDER BY jefe`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Jefe', 'Area', 'Subalternos']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    jefe: response.rows[i].JEFE,
                    area: response.rows[i].AREA,
                    subalterno: response.rows[i].PROFESIONAL
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-3 
    report3(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT nombre, salario,area, promedio
                     FROM(
                     SELECT p.nombre, p.salario, a.nombre AS area
                     FROM profesional_area pa INNER JOIN profesional p
                     ON pa.id_profesional = p.id_profesional INNER JOIN area a
                     ON pa.id_area = a.id_area) T1 INNER JOIN
                     (SELECT a.nombre AS area2, ROUND(AVG(p.salario),2) AS promedio
                     FROM profesional_area pa INNER JOIN profesional p
                     ON pa.id_profesional = p.id_profesional INNER JOIN area a
                     ON pa.id_area = a.id_area
                     GROUP BY a.nombre) T2 
                     ON T1.area = T2.area2
                     WHERE salario > promedio`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Nombre', 'Salario', 'Area', 'Promedio']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    nombre: response.rows[i].NOMBRE,
                    salario: response.rows[i].SALARIO,
                    area: response.rows[i].AREA,
                    promedio: response.rows[i].PROMEDIO
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-4
    report4(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT p.nombre,SUM(dr.res_correcta) AS correctas
                     FROM pais p INNER JOIN res_pais rp
                     ON p.id_pais = rp.id_pais INNER JOIN detallerespuesta dr 
                     ON dr.id_encuesta = rp.id_encuesta AND dr.id_pregunta = rp.id_pregunta AND dr.id_respuesta = rp.id_respuesta
                     GROUP BY p.nombre
                     ORDER BY correctas DESC`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Nombre', 'Respuestas correctas']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    nombre: response.rows[i].NOMBRE,
                    correctas: response.rows[i].CORRECTAS
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-5
    report5(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT p.nombre AS pais, COUNT(p2.nombre) AS frontera, p.area
                     FROM frontera f INNER JOIN pais p 
                     ON f.id_pais = p.id_pais INNER JOIN pais p2
                     ON f.id_frontera = p2.id_pais
                     GROUP BY p.nombre, p.area
                     HAVING COUNT(p2.nombre) > 7
                     ORDER BY p.area DESC`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Pais', 'Fronteras', 'Area']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    pais: response.rows[i].PAIS,
                    frontera: response.rows[i].FRONTERA,
                    area: response.rows[i].AREA
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-6
    report6(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT nombre, salario, CASE WHEN comision IS NULL THEN 0 ELSE comision END AS comision, CASE WHEN comision IS NULL THEN salario ELSE salario + comision END as total
                     FROM profesional
                     WHERE comision > salario*0.25`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Nombre', 'Salario', 'Comision', 'Total']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    nombre: response.rows[i].NOMBRE,
                    salario: response.rows[i].SALARIO,
                    comision: response.rows[i].COMISION,
                    total: response.rows[i].TOTAL
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-7
    report7(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT nombre, poblacion
                     FROM pais 
                     WHERE poblacion > (SELECT SUM(poblacion)
                                        FROM pais p INNER JOIN region r 
                                        ON p.region = r.id_region
                                        WHERE r.nombre = 'Centro America')`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Nombre', 'Poblacion']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    nombre: response.rows[i].NOMBRE,
                    poblacion: response.rows[i].POBLACION
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-8 
    report8(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT p.nombre AS profesional, a.nombre as AREA
                     from area a INNER JOIN profesional p
                     ON a.jefe = p.id_profesional
                     WHERE 
                        a.id_area <> (SELECT pa.id_area
                        FROM detalleinvento d INNER JOIN invento i
                        ON d.id_invento = i.id_invento INNER JOIN inventor i2 
                        ON d.id_inventor = i2.id_inventor INNER JOIN profesional p
                        ON i.profesional = p.id_profesional INNER JOIN profesional_area pa
                        ON p.id_profesional = pa.id_profesional
                        WHERE i2.nombre = 'Pasteur')
                        AND p.nombre <> 'KING PRESIDENT'`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Profesional', 'Area']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    profesional: response.rows[i].PROFESIONAL,
                    area: response.rows[i].AREA
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-9
    report9(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT i.nombre AS invento, i2.nombre AS inventor, i.anio
                     FROM detalleinvento d INNER JOIN invento i 
                     ON d.id_invento = i.id_invento INNER JOIN inventor i2 
                     ON d.id_inventor = i2.id_inventor
                     WHERE anio = (SELECT anio
                                   FROM detalleinvento d INNER JOIN invento i 
                                   ON d.id_invento = i.id_invento INNER JOIN inventor i2 
                                   ON d.id_inventor = i2.id_inventor
                                   WHERE i2.nombre = 'Benz')`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Invento', 'Inventor', 'Anio']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    invento: response.rows[i].INVENTO,
                    inventor: response.rows[i].INVENTOR,
                    anio: response.rows[i].ANIO
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-10
    report10(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT nombre AS isla, poblacion, area
                     FROM pais 
                     WHERE id_pais NOT IN(SELECT DISTINCT p.id_pais
                                          FROM frontera f INNER JOIN pais p 
                                          ON f.id_pais = p.id_pais INNER JOIN pais p2
                                          ON f.id_frontera = p2.id_pais)
                                          AND area >= (SELECT area
                                                        FROM pais 
                                                        WHERE nombre = 'Japon')`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Isla', 'Poblacion', 'Area']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    isla: response.rows[i].ISLA,
                    poblacion: response.rows[i].POBLACION,
                    area: response.rows[i].AREA
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-11
    report11(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT p.nombre AS pais, p2.nombre AS frontera
                     FROM frontera f INNER JOIN pais p 
                     ON f.id_pais = p.id_pais INNER JOIN pais p2
                     ON f.id_frontera = p2.id_pais
                     ORDER BY p.nombre`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Pais', 'Frontera']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    pais: response.rows[i].PAIS,
                    frontera: response.rows[i].FRONTERA
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
    //Reporte-12
    report12(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            let query = `SELECT nombre, salario, CASE WHEN comision IS NULL THEN 0 ELSE comision END AS comision, CASE WHEN comision IS NULL THEN salario ELSE salario + comision END as total
                     FROM profesional
                     WHERE salario > comision*2`;
            const response = yield database.simpleExecute(query);
            const data = {
                encabezado: ['#', 'Nombre', 'Salario', 'Comision', 'Total']
            };
            const rows = [];
            for (let i = 0; i < response.rows.length; i++) {
                rows.push({
                    nombre: response.rows[i].NOMBRE,
                    salario: response.rows[i].SALARIO,
                    comision: response.rows[i].COMISION,
                    total: response.rows[i].TOTAL
                });
            }
            data.rows = rows;
            res.json(data);
        });
    }
}
exports.reportsCtl = new ReportsCTL();
