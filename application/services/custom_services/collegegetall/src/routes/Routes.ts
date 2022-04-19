import { Request, Response, NextFunction } from "express";
import { collegedetailsController } from '../controller/collegedetailsController';


export class Routes {
    private collegedetails: collegedetailsController = new collegedetailsController();
    
    public routes(app): void {
          app.route('/health/entity-service').get((req: Request, res: Response) => {
            res.status(200).send({
                status: 'up'
            })
        })
        app.route('/collegedetails').get(this.collegedetails.GpGetAllValues);
     }

}