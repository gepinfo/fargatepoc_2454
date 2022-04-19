import { Request, Response } from 'express';
import {studentdetailsDao} from '../dao/studentdetailsDao';
import { CustomLogger } from '../config/Logger';
import * as jwt from 'jsonwebtoken';
let studentdetails = new studentdetailsDao();

export class studentdetailsService {
    
    constructor() { }
    
    public  GpCreate(req: Request, callback){
    new CustomLogger().showLogger('info', 'Enter into studentdetailsService.ts: GpCreate')
     let  studentdetailsData = req.body;
     studentdetails.GpCreate(studentdetailsData,(response)=>{
             new CustomLogger().showLogger('info', 'Exit from studentdetailsService.ts: GpCreate')
         callback(response);
         });
    }
    
    
    
    
}