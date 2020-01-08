import { Request, Response } from 'express';
const database = require('../database');

class ProfsCTL{

    async getProfs(req: Request, res: Response){
        let query = `SELECT id_profesional, nombre, salario, CASE WHEN comision IS NULL THEN 0 else comision END AS comision, fecha_contrato
                     FROM profesional`;
        const response = await database.simpleExecute(query);
        const data = [];
        for(let i = 0; i < response.rows.length; i++){
            let date = new Date(response.rows[i].FECHA_CONTRATO);
            let dateFormat: string = '';
            data.push({
                id: response.rows[i].ID_PROFESIONAL,
                nombre: response.rows[i].NOMBRE,
                salario: response.rows[i].SALARIO,
                comision: response.rows[i].COMISION,
                fecha_contrato: dateFormat.concat(date.getDate().toString(),'/',(date.getMonth()+1).toString(),'/',date.getUTCFullYear().toString().substring(2,4))
            })
        }
        res.json(data);
    }

    async create (req: Request, res: Response){
        let query = `INSERT INTO profesional(nombre,salario,comision,fecha_contrato) VALUES ('${req.body.nombre}',${req.body.salario},${req.body.comision},to_date('${req.body.contrato}','YYYY-MM-DD'))`;
        await database.simpleExecute(query);
        res.json({message: 'Profesional registrado'});
    }

    update (req: Request, res: Response){
        res.json({text: 'Updating a game ' + req.params.id})
    }

    delete (req: Request, res: Response){
        let query = `DELETE FROM encuesta
                     WHERE id = ${req.params.id}`
        res.json({text : 'Deleting a poll'})
    }

}

export const profsCtl = new ProfsCTL();