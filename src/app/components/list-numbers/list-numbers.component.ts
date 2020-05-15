import { Component, OnInit } from '@angular/core';
import { finalize } from 'rxjs/operators';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';
import { MultiplesService } from '@app/services/multiples.service';

@Component({
  selector: 'app-list-numbers',
  templateUrl: './list-numbers.component.html',
  styleUrls: ['./list-numbers.component.scss']
})
export class ListNumbersComponent implements OnInit {

  isLoading = false;
  items: Observable<any[]>;

  constructor(private _multipleService : MultiplesService
    ) 
  {
    this.items = this._multipleService.items;
  }

  ngOnInit() {
    this.isLoading = true;
  }

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

  getColumns(number : number) : number{  
    return Math.floor(number/3) 
  }

}
