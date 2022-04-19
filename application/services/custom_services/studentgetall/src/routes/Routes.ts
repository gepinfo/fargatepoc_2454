import { Request, Response, NextFunction } from "express";
import { studentdetailsController } from '../controller/studentdetailsController';


export class Routes {
    private studentdetails: studentdetailsController = new studentdetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/studentdetails').get(this.studentdetails.GpGetAllValues);
     }

}