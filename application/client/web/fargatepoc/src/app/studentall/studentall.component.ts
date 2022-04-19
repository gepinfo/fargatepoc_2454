import { Component, OnInit } from '@angular/core';
import { StudentallService } from './studentall.service';

@Component({
  selector: 'app-studentall',
  templateUrl: './studentall.component.html',
  styleUrls: ['./studentall.component.scss'],
})

export class StudentallComponent implements OnInit {
    columnDefs: any = [{ headerName: 'name', field: 'name'  },{ headerName: 'age', field: 'age'  },];
    public studentdetails = {
        created_date: '',
        created_by: '',
        last_modified_by: '',
        last_modified_date: '',
        name: '',
        age: '',
    }
    gridApi: any;
 	gridColumnApi: any;
 	rowSelection = 'single';
 	defaultColDef = { editable: false, sortable: true, resizable: true, filter: true };
 	paginationPageSize = 10;
 	rowData: any = [];

    constructor (
        private studentallService: StudentallService,
    ) { }

    ngOnInit() {
        this.studentdetails.created_by = sessionStorage.getItem('email') || ''; 
        this.GpGetAllValues();
        this.GpGetAllValues();
    }
    GpGetAllValues() {
        this.studentallService.GpGetAllValues().subscribe(data => {
            this.rowData = data;
        },
        error => {
            console.log('Error', error);
        });
    }
    onGridReady(params:any) {
        this.gridApi = params.api;
        this.gridApi.sizeColumnsToFit();
        this.gridColumnApi = params.columnApi;
    }
}