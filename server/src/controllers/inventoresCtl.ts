import { Request, Response } from 'express';
const database = require('../database');

class InventoresCTL{

    async getInventores(req: Request, res: Response){
        let query = `SELECT i.nombre AS inventor, p.nombre AS pais
                     FROM inventor i INNER JOIN pais p
                     ON i.pais = p.id_pais`;
        const response = await database.simpleExecute(query);
        res.json(response.rows);
    }

    async create (req: Request, res: Response){
        let query = `INSERT INTO inventor(nombre,pais) VALUES ('${req.body.nombre}',${req.body.pais}) `;
        await database.simpleExecute(query);
        res.json({message: 'Inventor registrado'});
    }

    async retrieve(req: Request, res: Response){
        let query = `SELECT * FROM inventor`;
        const encuestas = await database.simpleExecute(query);
        res.json(encuestas.rows);
    }

    update (req: Request, res: Response){
        res.json({text: 'Updating an inventor ' + req.params.id})
    }

    delete (req: Request, res: Response){
        let query = `DELETE FROM inventor
                     WHERE id = ${req.params.id}`
        res.json({text : 'Deleting a poll'})
    }

}

export const InventoresCtl = new InventoresCTL();