import * as mongoose from 'mongoose';
import studentdetailsModel from '../models/studentdetails';
import { CustomLogger } from '../config/Logger'


export class studentdetailsDao {
    private studentdetails = studentdetailsModel;
    constructor() { }
    
    public async GpCreate(studentdetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into studentdetailsDao.ts: GpCreate');

    let temp = new studentdetailsModel(studentdetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from studentdetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}