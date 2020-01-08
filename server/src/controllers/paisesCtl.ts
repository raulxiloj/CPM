import { Request, Response } from 'express';
const database = require('../database');

class PaisCTL{

    async getPaises(req: Request, res: Response){
        let query = `SELECT *
                     FROM pais`;
        const response = await database.simpleExecute(query);
        res.json(response.rows);
    }

    async getRegiones(req: Request, res: Response){
        let query = `SELECT * FROM region`;
        const response = await database.simpleExecute(query);
        res.json(response.rows);
    }

    async agregarPais (req: Request, res: Response){
        let query = `INSERT INTO pais(nombre,poblacion,area,region) VALUES ('${req.body.nombre}',${req.body.poblacion},${req.body.area},${req.body.region}) `;
        await database.simpleExecute(query);
        res.json({message: 'Pais agregado'});
    }

    update (req: Request, res: Response){
        res.json({text: 'Updating a pais ' + req.params.id})
    }

    delete (req: Request, res: Response){
        let query = `DELETE FROM pais
                     WHERE id = ${req.params.id}`
        res.json({text : 'Deleting a poll'})
    }

}

export const paisCtl = new PaisCTL();