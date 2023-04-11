import { Request, Response } from 'express';
import { lessons } from '../data/lessons'

export const allListen = (req:Request, res:Response) => {
    try {
        res.send({
            STATUS: "SUCCESS",
            MESSAGE: "All lessons sent successfully!",
            BODY:lessons})
    } catch (err:any) {
        res.send({
            STATUS: "FAILURE",
            MESSAGE: err.message,
          });
    }
    
}