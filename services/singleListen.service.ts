import { Request, Response } from 'express';
import { lessons } from '../data/lessons'

export const singleListen = (req:Request, res:Response) => {
    try {
        const id = parseInt(req.params.id);
        const result = lessons.filter((item) => item.id === id);

        if(result.length < 1){
            res.send({
                STATUS: "FAILURE",
                MESSAGE: "This lesson is not available yet.",
              });
        }

        res.send({
            STATUS: "SUCCESS",
            MESSAGE: "Requested lesson sent successfully!",
            BODY:result})
    } catch (err:any) {
        res.send({
            STATUS: "FAILURE",
            MESSAGE: err.message,
          });
    }
    
}