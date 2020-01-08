import { Request, Response } from 'express';
const database = require('../database');

class InventoCTL{

    async create (req: Request, res: Response){
        let query = `INSERT INTO invento(nombre,pais,anio,profesional) VALUES ('${req.body.nombre}',${req.body.pais},${req.body.anio},${req.body.prof}) `;
        await database.simpleExecute(query);
        res.json({message: 'Invento guardado'});
    }

    async retrieve(req: Request, res: Response){
        let query = `SELECT i.id_invento, i.nombre AS invento, i2.id_inventor, i2.nombre AS inventor
                     FROM detalleinvento d INNER JOIN invento i 
                     ON d.id_invento = i.id_invento INNER JOIN inventor i2
                     ON d.id_inventor = i2.id_inventor
                     ORDER BY i.nombre`;
        const encuestas = await database.simpleExecute(query);
        res.json(encuestas.rows);
    }

    update (req: Request, res: Response){
        res.json({text: 'Updating a invent ' + req.params.id})
    }

    delete (req: Request, res: Response){
        let query = `DELETE FROM invento
                     WHERE id = ${req.params.id}`
        res.json({text : 'Deleting an invent'})
    }

}

export const inventoCtl = new InventoCTL();