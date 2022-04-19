import { Request, Response } from 'express';
import { collegedetailsService } from '../service/collegedetailsService';
import { CustomLogger } from '../config/Logger'
let collegedetails = new collegedetailsService();

export class collegedetailsController {
    
    constructor() { }
    
    public GpCreate(req: Request, res: Response) {
collegedetails.GpCreate(req, (response) => {
                new CustomLogger().showLogger('info', 'Enter into collegedetailsController.ts: GpCreate');
     res.status(200);
     res.json(response);
                new CustomLogger().showLogger('info', 'Exit from collegedetailsController.ts: GpCreate');
    })}


}