import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { catchError, map, startWith, switchMap, filter, debounceTime, tap , finalize} from 'rxjs/operators';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { MultiplesService } from '@app/services/multiples.service';
import { FormControl, FormBuilder, FormGroup, FormArray, Validators, ValidatorFn } from '@angular/forms';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  isLoading = false;
  items: Observable<any[]>;
  itemsForm : FormGroup;  
  searchNumber = new FormControl();
  new = false;

  constructor(private _multipleService : MultiplesService,
    private fb: FormBuilder) 
  {
    this.items = this._multipleService.items;

    this.itemsForm = this.fb.group({
      parameter: [0, Validators.required],
      item : [null, Validators.required],
    })


  }

  //Al momento que cambie el valor se buscan los múltiplos y se asignan a la variable para poder ser enviados a la base de datos
  changeValue(){     
    this.itemsForm.controls['item'].setValue(this._multipleService.getMultiples(this.itemsForm.controls['parameter'].value))  
  }


  ngOnInit() {
    this.isLoading = false;
  }

  item(): FormArray {
    return this.itemsForm.get("item") as FormArray
  }

  addItem(item: any) {
    this.item().push(item);       
  }

  //Función para asignar el color según el múltiplo
  assignColor(multiples: any[]) : string{
    if(multiples[0] == 3){
      return "green"
    }else if(multiples[0] == 5){
      return "red"
    }else if(multiples[0] == 7){
      return "blue"
    }else{
      return ""
    }    
  }

//Función para determinar el número de columnas para la grid list
  getColumns(number : number) : number{  

    let value = Math.floor(number/3) ;
    if(value > 10){
      value = 10
    }

    return value
  }

//Función para determinar el ancho de la fila para grid list
  getRowHeigth(number : number) : string{  

    let value = Math.floor(number/3) ;
    if(value > 10){
      value = 2
    }else if(value < 10 && value > 7){
      value = 4
    }else if(value <= 7 && value > 4){
      value = 6
    }else{
      value = 10
    }
    
    return value +": 1"
  }


  onSubmit() {
  
    this._multipleService.addItem(this.itemsForm.value)
    this.new = !this.new
  
  }
  
}
