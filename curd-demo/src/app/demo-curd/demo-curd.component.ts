import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CurdApiService } from '../services/curd-api.service';
import { CurdModel } from './curd-model';

@Component({
  selector: 'app-demo-curd',
  templateUrl: './demo-curd.component.html',
  styleUrls: ['./demo-curd.component.css']
})
export class DemoCurdComponent implements OnInit {

  public formValue !: FormGroup;
  public allData !: any;
  public curdObj : CurdModel = new CurdModel();
  showAdd!:boolean ;
  showUpdate!:boolean;

  constructor(private api : CurdApiService , private formBuilder : FormBuilder) { }

  ngOnInit(): void {
    this.formValue = this.formBuilder.group({
      name : [''],
      email :['']
    })
    this.getAllData();
  }

  onClickAdd(){
    this.formValue.reset();
    this.showAdd = true;
    this.showUpdate = false;

  }

  getAllData(){
    this.api.getData().subscribe(data=>{
      this.allData = data;
    })
  }
  postCurdData(){
    this.curdObj.name = this.formValue.value.name;
    this.curdObj.email = this.formValue.value.email;

    this.api.postData(this.curdObj).subscribe(data=>{
      alert("added successfully");
      let ref = document.getElementById('cancle')
      ref?.click();
      this.formValue.reset();
      this.getAllData();
    },err=>{
      alert("something went wrong")
    }
    )
  }

  editData(data:any){
    this.showAdd = false;
    this.showUpdate = true;
    this.curdObj.id =  data.id;
    this.formValue.controls['name'].setValue(data.name);
    this.formValue.controls['email'].setValue(data.email);
  }

  updateData(){
    this.curdObj.name = this.formValue.value.name;
    this.curdObj.email = this.formValue.value.email;

    this.api.updateData(this.curdObj,this.curdObj.id).subscribe(res=>{
      alert("Data is Updated");
      this.formValue.reset();
      let ref = document.getElementById('cancle')
      ref?. click();
      this.getAllData();
    },err=>{
      alert("error in updated")
    })
  }

  deleteCurdData(data:any){
    this.api.deleteData(data.id).subscribe(res=>{
      alert("data deleted");
      this.getAllData();
    },err=>{
      alert("error in deleting")
    })
  }

}
