import * as mongoose from 'mongoose';
import studentdetailsModel from '../models/studentdetails';
import { CustomLogger } from '../config/Logger'


export class studentdetailsDao {
    private studentdetails = studentdetailsModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdetailsDao.ts: GpGetAllValues');

    

    
    
    
    this.studentdetails.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdetailsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}