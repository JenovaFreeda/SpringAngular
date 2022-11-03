import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any, filterString : string) {
    
    if(value.length===0 || filterString===''){
      return value;
    
    }
    const content = [];
    for(const item of value){
      if(item['name']=== filterString){
        content.push(item)
      }
    }
    return content;
    
  }

}
