import * as mongoose from 'mongoose';
import collegedetailsModel from '../models/collegedetails';
import { CustomLogger } from '../config/Logger'


export class collegedetailsDao {
    private collegedetails = collegedetailsModel;
    constructor() { }
    
    public async GpGetAllValues(callback){
    
    new CustomLogger().showLogger('info', 'Enter into collegedetailsDao.ts: GpGetAllValues');

    

    
    
    
    this.collegedetails.find().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from collegedetailsDao.ts: GpGetAllValues');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}