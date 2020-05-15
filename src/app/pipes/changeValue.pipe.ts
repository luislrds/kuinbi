import { Pipe, PipeTransform } from '@angular/core';
import { Item} from '../models/item'
 

@Pipe({name: 'changevalue'})
export class ChangeValue implements PipeTransform {
  transform(value : any, values: Item): string {
    let text = values.number.toString();
    if(values.multiples.length > 1){
        text = value + " (";
        values.multiples.forEach(element => {
            text += element + ","   
        });        
    }
    return text.replace(/,$/,")")    
  }

}