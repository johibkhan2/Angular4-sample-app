import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {FormGroup, FormControl, Validators, FormBuilder} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {FileUploader} from 'ng2-file-upload';
// declare var jquery:any;
// declare var $ :any;



@Component({selector: 'app-quotation', 
templateUrl: './quotation.component.html', styleUrls: ['./quotation.component.scss']})
export class QuotationComponent implements OnInit {

  constructor() {}
  form : FormGroup;
  products = [];
  pieces=[];
  fobs=[];
  currencies=[];
  tts=[];
  showDescription=false;
  defaultDescription='';
  changeDescription='';


  public uploader:FileUploader = new FileUploader({url: 'https://evening-anchorage-3159.herokuapp.com/api/'});

  ngOnInit() {

    this.products = [
      {
       value:"d",
       label:"Key words of products you are looking for" 
      },
      {
        value: 'a',
        label: 'Product1'
      }, {
        value: 'b',
        label: 'Product2'
      }, {
        value: 'c',
        label: 'Product3'
      }
    ];
    this.pieces= [
    { id: 0, Name: 'Pieces'},  
    { id: 1, Name: '20 Container' },
    { id: 2, Name: '40 Container'}
    ];
     this.fobs= [
    { id: 0, Name: 'FOB'},  
    { id: 1, Name: 'XYZ' }
    ];
     this.currencies= [
    { id: 0, Name: 'USD'},  
    { id: 1, Name: 'EURO' }
    ];
    this.tts= [
    { id: 0, Name: 'T/T'},  
    { id: 1, Name: 'L/C' }
    ];
    this.form = new FormGroup({});
    this.form.addControl('myProduct', new FormControl(['d']));
    this.form.addControl('pieceId', new FormControl(['0']));
    this.form.addControl('fobId', new FormControl(['0']));
    this.form.addControl('currencyId', new FormControl(['0']));
    this.form.addControl('ttId', new FormControl(['0']));

  }


  toggleDescrition(){
  if(this.showDescription){
  this.showDescription=false;
  }
  else{
    this.showDescription=true;
  }
  }
  

}
