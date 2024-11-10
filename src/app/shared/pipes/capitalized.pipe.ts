import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'capitalized'
})
export class CapitalizedPipe implements PipeTransform {

  transform(value: any) {
    if(!value) return false
    return value.replace(/\b\w/ig,(val:any)=>val.toUpperCase())
  }

}
