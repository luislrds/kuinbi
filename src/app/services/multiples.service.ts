import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { Items } from '../models/items'

@Injectable({
  providedIn: 'root'
})
export class MultiplesService {

  private itemsCollection: AngularFirestoreCollection<Items>;
  items: Observable<Items[]>;
 
  constructor(private afs: AngularFirestore) {
    this.itemsCollection = afs.collection<Items>('items');
    this.items = this.itemsCollection.valueChanges();
  }

  addItem(item: Items) {
    this.itemsCollection.add(item);
  }
 
  //Esta función se encarga de determinar los múltiplos que hay dentro del rango
  getMultiples(number : number) : any{
    var items : any[] = [];
    var allMultiples : any[] = [];
    var multiples : any[] = [];
  
    var divThree = Math.floor(number / 3);
    var divFive = Math.floor(number / 5);
    var divSeven = Math.floor(number / 7);

    if (divThree > 0) {
      var m = divThree * 3

      while(m > 0){

        allMultiples.push(m)
        m -= 3;
      }
    }  
    
    if(divFive > 0) {
      var m = divFive * 5

      while(m > 0){

        allMultiples.push(m)
        m -= 5;
      }
    }  

    if(divSeven > 0) {
      var m = divSeven * 7
      while(m > 0){

        allMultiples.push(m)
        m -= 7;
      }
    }  

    allMultiples = allMultiples.filter(function(item, pos) {
      return allMultiples.indexOf(item) == pos;
    }).sort(function (a, b) {
      return a - b;
    })
    
    allMultiples.map(a=>{
      var item = {number : a, multiples : multiples}
      item.multiples = [];
     
      if((a % 3) == 0){
        item.multiples.push(3)
      }

      if((a % 5) == 0){
        item.multiples.push(5)
      }

      if((a % 7) == 0){
        item.multiples.push(7)
      }

      items.push(item)
    });
    
    return items
  }
}