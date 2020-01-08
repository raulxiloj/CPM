import { Request, Response } from 'express';
const database = require('../database');

class EncuestaCTL{

    async getEncuestas(req: Request, res: Response){
        let query = `SELECT * FROM encuesta`;
        const response = await database.simpleExecute(query);
        let encuestas: any = [];
        for(let i = 0; i < response.rows.length; i++){
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
        const response2 = await database.simpleExecute(query2);
        
        for(let i = 0; i < response2.rows.length; i++){
            for(let j = 0; j < encuestas.length; j++){
                if(encuestas[j].nombre === response2.rows[i].ENCUESTA){
                    encuestas[j].preguntas.push(response2.rows[i].PREGUNTA);
                }
            }
        }

        res.json(encuestas);
    }

    async create (req: Request, res: Response){
        let query = `INSERT INTO encuesta(nombre) VALUES ('${req.body.nombre}') `;
        await database.simpleExecute(query);
        res.json({message: 'Encuesta guardada'});
    }

    async agregarPregunta(req: Request, res: Response){
        //Pregunta
        let query = `INSERT INTO pregunta(nombre) VALUES('${req.body.nombre}')`;
        await database.simpleExecute(query);
        let query2 = `SELECT id_pregunta 
                      FROM pregunta
                      WHERE nombre = '${req.body.nombre}'`;
        const response = await database.simpleExecute(query2);
        console.log(response.rows[0].ID_PREGUNTA);
        //Encuesta-Pregunta
        let query3 = `INSERT INTO encuesta_pregunta(id_encuesta,id_pregunta) VALUES(${req.body.id},${response.rows[0].ID_PREGUNTA})`;
        await database.simpleExecute(query3);
        res.json({message: 'Pregunta agregada'});
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

export const encuestaCtl = new EncuestaCTL();