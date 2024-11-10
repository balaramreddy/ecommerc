import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'search'
})
export class SearchPipe implements PipeTransform {
  
  transform(data:any[],searchText:any) {
      if(!data) return []
      if(!searchText) return data

      return data.filter(item=>{
        return Object.keys(item).some(val=>{
          if(item[val] && (typeof item[val]==='string' || typeof item[val]==='number')){
            return item[val].toString().toLowerCase().includes(searchText.toLowerCase())
          }
          return false
        })
      })
  }
}
