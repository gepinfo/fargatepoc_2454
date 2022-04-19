import { Component, OnInit } from '@angular/core';
import { CollegecreateService } from './collegecreate.service';

@Component({
  selector: 'app-collegecreate',
  templateUrl: './collegecreate.component.html',
  styleUrls: ['./collegecreate.component.scss'],
})

export class CollegecreateComponent implements OnInit {
    public collegedetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        email: '',
    }

    constructor (
        private collegecreateService: CollegecreateService,
    ) { }

    ngOnInit() {
        this.collegedetails.created_by = sessionStorage.getItem('email') || ''; 
    }
    GpCreate() {
        this.collegecreateService.GpCreate(this.collegedetails).subscribe(data => {
            this.collegedetails.name = ''
 	 	this.collegedetails.email = ''
        },
        error => {
            console.log('Error', error);
        });
    }
}