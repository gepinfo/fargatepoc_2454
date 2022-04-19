import { Request, Response } from 'express';
import {studentdetailsDao} from '../dao/studentdetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let studentdetails = new studentdetailsDao();

export class studentdetailsService {
    
    constructor() { }
    
    public  GpGetAllValues(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdetailsService.ts: GpGetAllValues')
     
     studentdetails.GpGetAllValues((response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdetailsService.ts: GpGetAllValues')
         callback(response);
         });
    }
    
    
    
    
}