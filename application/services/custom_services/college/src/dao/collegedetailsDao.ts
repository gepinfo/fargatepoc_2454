import * as mongoose from 'mongoose';
import collegedetailsModel from '../models/collegedetails';
import { CustomLogger } from '../config/Logger'


export class collegedetailsDao {
    private collegedetails = collegedetailsModel;
    constructor() { }
    
    public async GpCreate(collegedetailsData, callback){
    
    new CustomLogger().showLogger('info', 'Enter into collegedetailsDao.ts: GpCreate');

    let temp = new collegedetailsModel(collegedetailsData);

    
    
    
    temp.save().then((result)	=>	{

        new CustomLogger().showLogger('info', 'Exit from collegedetailsDao.ts: GpCreate');

        callback(result);
}).catch((error)=>{
callback(error);
});}


}