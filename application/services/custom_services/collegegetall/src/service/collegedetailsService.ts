import { Request, Response } from 'express';
import {collegedetailsDao} from '../dao/collegedetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let collegedetails = new collegedetailsDao();

export class collegedetailsService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into collegedetailsService.ts: GpGetAllValues')
     
     collegedetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from collegedetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
    
    
    
}