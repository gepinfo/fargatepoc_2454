import { Request, Response } from 'express';
import { collegedetailsService } from '../service/collegedetailsService';
import { CustomLogger } from '../config/Logger'
let collegedetails = new collegedetailsService();

export class collegedetailsController {
    
    constructor() { }
    
    public GpGetAllValues(req: Request, res: Response) {
collegedetails.GpGetAllValues(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegedetailsController.ts: GpGetAllValues');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegedetailsController.ts: GpGetAllValues');
    })}


}