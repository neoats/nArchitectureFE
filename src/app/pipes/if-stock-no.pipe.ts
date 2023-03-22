import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ifStockNo'
})
export class IfStockNoPipe implements PipeTransform {

  transform(value: number): any {
    if (value == 0)
    {
      return "stock finished"
    }
    else {
      return value;
    }
  }

}
